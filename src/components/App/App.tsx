import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import restApi from "../../utils/RestApi";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Country from "../Country/Country";

import "./App.css";

interface Country {
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
}

function App() {
  const [countries, setCountries] = useState<[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    flags: { png: "" },
    name: { common: "", nativeName: {} },
    population: "",
    region: "",
    subregion: "",
    capital: [],
    currencies: {},
    tld: "",
    languages: {},
    borders: [],
  });

  useEffect(() => {
    restApi
      .getAllCountries()
      .then((res: []) => {
        setCountries(res);
      })
      .catch((err: Error | string) => {
        console.log("There was an error getting info from the api", err);
      });
  }, []);

  const handleCountryClick = (country: Country): void => {
    console.log(country);

    setSelectedCountry(country);
  };

  const handleBorderClick = (country: string): void => {
    setSelectedCountry(
      countries.filter(
        (c: { fifa: string; cca3: string; cca2: string }) =>
          c.fifa == country || c.cca3 === country || c.cca2 === country
      )[0]
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/country"
          element={
            <Country
              selectedCountry={selectedCountry}
              onBorderClick={handleBorderClick}
            />
          }
        />
        <Route
          path="/"
          element={
            <Main countries={countries} onCountryClick={handleCountryClick} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
