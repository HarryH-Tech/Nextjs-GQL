import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 1rem;
`;

export const HomeBox = styled.div`
  border: 2px solid #47f;
  border-radius: 0.6rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  width: 40%;

  @media (max-width: 425px) {
    width: 25%;
  }
`;

export const StyledLink = styled.a`
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: #ccc;
  }
`;

export const BackButton = styled.button`
  font-size: 1.2rem;
  width: 3.5rem;
  background-color: #4a4fff;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.5s;
  margin: 1rem;

  &:hover {
    color: white;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const ErrorContainer = styled.div`
  padding: 0.6rem;
  text-align: center;
  border: 2px solid red;
  border-radius: 0.5rem;
  background-color: #ff7744;
  margin: auto;
`;

export const Header = styled.div`
  margin-bottom: 1rem;
  gap: 2rem;
  background-color: #5588ff;
  padding: 0.5rem;
  white-space: nowrap;
  width: 100%;
`;

export const ItemContainer = styled.div`
  border: 2px solid #ddd;
  border-radius: 0.4rem;
  margin: 0.5rem;
  background-color: #f1f1fa;
  padding-top: 0.4rem;
`;

export const SearchBarInput = styled.input`
  border: 2px solid #ababff;
  border-radius: 0.4rem;
  padding: 0.4rem;
  text-align: center;
`;

export const SearchBarContainer = styled.div`
  text-align: center;
`;

export const ItemLink = styled.span`
  color: blue;
  cursor: pointer;
  transition: text-decoration 2s;
  &:hover {
    text-decoration: underline;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`;
