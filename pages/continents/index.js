/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SearchBar from "../countries/SearchBar";
import { useQuery, gql } from "@apollo/client";

function index() {
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
  console.log(data);
  return (
    <>
      <SearchBar />
    </>
  );
}

export default index;
