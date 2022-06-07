import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Index", () => {
  it("Renders Homepage", () => {
    render(<Home />);

    expect(screen.getByTestId("home-container")).toBeInTheDocument();

    // Check if titles are rendered and contain expected text
    const countriesTitle = screen.getByRole("countries-title");
    expect(countriesTitle).toHaveTextContent("Countries");
    expect(countriesTitle).toBeInTheDocument();

    const continentsTitle = screen.getByRole("continents-title");
    expect(continentsTitle).toHaveTextContent("Continents");
    expect(continentsTitle).toBeInTheDocument();

    //Check if image and box components are rendered
    expect(screen.getByTestId("countries-box")).toBeInTheDocument();
    expect(screen.getByTestId("countries-image")).toBeInTheDocument();
    expect(screen.getByTestId("continents-box")).toBeInTheDocument();
    expect(screen.getByTestId("continents-image")).toBeInTheDocument();
  });
});
