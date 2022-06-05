/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

function Layout() {
  return (
    <div
      css={css`
        margin-bottom: 1rem;
        gap: 2rem;
        background-color: #5588ff;
        padding: 0.5rem;
      `}
    >
      <div>
        <Link href="/">
          <a href="#">Home</a>
        </Link>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          gap: 3rem;
        `}
      >
        <Link href="/countries">
          <a
            href="#"
            css={css`
              color: white;
            `}
          >
            Countries
          </a>
        </Link>
        <Link href="/continents">
          <a
            href="#"
            css={css`
              color: white;
            `}
          >
            Continents
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Layout;
