import "./Search.scss";
import SearchButton from "../SearchButton/SearchButton";
import { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
  setSearchInput(event.target.value);
  console.log(searchInput);
  }

  return (
    <section className="search">
      <header className="search__header">
        <h4 className="search__heading heading">Search Bookings</h4>
      </header>
      <form className="search__form">
        <label className="search__label" htmlFor="customerName">
          &rarr;
        </label>
        <input
          type="search"
          id="customerName"
          className="search__input"
          placeholder="Customer name"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <SearchButton click={props.search} input={searchInput} />
      </form>
    </section>
  );
};
export default Search;
