/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  BackButton,
  ImageContainer,
  ItemContainer,
} from "../../styles/components";
import { FETCH_COUNTRY_QUERY } from "../GQL";
import Image from "next/image";

export default function Countries() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading, error } = useQuery(FETCH_COUNTRY_QUERY, {
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

  const { name, capital, native, continent, languages } = data.country;

  return (
    <>
      <BackButton onClick={() => router.back()}>&#8592;</BackButton>

      {data.country && (
        <ItemContainer width="60%" margin="auto">
          <h1>{name}</h1>
          {capital && <h3>Capital City: {capital}</h3>}
          <br />
          {continent && <h3>Continent: {continent.name}</h3>}
          <br />
          {native && <h3>Native Name: {native}</h3>}
          <br />
          {languages.length > 0 && (
            <h3>
              Languages:{" "}
              {languages.map((language, index) => (
                <span key={index}>
                  {language.name}
                  {index === languages.length - 1 ? "." : ", "}
                </span>
              ))}
            </h3>
          )}
        </ItemContainer>
      )}
    </>
  );
}
