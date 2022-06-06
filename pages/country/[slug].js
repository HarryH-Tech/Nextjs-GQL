/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useQuery, gql } from "@apollo/client";

import { useRouter } from "next/router";

export default function Countries() {
  const router = useRouter();
  const { slug } = router.query;

  const QUERY = gql`
    query Country($code: ID!) {
      country(code: $code) {
        code
        name
        emoji
        phone
        native
        continent {
          name
        }
        capital
        currency
        languages {
          name
        }
        states {
          name
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(QUERY, {
    variables: { code: slug },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data.country);
  const { name, capital, native, continent, languages } = data.country;
  return (
    <>
      <button
        css={css`
          font-size: 1.2rem;
          width: 3.5rem;
          background-color: #4477ff;
          border: 2px solid #447ff;
          border-radius: 0.6rem;
          cursor: pointer;
          transition: all 0.5s;
          margin: 1rem;

          &:hover {
            color: white;
            transform: translateY(5px);
          }
        `}
        onClick={() => router.back()}
      >
        &#8592;
      </button>

      {data.country && (
        <div
          css={css`
            text-align: center;
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
              display: flex;
              justify-content: center;

              gap: 2rem;
            `}
          >
            <div
              css={css`
                padding: 1rem;
              `}
            >
              {capital && <h3>Capital City: {capital}</h3>}
              <br />
              {continent && <h3>Continent: {continent.name}</h3>}
            </div>
            <div
              css={css`
                padding: 1rem;
              `}
            >
              {native && <h3>Native Name: {native}</h3>}
              <br />
              {languages.length > 0 && (
                <h3>
                  Languages:{" "}
                  {languages.map((language, index) => (
                    <span>
                      {language.name}
                      {index === languages.length - 1 ? "." : ", "}
                    </span>
                  ))}
                </h3>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
