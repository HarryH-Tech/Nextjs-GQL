/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/Link";

export default function Home() {
  return (
    <>
      <div
        css={css`
          gap: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
        `}
      >
        <div
          css={css`
            border: 2px solid gray;
            border-radius: 0.6rem;
            padding: 3rem;
          `}
        >
          <Link href="/countries">Countries</Link>
        </div>
        <div
          css={css`
            border: 2px solid gray;
            border-radius: 0.6rem;
            padding: 3rem;
          `}
        >
          <Link href="/continents">Continents</Link>
        </div>
      </div>
    </>
  );
}
