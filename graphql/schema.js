const { GraphQLSchema } = require("graphql");

const RootQueryType = require("./queries");

const schema = new GraphQLSchema({
    query: RootQueryType,
});

module.exports = schema;
