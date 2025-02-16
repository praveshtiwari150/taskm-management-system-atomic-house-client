import { GraphQLClient } from "graphql-request";

const END_POINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
console.log(END_POINT);
const graphqlClient = new GraphQLClient(END_POINT);
export default graphqlClient;