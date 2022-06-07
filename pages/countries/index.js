import { useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/Link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { FETCH_COUNTRIES_QUERY } from "../GQL";
import {
  ImageContainer,
  ItemContainer,
  ItemLink,
  Grid,
  ErrorContainer,
} from "../../styles/components";

export default function Countries() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useQuery(FETCH_COUNTRIES_QUERY);

  if (loading) {
    return (
      <ImageContainer>
        <Image
          role="loading-spinner"
          src={"/loading.gif"}
          alt="Loading Spinner"
          width="64"
          height="64"
        />
      </ImageContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        Sorry there was a problem fetching the data, please try again.
      </ErrorContainer>
    );
  }

  const filterCountries = (countries, query) => {
    return countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.includes(query);
    });
  };

  const filteredCountries = filterCountries(data.countries, searchTerm);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Grid role="grid">
        {filteredCountries &&
          filteredCountries.map((country) => (
            <ItemContainer
              role="country-container"
              key={country.code}
              margin="0.5rem"
            >
              <Link href={`/country/${encodeURIComponent(country.code)}`}>
                <ItemLink>{country.name}</ItemLink>
              </Link>
              <p>{country.emoji}</p>
            </ItemContainer>
          ))}
      </Grid>
    </>
  );
}
