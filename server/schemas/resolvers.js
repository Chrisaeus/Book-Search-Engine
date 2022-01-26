const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
  Mutation: {
    loginUser: async (parent, { email, password }) => {

    },
    addUser: async (parent, { username, email, password }) => {

    },
    saveBook: async (parent, { input }, context) => {

    },
    removeBook: async (parent, { bookId }, context) => {
      
    },
  }
};

module.exports = resolvers;