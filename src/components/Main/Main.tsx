import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import Filter from "../Filter/Filter";
import Countries from "../Countries/Countries";
import { useState } from "react";

interface Props {
  countries: [];
  onCountryClick: Function;
}

const Main = ({ countries, onCountryClick }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const [nextCountries, setNextCountries] = useState<number>(8);
  const [filters, setFilters] = useState<string[]>([]);

  const handleLoadMoreClick = (): void => {
    setNextCountries(nextCountries + 8);
  };

  const handleSearchClick = (keyword: string): void => {
    setKeyword(keyword);
  };

  const handleFilterClick = (f: string): void => {
    if (!filters.includes(f)) {
      setFilters([...filters, f || ""]);
    }
  };

  const handleRemoveFilter = (f: string): void => {
    setFilters(filters.filter((filter) => filter !== f));
  };

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__search-container">
          <SearchForm onSearch={handleSearchClick} />
          <Filter
            filters={filters}
            onFilter={handleFilterClick}
            onRemoveFilter={handleRemoveFilter}
          />
        </div>

        <Countries
          countries={countries}
          keyword={keyword}
          nextCountries={nextCountries}
          filters={filters}
          onCountryClick={onCountryClick}
        />

        <button className="main__load-more" onClick={handleLoadMoreClick}>
          Load more
        </button>
      </div>
    </main>
  );
};
export default Main;
