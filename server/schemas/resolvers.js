const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user)
      return User.findOne({ _id: context.user._id });
    },
  },
  Mutation: {

  }
};

module.exports = resolvers;