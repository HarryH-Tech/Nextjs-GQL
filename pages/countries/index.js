/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { css } from "@emotion/react";
import Link from "next/Link";
import SearchBar from "./SearchBar";
import Image from "next/image";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export default function Countries() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filterCountries = (countries, query) => {
    return countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.includes(query);
    });
  };

  const filteredCountries = filterCountries(data.countries, searchTerm);

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
          {filteredCountries &&
            filteredCountries.map((country) => (
              <div
                key={country.code}
                css={css`
                  border: 2px solid #ddd;
                  border-radius: 0.4rem;
                  margin: 0.5rem;
                  background-color: #f1f1fa;
                  padding-top: 0.4rem;
                `}
              >
                <Link href={`/country/${encodeURIComponent(country.code)}`}>
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
                    {country.name}
                  </span>
                </Link>
                <p>{country.emoji}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
