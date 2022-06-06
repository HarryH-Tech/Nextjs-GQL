/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BackButton, ImageContainer } from "../../styles/components";
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
        <div
          css={css`
            text-align: center;
            border: 2px solid #47f;
            width: 70%;
            margin: auto;
            border-radius: 0.6rem;
          `}
        >
          <h1
            css={css`
              font-weight: bold;
            `}
          >
            {name}
          </h1>

          <div
            css={css`
              border: 2px solid #fafafa;
              padding: 1rem;
            `}
          >
            Countries within {name}:<br />
            <ul
              css={css`
                text-align: justify;
              `}
            >
              {countries.map((country, index) => (
                <li
                  key={country.name}
                  css={css`
                    display: inline;
                    list-style-type: none;
                  `}
                >
                  {country.name}
                  {index === countries.length - 1 ? "." : ", "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
