import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import restApi from "../../utils/RestApi";
import { C } from "../../utils/types";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Country from "../Country/Country";

import "./App.css";

function App() {
  const [countries, setCountries] = useState<C[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<C>({
    flags: { png: "" },
    name: { common: "", nativeName: {} },
    population: "",
    fifa: "",
    cca3: "",
    cca2: "",
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
      .then((res: C[]) => {
        setCountries(res);
      })
      .catch((err: string) => {
        console.log("There was an error getting info from the api", err);
      });
  }, []);

  const handleCountryClick = (country: C): void => setSelectedCountry(country);

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
