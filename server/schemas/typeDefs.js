const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    id: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

input bookInput {
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}

type Query {
  me: User
}

type Mutation {
  login(username: String!, email: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(book: bookInput!): User
  removeBook(bookId: ID!): User
}
`;





module.exports = typeDefs;
