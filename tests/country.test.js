import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Country from "../pages/country/[slug]";
import TestRenderer from "react-test-renderer";
import { FETCH_COUNTRY_QUERY } from "../pages/GQL";
import { MockedProvider } from "@apollo/client/testing";
import { act } from "react-dom/test-utils";

// it("Renders loading spinner without error", () => {
//   const component = TestRenderer.create(
//     <MockedProvider mock={mock} client={client} addTypename={false}>
//       <Country />
//     </MockedProvider>
//   );

//   const tree = component.toJSON();

//   // Check loading spinner along with containers are rendered
//   expect(tree.children[0].children.length === 3);
//   expect(tree.children[0].children[1].props.alt === "Loading Spinner");
// });

it("Should render list of countries", async () => {
  const mock = {
    request: {
      query: FETCH_COUNTRY_QUERY,
      variables: {
        code: "AD",
      },
    },

    result: {
      data: {
        country: {
          code: "AD",
          name: "Andorra",
          emoji: "AD",
          native: "Andorra",
          phone: "376",
          continent: { name: "Europe", __typename: "Continent" },
          capital: "Andorra la Vella",
          currency: "EUR",
          languages: [{ name: "Catalan", __typename: "Language" }],
          states: [],
          __typename: "Country",
        },
      },
    },
  };

  const component = TestRenderer.create(
    <MockedProvider mock={mock} client={client} addTypename={false}>
      <Country />
    </MockedProvider>
  );

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  const tree = component.toJSON();
  console.log(tree);
});
