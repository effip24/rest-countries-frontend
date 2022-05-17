import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

interface Props {
  selectedCountry: {
    flags: { png: string };
    name: { common: string; nativeName: {} };
    population: string;
    region: string;
    subregion: string;
    capital: string[];
    currencies: {};
    tld: string;
    languages: {};
    borders: string[];
  };
  onBorderClick: Function;
}

const Country = ({ selectedCountry, onBorderClick }: Props) => {
  const handleBorderClick = (e: React.MouseEvent<HTMLElement>) => {
    onBorderClick(e.currentTarget.textContent);
  };

  return (
    <section className="country">
      <Link className="country__back-wrap" to={"/"}>
        <i className="country__back-icon"></i>
        <p className="country__detail">back</p>
      </Link>

      <div className="country__container">
        <img
          className="country__flag"
          src={selectedCountry.flags.png}
          alt="flag"
        ></img>

        <div className="country__info-container">
          <h3 className="country__name">{selectedCountry.name.common}</h3>

          <div className="country__details-container">
            <ul className="country__details">
              {selectedCountry.name.nativeName ? (
                <p className="country__detail">{`Native Name: ${Object.values(
                  selectedCountry.name.nativeName
                ).map((name: any) => name.common)}`}</p>
              ) : (
                <p className="country__detail">Native Name: none</p>
              )}

              <p className="country__detail">{`Population: ${selectedCountry.population.toLocaleString()}`}</p>
              <p className="country__detail">{`Region: ${selectedCountry.region}`}</p>
              <p className="country__detail">{`Sub Region: ${selectedCountry.subregion}`}</p>
              <p className="country__detail">{`Capital: ${
                selectedCountry.capital ? selectedCountry.capital : "none"
              }`}</p>
            </ul>

            <ul className="country__details">
              <p className="country__detail">{`Top Level Domain: ${selectedCountry.tld}`}</p>
              {selectedCountry.currencies ? (
                <p className="country__detail">{`Currencies: ${Object.values(
                  selectedCountry.currencies
                ).map((value: any) => value.name)}`}</p>
              ) : (
                <p className="country__detail">Currencies: none</p>
              )}

              {selectedCountry.languages ? (
                <p className="country__detail">
                  {`Languages: ${Object.values(selectedCountry.languages)}`}
                </p>
              ) : (
                <p className="country__detail">Languages: none</p>
              )}
            </ul>
          </div>

          <div className="country__border-container">
            <p className="country__detail">Border Countries:</p>
            <ul className="country__border-list">
              {selectedCountry.borders?.map((border, id) => (
                <li
                  className="country__border"
                  key={id}
                  onClick={handleBorderClick}
                >
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Country;
