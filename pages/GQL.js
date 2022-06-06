import { gql } from "@apollo/client";

export const FETCH_COUNTRY_QUERY = gql`
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

export const FETCH_COUNTRIES_QUERY = gql`
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

export const FETCH_CONTINENTS_QUERY = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

export const FETCH_CONTINENT_QUERY = gql`
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
