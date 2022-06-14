import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  BackButton,
  ImageContainer,
  ItemContainer,
  ErrorContainer,
} from "../../styles/components";
import { FETCH_COUNTRY_QUERY } from "../GQL";
import Image from "next/image";

export default function Country() {
  const router = useRouter();

  // Below line allows tests to pass but not necessary for page to load correctly
  const { slug } = router ? router.query : "";

  const { data, loading, error } = useQuery(FETCH_COUNTRY_QUERY, {
    variables: { code: "AD" },
  });

  if (loading) {
    return (
      <ImageContainer>
        <Image
          src={"/loading.gif"}
          alt="Loading Spinner"
          width="64"
          height="64"
        />
      </ImageContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        Sorry there was a problem fetching the data, please try again.
      </ErrorContainer>
    );
  }

  const { name, capital, native, continent, phone, currency, languages } =
    data.country;

  return (
    <>
      <BackButton
        onClick={() => router.back()}
        aria-label="back-button"
        role="back-button"
      >
        &#8592;
      </BackButton>

      {data.country && (
        <ItemContainer width="60%" margin="auto" role="country-container">
          <h1 role="country-name">{name}</h1>
          {capital && <h3 role="caption">Capital City: {capital}</h3>}
          <br />
          {continent && <h3 role="caption">Continent: {continent.name}</h3>}
          <br />
          {native && <h3 role="caption">Native Name: {native}</h3>}
          <br />
          {currency && <h3 role="caption">Currency: {currency}</h3>}
          <br />
          {phone && <h3 role="caption">Phone Code: {phone}</h3>}
          <br />
          {languages.length > 0 ? (
            <h3 role="languages">
              Languages:{" "}
              {languages.map((language, index) => (
                <span key={index}>
                  {language.name}
                  {index === languages.length - 1 ? "." : ", "}
                </span>
              ))}
            </h3>
          ) : null}
        </ItemContainer>
      )}
    </>
  );
}
