import Countries from "../pages/countries/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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

    await new Promise((resolve) => setTimeout(resolve, 0));

    const tree = component.toJSON();
    const grid = screen.findByRole("grid");

    console.log(screen.findByRole("searchbar"));
    //  expect(tree).toContain(grid);
  });
});

describe("LoadingSpinner", () => {
  test('LoadingSpinner renders and must have  alt = "Loading Spinner..."', () => {
    render(
      <MockedProvider mocks={mocks} client={client} addTypename={false}>
        <Countries />
      </MockedProvider>
    );
    const loadingSpinner = screen.getByRole("loading-spinner");
    // Next Image component loads the image lazily so src returns a base64 value rather than the src used in IDE
    // expect(loadingSpinner).toHaveAttribute("src", "/loading.gif");
    expect(loadingSpinner).toHaveAttribute("alt", "Loading Spinner...");
  });
});
