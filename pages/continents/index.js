/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import SearchBar from "../countries/SearchBar";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/Link";

function index() {
  const [searchTerm, setSearchTerm] = useState("");

  const QUERY = gql`
    query Continents {
      continents {
        code
        name
        countries {
          name
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return (
      <div
        css={css`
          text-align: center;
        `}
      >
        <Image
          src={"/loading.gif"}
          alt="Loading Spinner"
          width="64"
          height="64"
        />
      </div>
    );
  }

  if (error) {
    return null;
  }

  const filterContinents = (continents, query) => {
    return continents.filter((country) => {
      const continentName = country.name.toLowerCase();
      return continentName.includes(query);
    });
  };

  const filteredContinents = filterContinents(data.continents, searchTerm);
  console.log(data);
  return (
    <>
      <div
        css={css`
          text-align: center;
        `}
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
          `}
        >
          {filteredContinents &&
            filteredContinents.map((continent) => (
              <div
                key={continent.code}
                css={css`
                  border: 2px solid #ddd;
                  border-radius: 0.4rem;
                  margin: 0.5rem;
                  background-color: #f1f1fa;
                  padding: 0.4rem;
                `}
              >
                <Link href={`/continent/${encodeURIComponent(continent.code)}`}>
                  <span
                    css={css`
                      color: blue;
                      cursor: pointer;
                      transition: text-decoration 2s;
                      &:hover {
                        text-decoration: underline;
                      }
                    `}
                  >
                    {continent.name}
                  </span>
                </Link>
                <br />
                Countries within {continent.name}:<br />
                <ul
                  css={css`
                    text-align: justify;
                  `}
                >
                  {continent.countries.map((country) => (
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
            ))}
        </div>
      </div>
    </>
  );
}

export default index;
