import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Layout from "./components/Layout";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app-container">
      <ApolloProvider client={client}>
        <Layout />
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
