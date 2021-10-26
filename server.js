var express = require("express");
var { buildSchema } = require("graphql");
var { graphqlHTTP } = require("express-graphql");

var schema = buildSchema(`
    type Query {
        message: String
    }
`);

var root = {
  message: () => "Hello World!",
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
