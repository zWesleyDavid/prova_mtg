function registerUser() {
    document.getElementById('registerForm').addEventListener('submit', async function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const roles = document.getElementById('roles').value.split(',').map(role => role.trim());

        const userData = {
            username: username,
            password: password,
            roles: roles
        };

        try {
            const response = await fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const data = await response.json();
                resetForm();
            } else {
                const error = await response.json();
                alert('Erro ao registrar usuário: ' + error.message);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro na requisição. Tente novamente.');
        }
    });
}
function resetForm() {
    document.getElementById('registerForm').reset(); 
}

const registeredUsers = [];


function handleRegister(event) {
    event.preventDefault(); 
    const formData = new FormData(document.getElementById('registerForm'));

    const userData = {
        username: formData.get('username'),
        password: formData.get('password'),
        roles: formData.get('roles')
    };

  
    if (registeredUsers.some(user => user.username === userData.username)) {
        alert('Nome de usuário já cadastrado. Por favor, escolha outro.');
        return false; 
    }

  
    const registered = cadastrouUsuario();

    
    if (registered) {
        registeredUsers.push(userData);
       
    }

    return registered; 
   
}

function cadastrouUsuario() {
    const form = document.getElementById('registerForm');

    if (form.checkValidity()) {
        document.getElementById('registerForm').style.visibility = 'hidden'; 
        document.getElementById('header').style.visibility = 'visible';
    
        return true;
    } else {
        form.reportValidity();
        return false; 
    }
    
}

function logouUsuario() {
    const form = document.getElementById('loginForm');

    if (form.checkValidity()) {
        document.getElementById('loginForm').style.visibility = 'hidden'; 
        document.getElementById('header').style.visibility = 'visible';
    
        return true;
    } else {
        form.reportValidity();
        return false; 
    }
    
}
async function listUsers() {
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
          
            },
        });

        if (response.ok) {
            const users = await response.json();
            displayUsers(users);
        } else {
            const error = await response.json();
            alert('Erro ao listar usuários: ' + error.message);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro na requisição. Tente novamente.');
    }
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Usuário: ${user.username} | Roles: ${user.roles.join(', ')}`; 
        userList.appendChild(listItem);

   
    });
}


document.getElementById('loadUsersButton').addEventListener('click', listUsers);

function cadastrarUsuario(){
    document.getElementById('listaUsuarios').style.visibility = "hidden"
    document.getElementById('registerForm').style.visibility = "visible"
}

function openUserList(){
    document.getElementById('listaUsuarios').style.visibility = "visible"
     document.getElementById('registerForm').style.visibility = "hidden"
}

function goToLoginButton(){
    event.preventDefault(); 
      document.getElementById('registerForm').style.display = "none"
      document.getElementById('loginForm').style.display = "flex"
}


window.onload = registerUser;



document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Tentando fazer login com:", { username, password }); 

    try {
        const response = await fetch('http://localhost:3000/auth/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorResponse = await response.json(); 
            console.error('Erro de resposta do servidor:', errorResponse);
            throw new Error('Erro ao fazer login: ' + (errorResponse.message || 'Erro desconhecido'));
        }

        const data = await response.json();
        localStorage.setItem('authToken', data.token); 

        alert('Login bem-sucedido!');
       document.getElementById('loginForm').style.display = "none"
       document.getElementById('header').style.visibility = "visible"
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao fazer login: ' + error.message); 
    }
});


