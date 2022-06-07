import Link from "next/Link";
import Image from "next/image";
import { HomeContainer, HomeBox } from "../styles/components";

export default function Home() {
  return (
    <>
      <HomeContainer data-testid="home-container">
        <Link href="/countries" data-testid="countries-link">
          <HomeBox data-testid="countries-box">
            <h3 role="countries-title">Countries</h3>
            <br />
            <Image
              src={"/countries.jpg"}
              alt="Countries"
              width="300"
              height="200"
              data-testid="countries-image"
            />
          </HomeBox>
        </Link>

        <Link href="/continents" data-testid="continents-link">
          <HomeBox data-testid="continents-box">
            <h3 role="continents-title"> Continents</h3>
            <br />
            <Image
              src={"/continents.jpg"}
              alt="Continents"
              width="300"
              height="200"
              data-testid="continents-image"
            />
          </HomeBox>
        </Link>
      </HomeContainer>
    </>
  );
}
