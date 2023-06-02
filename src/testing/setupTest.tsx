import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMocksToSchema, MockList } from "@graphql-tools/mock";
import { render as rtlRender } from "@testing-library/react";
import { makeExecutableSchema } from "@graphql-tools/schema";
import casual from "casual";

import { GET_LAUNCHES_PAST } from "../graphql/graphql";

// Mock object
const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => "Hello",
  DateTime: () => casual.date(/* format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ' */),
  Launch: () => ({
    mission_name: () => "RazakSat",
    launch_date_utc: casual.date(),
    rocket: () => ({
      rocket_name: () => "Falcon99",
    }),
    links: () => ({
      article_link: () => casual._url(),
      video_link: () => casual._url(),
    }),
  }),
  LaunchesPast: () => ({
    launchesPast: () => new MockList(10),
  }),
};

const schema = makeExecutableSchema({
  typeDefs: GET_LAUNCHES_PAST,
});

const schemaWithMocks = addMocksToSchema({
  schema,
  mocks,
  preserveResolvers: true,
});

// Create a new schema with mocks
export function render(component: any) {
  const client = new ApolloClient({
    link: new SchemaLink({ schema: schemaWithMocks }),
    cache: new InMemoryCache(),
  });

  return rtlRender(
    <ApolloProvider client={client}>{component}</ApolloProvider>
  );
}
