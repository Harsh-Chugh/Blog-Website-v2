const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    blog(id: ID): Blog
    blogs: [Blog]
  }

  type Blog {
    id: ID
    title: String!
    content: String!
  }

  type Mutation {
    create(title: String!, content: String!): Blog
  }
`;

module.exports = { typeDefs };
