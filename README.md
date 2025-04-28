# Taskio Backend

Taskio Backend é uma API RESTful construída com **NestJS** e **TypeScript**, fornecendo as funcionalidades de backend necessárias para a gestão de tarefas no aplicativo Taskio.

## 🏛️ Clean Archteture

A aplicação segue os princípios da **Clean Architecture**, organizando o código em camadas bem definidas para separar as preocupações:

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/): ORM para interação com o banco de dados

## 📁 Estrutura do Projeto
```
src/
├─ application/         # Contém os casos de uso e lógica de aplicação
├─ domain/              # Define as entidades e regras de negócio
├─ infrastructure/      # Implementações de dependências externas (ex. Prisma, banco de dados)
├─ interfaces/          # Define as interfaces de comunicação entre o sistema e o mundo exterior
└─ main.ts              # Arquivo de inicialização do projeto, onde o servidor é configurado
```
## 🛠️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/christian-de-ornellas/taskio-backend.git
cd taskio-backend
```

2.	Instale as dependências:
```bash
npm install
# ou
yarn install 
```
3.	Execute o servidor:
```bash
npm run start
# ou
yarn start 
```

📜 Scripts Disponíveis
•	start: Inicia o servidor em modo de produção
•	start:dev: Executa o servidor em modo de desenvolvimento com hot-reload
•	test: Executa os testes unitários
•	test:e2e: Executa os testes end-to-end


📡 Endpoints

A API oferece endpoints para criar, listar, atualizar e deletar tarefas. 
Os detalhes dos endpoints podem ser encontrados na documentação automática do Swagger, acessível em:
http://localhost:3000/api

🔧 Deploy

Para fazer o deploy do seu projeto, siga as instruções da documentação do NestJS sobre como configurar ambientes de produção.

🔗 Recursos Úteis
•	NestJS Documentation
•	Prisma Documentation
•	Docker for NestJS