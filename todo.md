## ToDo List

**1. Setup do Projeto**
- [x] Escolher a linguagem de programação e framework para o desenvolvimento da API.
- [x] Configurar o ambiente de desenvolvimento.
- [x] Configurar o gerenciador de pacotes e instalar dependências básicas.

**2. Criação do EndPoint para Seleção de Comandante**
- [o] Implementar um endpoint que permite ao usuário escolher um comandante da base de dados da API Scryfall.
- [o] Validar que o card escolhido seja uma criatura lendária.

**3. Implementação da Busca de Cartas**
- [ ] Implementar a lógica para consumir a API Scryfall e buscar 99 cartas com base nas cores permitidas pelo comandante escolhido.
- [ ] Garantir que apenas terrenos básicos possam ser repetidos.
- [ ] Implementar uma função para salvar o deck em um arquivo JSON.

**4. Criação do Endpoint para Retornar o Deck**
- [ ] Criar um endpoint na API que retorne as 100 cartas (99 + comandante) do deck salvo.
- [ ] Testar o endpoint para garantir que retorna corretamente as informações do deck.

**5. Salvamento no Banco de Dados**
- [ ] Configurar o banco de dados (escolha o banco de dados que preferir).
- [ ] Implementar a funcionalidade para salvar o deck no banco de dados.
- [ ] Implementar endpoints para criar, editar e deletar decks no banco de dados.

**6. Implementação de Autenticação**
- [ ] Implementar um sistema de registro de usuários.
- [ ] Implementar autenticação via JWT ou outra estratégia de sua escolha.
- [ ] Proteger os endpoints de criação e edição de decks para que apenas usuários autenticados possam acessá-los.

**7. Implementação de Autorização**
- [ ] Implementar lógica de autorização para garantir que apenas o proprietário de um deck possa editá-lo ou excluí-lo.

**8. Testes Automatizados**
- [ ] Configurar o ambiente de testes.
- [ ] Criar testes unitários para a lógica de seleção de comandante e busca de cartas.
- [ ] Criar testes de integração para os endpoints da API.
- [ ] Implementar mocks para simular respostas da API do Scryfall nos testes.

**9. Documentação**
- [ ] Documentar os endpoints da API.
- [ ] Criar um README explicando como configurar o ambiente, rodar a API e realizar os testes.
- [ ] Incluir exemplos de requisições e respostas na documentação.

**10. Finalização e Deploy**
- [ ] Realizar testes finais em todo o sistema.
- [ ] Configurar o deploy da API (se necessário).
- [ ] Garantir que o sistema esteja seguro e funcionando conforme o esperado.
