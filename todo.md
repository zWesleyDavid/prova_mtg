## ToDo List - 1º Bimestre 

**1. Setup do Projeto**
- [x] Escolher a linguagem de programação e framework para o desenvolvimento da API.
- [x] Configurar o ambiente de desenvolvimento.
- [x] Configurar o gerenciador de pacotes e instalar dependências básicas.

**2. Criação do EndPoint para Seleção de Comandante**
- [x] Implementar um endpoint que permite ao usuário escolher um comandante da base de dados da API Scryfall.
- [x] Validar que o card escolhido seja uma criatura lendária.

**3. Implementação da Busca de Cartas**
- [x] Implementar a lógica para consumir a API Scryfall e buscar 99 cartas com base nas cores permitidas pelo comandante escolhido.
- [x] Garantir que apenas terrenos básicos possam ser repetidos.
- [x] Implementar uma função para salvar o deck em um arquivo JSON.

**4. Criação do Endpoint para Retornar o Deck**
- [x] Criar um endpoint na API que retorne as 100 cartas (99 + comandante) do deck salvo.
- [x] Testar o endpoint para garantir que retorna corretamente as informações do deck.

**5. Salvamento no Banco de Dados**
- [x] Configurar o banco de dados (escolha o banco de dados que preferir).
- [x] Implementar a funcionalidade para salvar o deck no banco de dados.
- [x] Implementar endpoints para criar, editar e deletar decks no banco de dados.

**6. Implementação de Autenticação**
- [x] Implementar um sistema de registro de usuários.
- [x] Implementar autenticação via JWT ou outra estratégia de sua escolha.
- [x] Proteger os endpoints de criação e edição de decks para que apenas usuários autenticados possam acessá-los.

**7. Implementação de Autorização**
- [ ] Implementar lógica de autorização para garantir que apenas o proprietário de um deck possa editá-lo ou excluí-lo.

## ToDo List - 2º Bimestre

**Em desenvolvimento**