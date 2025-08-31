import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { API_ENDPOINT } from "./api";
import { Header, MainWrapper, Loading } from "./components";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios.get(API_ENDPOINT).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const getCountryByRegionAndName = (region, name) => {
    return countries.find((country) => {
      return (
        country.region.toLowerCase() === region &&
        country.name.common.toLowerCase() === name
      );
    });
  };

  const getBorderCountriesByCountryCodes = (countryCodes) => {
    return countries.filter((country) => {
      return (
        countryCodes.includes(country.fifa) ||
        countryCodes.includes(country.cca3)
      );
    });
  };

  return (
    <Fragment>
      <Header />
      <MainWrapper>
        {countries ? (
          <Routes>
            <Route path="/" element={<Home countries={countries} />} />
            <Route
              path="/:region/:name"
              element={
                <Detail
                  getCountryByRegionAndName={getCountryByRegionAndName}
                  getBorderCountriesByCountryCodes={
                    getBorderCountriesByCountryCodes
                  }
                />
              }
            />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        ) : (
          <Loading />
        )}
      </MainWrapper>
    </Fragment>
  );
}

export default App;
