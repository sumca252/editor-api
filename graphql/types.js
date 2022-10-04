/**
 * Type definitions for GraphQL schema
 */
const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
} = require("graphql");

// Document Type
const DocumentType = new GraphQLObjectType({
    name: "Document",
    description: "Represents a document written by a user",
    fields: () => ({
        _id: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLNonNull(GraphQLString) },
        allowed_users: { type: GraphQLList(GraphQLString) },
    }),
});

// User Type
const UserType = new GraphQLObjectType({
    name: "User",
    description: "Represents a user",
    fields: () => ({
        _id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    }),
});

module.exports = { DocumentType, UserType };
