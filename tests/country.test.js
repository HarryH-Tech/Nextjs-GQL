import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import client from "../apollo-client";
import Country from "../pages/country/[slug]";
import TestRenderer from "react-test-renderer";
import { FETCH_COUNTRY_QUERY } from "../pages/GQL";
import { MockedProvider } from "@apollo/client/testing";
import { act } from "react-dom/test-utils";

const mocks = {
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

it("Renders loading spinner without error", () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[mocks]} client={client} addTypename={false}>
      <Country />
    </MockedProvider>
  );

  const tree = component.toJSON();

  // Check loading spinner along with containers are rendered
  expect(tree.children[0].children.length === 3);
  expect(tree.children[0].children[1].props.alt === "Loading Spinner");
});

// CHECK RENDER OF BACK BUTTON
it("Should render the back button and ensure the text content is set to a left arrow", async () => {
  render(
    <MockedProvider mocks={[mocks]} client={client} addTypename={false}>
      <Country />
    </MockedProvider>
  );

  // Wait till loading spinner has dissapeared and data has been rendered
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  const backButton = screen.getByRole("back-button");
  expect(backButton).toBeInTheDocument();
  expect(backButton).toHaveTextContent("←");
});

it("Should render list of countries", async () => {
  render(
    <MockedProvider mocks={[mocks]} client={client} addTypename={false}>
      <Country />
    </MockedProvider>
  );

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });

  const countryContainer = screen.getByRole("country-container");
  const countryName = screen.getByRole("country-name");

  expect(countryContainer).toBeInTheDocument();
  expect(countryName).toHaveTextContent("Andorra");

  const captions = screen.getAllByRole("caption");
  expect(captions.length).toEqual(5);

  const languages = screen.getByRole("languages");
  console.log(languages.children); // .pendingProps.children);
});
