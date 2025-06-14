# API GraphQL - Estudo

Este repositório foi criado com o objetivo de aprender e praticar os conceitos fundamentais do **GraphQL**. A aplicação simula operações básicas de CRUD (Create, Read, Update, Delete) sobre uma entidade `User`, utilizando um repositório em memória para facilitar os testes e experimentações.

## 🚀 Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **GraphQL (Apollo Server)**
- **UUID**
- Arquitetura simples com separação entre:
  - Camada de domínio (`domain`)
  - Casos de uso (`useCase`)
  - Repositórios (`infra`)
  - Interface GraphQL (`interfaces/graphql`)

## 📦 Como executar o projeto

```bash
# Clone o repositório
git clone git@github.com:EwertonHecsley/node-graphQL.git
cd api-graphql-estudo

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

O servidor ficará disponível em: `http://localhost:4000/`

Você pode acessar a interface do Apollo Playground para testar as queries e mutations diretamente pelo navegador.

## 📘 Exemplos de uso

### 🔍 Buscar todos os usuários

```graphql
query {
  users {
    id
    name
    email
    city
  }
}
```

### 🔍 Buscar um usuário por ID

```graphql
query {
  user(id: "SEU_ID_AQUI") {
    id
    name
    email
    city
  }
}
```

### ✍️ Criar um usuário

```graphql
mutation {
  createUser(name: "Ewerton", email: "ewerton@graphql.dev", city: "Patos-PB") {
    id
    name
    email
    city
  }
}
```

### 📝 Atualizar um usuário

```graphql
mutation {
  updateUser(id: "SEU_ID_AQUI", name: "Ewerton Martins", city: "João Pessoa") {
    id
    name
    email
    city
  }
}
```

### 🗑️ Deletar um usuário

```graphql
mutation {
  deleteUser(id: "SEU_ID_AQUI")
}
```

## 📚 O que foi aprendido

- Conceitos básicos e diferenciais do GraphQL em relação ao REST
- Criação de esquemas e resolvers
- Uso do Apollo Server com TypeScript
- Organização de código utilizando princípios simples de Clean Architecture
- Manipulação de dados em memória com repositório simulado

## 💡 Considerações finais

Este projeto é apenas um ponto de partida. Futuramente, o mesmo poderá ser evoluído para persistência real com banco de dados, autenticação, paginação e mais recursos do ecossistema GraphQL.

---

Estudo sera uma eterna evolução: **Ewerton Hecsley** ✨
