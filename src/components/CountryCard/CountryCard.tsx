import { Link } from "react-router-dom";
import "./CountryCard.css";

interface Props {
  card: {
    flags: { png: string };
    name: { common: string };
    population: string;
    region: string;
    capital: string;
  };
  onClick: Function;
}

const CountryCard = ({ card, onClick }: Props) => {
  const handleCountryClick = (): void => {
    onClick(card);
  };

  return (
    <li className="country-card" onClick={handleCountryClick}>
      <Link className="country-card__link" to={"/country"}>
        <img
          className="country-card__flag"
          src={card.flags.png}
          alt="flag"
        ></img>
        <h2 className="country-card__name">{card.name.common}</h2>
        <div className="country-card__details">
          <p className="country-card__detail">{`Population: ${card.population.toLocaleString()}`}</p>
          <p className="country-card__detail">{`Region: ${card.region}`}</p>
          <p className="country-card__detail">{`Capital: ${card.capital}`}</p>
        </div>
      </Link>
    </li>
  );
};
export default CountryCard;
