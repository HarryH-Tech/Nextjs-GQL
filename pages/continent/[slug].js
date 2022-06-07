import {
  BackButton,
  ImageContainer,
  ItemContainer,
} from "../../styles/components";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_CONTINENT_QUERY } from "../GQL";
import Image from "next/image";

export default function Countries() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading, error } = useQuery(FETCH_CONTINENT_QUERY, {
    variables: { code: slug },
  });

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

  const { name, countries } = data.continent;

  return (
    <>
      <BackButton onClick={() => router.back()}>&#8592;</BackButton>

      {data.continent && (
        <ItemContainer width="60%" margin="auto">
          <h1>{name}</h1>
          {countries && <h3>Countries within: {name}</h3>}

          <br />
          {countries.map((country, index) => (
            <span key={country.name}>
              {country.name}
              {index === countries.length - 1 ? "." : ", "}
            </span>
          ))}
        </ItemContainer>
      )}
    </>
  );
}
