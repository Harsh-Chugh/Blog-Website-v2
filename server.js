const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./models/typeDefs");
const { resolvers } = require("./resolvers");

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server and export the dynamically allocated URL
const startServer = async () => {
  const { url } = await server.listen();
  console.log(`Apollo Server ready at ${url}`);
  return url;
};

module.exports = { server, startServer };
