/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/Link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        css={css`
          gap: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
          margin: 1rem;
        `}
      >
        <Link href="/countries">
          <a href="#">
            <div
              css={css`
                border: 2px solid #47f;
                border-radius: 0.6rem;
                padding: 2rem;
                text-align: center;
              `}
            >
              Countries
              <br />
              <br />
              <Image
                src={"/countries.jpg"}
                alt="Countries"
                width="300"
                height="200"
              />
            </div>
          </a>
        </Link>

        <Link
          href="/continents"
          css={css`
            cursor: pointer;
          `}
        >
          <a href="#">
            <div
              css={css`
                border: 2px solid #47f;
                border-radius: 0.6rem;
                padding: 2rem;
                text-align: center;
              `}
            >
              Continents
              <br />
              <br />
              <Image
                src={"/continents.jpg"}
                alt="Continents"
                width="300"
                height="200"
              />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
