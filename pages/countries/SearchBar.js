/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        css={css`
          border: 2px solid #ababff;
          border-radius: 0.4rem;
          padding: 0.4rem;
        `}
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
      />
    </>
  );
}

export default SearchBar;
