/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from "react-feather";
import "./searchBar.scss";

const SearchBar = (props: any) => {
  const { value, setValue, onInput } = props;
  return (
    <div className="searchbar">
      <Search className="search__icon"/>
      <input
        id="name"
        className="search__input"
        name="name"
        type="search"
        placeholder="Search"
        value={value}
        onInput={onInput}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;