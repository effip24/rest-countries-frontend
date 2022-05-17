import "./Countries.css";

import CountryCard from "../CountryCard/CountryCard";

interface Props {
  countries: [];
  keyword: string;
  nextCountries: number;
  filters: string[];
  onCountryClick: Function;
}

interface Country {
  name: { common: string };
  region: string;
}

const Countries = ({
  countries,
  keyword,
  nextCountries,
  filters,
  onCountryClick,
}: Props) => {
  return (
    <ul className="countries">
      {countries
        .filter((country: Country) =>
          country.name.common.toLowerCase().includes(keyword.toLowerCase())
        )
        .sort((a: Country, b: Country) =>
          a.name.common.localeCompare(b.name.common)
        )
        .filter(
          (country: Country) =>
            filters.some((filter) => filter === country.region) ||
            filters.length === 0
        )
        .slice(0, nextCountries)
        .map((card, id) => (
          <CountryCard key={id} card={card} onClick={onCountryClick} />
        ))}
    </ul>
  );
};
export default Countries;
