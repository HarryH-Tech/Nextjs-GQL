import { SearchBarContainer, SearchBarInput } from "../../styles/components";

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        placeholder="Search..."
        type="text"
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
