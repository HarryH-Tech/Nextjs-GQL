/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/Link";
import Image from "next/image";
import { Header, StyledLink } from "../../styles/components";

function Layout() {
  return (
    <Header>
      <Link href="/">
        <a href="#">
          <Image src={"/globe.png"} alt="Globe" height="50" width="50" />
        </a>
      </Link>

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
            <StyledLink>Countries</StyledLink>
          </Link>
        </div>
        <div
          css={css`
            display: inline-block;
          `}
        >
          <Link href="/continents">
            <StyledLink>Continents</StyledLink>
          </Link>
        </div>
      </div>
    </Header>
  );
}

export default Layout;
