## Requisitos do Projeto

1. **Seleção do Comandante**
- Selecionar um comandante (card de criatura lendária) que definirá as cores permitidas no deck.

2. **Busca de Cartas**
- Consumir a API do Scryfall para buscar 99 cartas que correspondam às cores permitidas pelo comandante escolhido.
- Garantir que o deck seja composto de 99 cartas únicas, exceto terrenos básicos ou cartas com permissão explícita de repetição.

3. **Salvamento de Deck**
- Salvar o deck completo (100 cartas: 99 + comandante) em um arquivo JSON.
- Criar uma rota na API para retornar os 100 cards do deck.
- Salvar o deck em um banco de dados.

4. **Autenticação**
- Implementar um sistema de autenticação para que apenas usuários autenticados possam criar e editar decks.

5. **Autorização**
- Implementar um sistema de autorização para garantir que apenas o proprietário de um deck possa editá-lo ou excluí-lo.

6. **Testes Automatizados**
- Criar testes automatizados para validar as regras de negócio e o funcionamento dos endpoints da API, utilizando mocks onde necessário.

### Links

[DOC do Scryfall](https://scryfall.com/docs/api)

[Link para a documentação](https://docs.magicthegathering.io/#documentationrate_limits)
