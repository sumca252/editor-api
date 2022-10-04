const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = require("graphql");

const { DocumentType, UserType } = require("./types");

const editorModel = require("../models/editor.models");
const usersModel = require("../models/users.model");

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        documents: {
            type: GraphQLList(DocumentType),
            description: "List of all documents",
            resolve: async () => {
                const documents = await editorModel.getAllDocuments();

                if (documents) {
                    return documents;
                }
                return [];
            },
        },
        document: {
            type: DocumentType,
            description: "Get a single document",
            args: {
                _id: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const document = await editorModel.getDocumentById(args._id);

                if (document) {
                    return document;
                }
                return [];
            },
        },
        users: {
            type: GraphQLList(UserType),
            description: "List of all users",
            resolve: async () => {
                const users = await usersModel.getAllUsers();

                if (users) {
                    return users;
                }
                return [];
            },
        },
        user: {
            type: UserType,
            description: "Get a single user",
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const user = await usersModel.getUserByEmail(args.email);

                if (user) {
                    return user;
                }
                return [];
            },
        },
    }),
});

module.exports = RootQueryType;
