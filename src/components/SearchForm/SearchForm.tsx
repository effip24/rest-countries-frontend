import { useState } from "react";
import "./SearchForm.css";

type Props = {
  onSearch: Function;
};

const SearchForm = ({ onSearch }: Props) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
    onSearch(keyword);
  };

  return (
    <form className="search">
      <i className="search__icon"></i>
      <input
        placeholder="Search for a country..."
        className="search__input"
        onChange={handleChange}
        value={keyword || ""}
      ></input>
    </form>
  );
};
export default SearchForm;
