import "./Countries.css";
import { C } from "../../utils/types";
import CountryCard from "../CountryCard/CountryCard";

interface Props {
  countries: C[];
  keyword: string;
  nextCountries: number;
  filters: string[];
  onCountryClick: Function;
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
        .filter((country: C) =>
          country.name.common.toLowerCase().includes(keyword.toLowerCase())
        )
        .sort((a: C, b: C) => a.name.common.localeCompare(b.name.common))
        .filter(
          (country: C) =>
            filters.some((filter) => filter === country.region) ||
            filters.length === 0
        )
        .slice(0, nextCountries)
        .map((card: C, id) => (
          <CountryCard key={id} card={card} onClick={onCountryClick} />
        ))}
    </ul>
  );
};
export default Countries;
