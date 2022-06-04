import { useLazyQuery, useQuery, gql } from "@apollo/client";
import styles from "../../styles/Home.module.css";
import Link from "next/Link";
import { useEffect, useState } from "react";
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

  return (
    <>
      {data.country && <div>{data.country.name}</div>}
      <button onClick={() => router.back()}>Back</button>
    </>
  );
}
