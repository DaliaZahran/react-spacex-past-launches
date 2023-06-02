import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const link = createHttpLink({
  uri: "https://spacex-production.up.railway.app/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
