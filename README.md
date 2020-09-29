# Breaking Bad App

install: npm install
versão do node utilizada: 12.17.0

run: npm start

tests: npm test

Extras:

- Némero de páginas dinâmico dependendo da largura da tela.

- Interface mobile, tablet, desktop.

Poderia Melhorar:

- Espaçamentos: Poderiam ficar melhores, o meu obejtivo era evitar scrolls em telas 16:9,
mas foi um pouco dificil conseguir uma combinação de tamanhos de fonte e espaçamentos, que mantivesesse o aspecto original e não tivesse scrolls.

- Interface Mobile: Não foquei tanto nisso, envolveria uma reestruturação maior na tela.

- Animações: Planejava incluir uma animação de loading, e de scroll ao mudar de páginas, mas não consegui a tempo.

Tests:
  
- Comportamento geral e pesquisa: Testes de renderização do App como um todo e teste da ação de pesquisar.

- Container de cards: Testes de renderização, teste de paginação.

- Testes foram feitos pela perspectiva do usuário, simulando clicks e inputs, Não cheguei a testar funções indvidualmente, apesar de ter planejado isso inicialmente.

- Os requests estão mockados nos testes.


Config:

- Babel e Webpack configurados por mim.

- Absolute imports para componentes e testes.

- Scss modular ( os .scss dos módulos não afetam o todo ).

- Arquivos de output com nome hasheado para previnir problemas com cache.

Contexto:

- Para contexto foi utilizado o Context API do próprio react.

Mobile Interface (screenshot do firefox no computador em um dispositivo mobile a scrollbar não apareceria):

![alt text](https://i.imgur.com/LsciUkW.png)

Tablet Interface:

![alt text](https://i.imgur.com/slH5T68.png)

Desktop Interface:

![alt text](https://i.imgur.com/eAj4t2w.png)
