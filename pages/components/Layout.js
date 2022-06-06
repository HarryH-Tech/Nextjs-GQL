/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

function Layout() {
  return (
    <div
      css={css`
        margin-bottom: 1rem;
        gap: 2rem;
        background-color: #5588ff;
        padding: 0.5rem;
        white-space: nowrap;
      `}
    >
      <div
        css={css`
          display: inline-block;
        `}
      >
        <Link href="/">
          <a href="#">
            <Image src={"/globe.png"} alt="Globe" height="50" width="50" />
          </a>
        </Link>
      </div>

      <div
        css={css`
          float: right;
          margin-top: 1rem;
        `}
      >
        <div
          css={css`
            display: inline-block;
            margin-right: 1rem;
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
        </div>
        <div
          css={css`
            display: inline-block;
          `}
        >
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
    </div>
  );
}

export default Layout;
