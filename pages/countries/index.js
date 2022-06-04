import { useQuery, gql } from "@apollo/client";
import { css, jsx } from "@emotion/react";
import Link from "next/Link";

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
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      {data.countries.map((country) => (
        <div key={country.code}>
          <Link href={`/country/${encodeURIComponent(country.code)}`}>
            {country.name}
          </Link>
          <p>
            {country.code} - {country.emoji} - {country.phone}
          </p>
        </div>
      ))}
    </div>
  );
}
