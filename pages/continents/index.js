import { useState } from "react";
import SearchBar from "../countries/SearchBar";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/Link";
import { FETCH_CONTINENTS_QUERY } from "../GQL";
import {
  ErrorContainer,
  ImageContainer,
  Grid,
  ItemLink,
  ItemContainer,
} from "../../styles/components";

function index() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useQuery(FETCH_CONTINENTS_QUERY);

  if (loading) {
    return (
      <ImageContainer>
        <Image
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

  const filterContinents = (continents, query) => {
    return continents.filter((country) => {
      const continentName = country.name.toLowerCase();
      return continentName.includes(query);
    });
  };

  const filteredContinents = filterContinents(data.continents, searchTerm);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid>
        {filteredContinents &&
          filteredContinents.map((continent) => (
            <ItemContainer key={continent.code} margin="0.5rem">
              <Link href={`/continent/${encodeURIComponent(continent.code)}`}>
                <ItemLink>{continent.name}</ItemLink>
              </Link>
            </ItemContainer>
          ))}
      </Grid>
    </>
  );
}

export default index;
