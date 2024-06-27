# Food Explorer Back end

![image](https://github.com/Catalendas/food-explorer-back-end/assets/82763928/df91cc72-2b86-4ae2-b1b0-9dc6938f117f)

Esse projeto é a parte do back end da aplicação [Food explorer](https://github.com/Catalendas/food-explorer-front-end), foi aqui que ficou toda a parte de comunicação com o banco de dados sqlite,
aqui está toda regra de negocio do projeto, desde de aparte de cadatro ate a autenticação com JWT

Foi utilizada uma estrutura de pastas simples para a organição do projeto, seprando a regra de negócio das rotas.

### Requisitos do Back-end

  - Desenvolvimento de uma API que suporte as operações de CRUD (criar, ler, atualizar, e apagar) para os pratos do restaurante.
  - Implementação de autenticação JWT para usuários e admin.
  - Armazenamento de dados do admin, do restaurante e dos usuários em um banco de dados.
  - Implementação de funcionalidades de busca por nome e ingredientes para pratos.
  - Desenvolvimento de endpoints para manipulação de pratos, autenticação e outras operações necessárias.
  - Implementação de validações de entrada e saída de dados.

Todas as funcionalidades da api estão completamente operacionais.

### Frameworks utilizados

  - bcrypt
  - cookie-parser
  - cors
  - dotenv
  - express
  - express-async-errors
  - jsonwebtoken
  - knex
  - multer
  - pm2
  - sqlite
  - sqlite3

### Como executar o projeto?

Siga os passos abaixo para a instalação do projeto em sua máquina:

1. Instale o [Git](https://git-scm.com/).
2. Instale o [Node.js](https://nodejs.org/en).
3. Clone o repositório do projeto com o comando `git clone https://github.com/Catalendas/food-explorer-back-end.git`.
4. Abra o terminal na pasta do projeto e execute o comando `npm i` para instalar as dependências do projeto.
5. Rode o comando `npm run dev` para executar o projeto em ambiente de desenvolvimento (a API utilizada será a que está em produção).

Para testar as rotas é preciso ter instalado o [insomnia](https://insomnia.rest/download) em sua maquina.
Após ter ele instalado é preciso mapear as rotas da api, baixe o arquivo [insomnia_model.json]({{file name='insomnia_model.json'}}) depois faça a importação das rotas
dentro do insomnia.




