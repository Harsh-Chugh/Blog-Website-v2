const { Blog } = require("./models/Post");

// GraphQL Resolvers
const resolvers = {
  Query: {
    blog: async (parent, args) => await Blog.findById(args.id),
    blogs: async () => await Blog.find({}),
  },
  Mutation: {
    create: async (parent, args) => {
      const { title, content } = args;

      const newBlog = new Blog({
        title,
        content,
      });

      newBlog.save();
      return newBlog;
    },
  },
};

module.exports = { resolvers };
