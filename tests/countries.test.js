import Countries from "../pages/countries/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import TestRenderer from "react-test-renderer";
import { FETCH_COUNTRIES_QUERY } from "../pages/GQL";
import { MockedProvider } from "@apollo/client/testing";

const mocks = [
  {
    request: {
      query: FETCH_COUNTRIES_QUERY,
    },

    result: {
      data: {
        countries: [
          {
            name: "Andorraq",
            emoji: "AD",
            code: "AD",
            continent: { __typename: "Continent", name: "Europe" },
          },
          {
            name: "United Arab Emirates",
            emoji: "AE",
            code: "AE",
            continent: { __typename: "Continent", name: "Asia" },
          },
        ],
      },
    },
  },
];

describe("Countries", () => {
  it("Renders out list of countries", async () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} client={client} addTypename={false}>
        <Countries />
      </MockedProvider>
    );

    const tree = component.toJSON();

    expect(tree.find("img"));

    // const tree = component.toJSON();
    // console.log(tree.children[0].children);
    // console.log(component.root);
    // const loadingSpinner = component.find("img");
    // console.log(loadingSpinner);
  });
});
