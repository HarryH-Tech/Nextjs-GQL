/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export default function Countries() {
  const router = useRouter();
  const { slug } = router.query;

  const QUERY = gql`
    query Continent($code: ID!) {
      continent(code: $code) {
        code
        name
        countries {
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

  console.log(data);
  const { name, countries } = data.continent;

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

      {data.continent && (
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
          <br />
          Countries within {name}:<br />
          <ul
            css={css`
              text-align: justify;
            `}
          >
            {countries.map((country) => (
              <li
                key={country.name}
                css={css`
                  display: inline;
                  list-style-type: none;
                `}
              >
                {country.name},{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
