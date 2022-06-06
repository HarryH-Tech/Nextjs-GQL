import Link from "next/Link";
import Image from "next/image";
import { HomeContainer, HomeBox } from "../styles/components";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Link href="/countries">
          <HomeBox>
            <h3> Countries</h3>
            <br />
            <Image
              src={"/countries.jpg"}
              alt="Countries"
              width="300"
              height="200"
            />
          </HomeBox>
        </Link>

        <Link href="/continents">
          <HomeBox>
            <h3> Continents</h3>
            <br />
            <Image
              src={"/continents.jpg"}
              alt="Continents"
              width="300"
              height="200"
            />
          </HomeBox>
        </Link>
      </HomeContainer>
    </>
  );
}
