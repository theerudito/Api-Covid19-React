import React, { Fragment, useState, useEffect } from "react";
import { SearchCountry, SearchCountryAlL } from "./ApiData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import { LoaderApp } from "./Loaders/Loader";
import Imagen from "./Image/image.png";

const Page = () => {
  const [Search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bandera, setBandera] = useState(true);
  const [continente, setContinente] = useState(true);
  const [paises1, setPaises1] = useState(true);
  const [noBuscar, setNoBuscar] = useState(false);

  //const [error, setError] = useState(null);

  const CountryAll = async () => {
    const data = await SearchCountryAlL();
    let paises = {
      //Flag: data.countryInfo.flag,
      Populations: data.population,
      Country: data.affectedCountries,
      Active: data.active,
      Cases: data.cases,
      CasesConfirmToday: data.todayCases,
      Deaths: data.deaths,
      DeathsToday: data.todayDeaths,
      CasesCritical: data.critical,
      Tests: data.tests,
      RecoveredToday: data.todayRecovered,
      CasesRecovered: data.recovered,
    };
    setCountry(paises);
  };

  const Country = async () => {
    setBandera(false);
    setPaises1(false);
    setContinente(false);
    setLoading(false);
    setNoBuscar(false);
    const data = await SearchCountry(Search.trim());
    let pais = {
      Flag: data.countryInfo.flag,
      Populations: data.population,
      Country: data.country,
      Continet: data.continent,
      Cases: data.cases,
      CasesConfirmToday: data.todayCases,
      Deaths: data.deaths,
      DeathsToday: data.todayDeaths,
      CasesCritical: data.critical,
      Tests: data.tests,
      RecoveredToday: data.todayRecovered,
      CasesRecovered: data.recovered,
    };

    setCountry(pais);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
    setNoBuscar(true);
  };

  const ResetBandera = (e) => {
    e.preventDefault();
    CountryAll();
    setBandera(true);
    setPaises1(true);
    setContinente(true);
    setLoading(false);
		setSearch("")
  };

  // if (data.trim() === "") {
  // 	setError("Debes Escribir Un Pais");
  // 	return;
  // }

  // // setTimeout(() => {
  // // 	setError(null);
  // // }, 2000);

  useEffect(() => {
    CountryAll();
    setBandera(true);
    setContinente(true);
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {/*INPUT*/}
      <div className="form-control container" id="contenedor">
        <div className="w-50">
          <input
            id="input"
            type="text"
            placeholder="Search Country"
            onChange={onChange}
            name="input"
            className="form-control m-4"
          />
        </div>

        {/* {error && <div className="alert alert-danger mt-2">{error}</div>} */}

        {/*BOTON BUSCAR*/}
        <div>
          {noBuscar ? (
            <button className="btn btn-primary" id="boton" onClick={Country}>
              Buscar
            </button>
          ) : (
            <button className="btn btn-primary " id="boton">
              Buscar
            </button>
          )}
        </div>

        <div>
          <button className="btn btn-primary" id="boton" onClick={ResetBandera}>
            Reset
          </button>
        </div>

        <div>
          {/*PREGUNTA DE BANDERA*/}
          {bandera ? (
            <img src={Imagen} alt="bandera" id="flag"></img>
          ) : (
            <img src={country.Flag} alt="bandera" id="flag"></img>
          )}
        </div>

        {/*PREGUNTA DE LOADER*/}
        {loading ? (
          <LoaderApp />
        ) : (
          <div id="estadistic">
            <p id="populations">Poblacion Total: {country.Populations}</p>

            {/*PREGUNTA DE PAISES*/}
            {paises1 ? (
              <p id="country">Paises Contagiados: {country.Country}</p>
            ) : (
              <p id="country">Pais: {country.Country}</p>
            )}

            {/*PREGUNTA DE PAISES*/}
            {continente ? (
              <p id="continent">Casos Activos: {country.Active}</p>
            ) : (
              <p id="continent">Continete: {country.Continet}</p>
            )}

            <p id="cases">Casos Totales: {country.Cases}</p>
            <p id="caseconfirm">
              Casos Confirmados Hoy: {country.CasesConfirmToday}
            </p>
            <p id="deaths">Total de Muertes: {country.Deaths}</p>
            <p id="deathstoday">Total de Muertes Hoy: {country.DeathsToday}</p>
            <p id="critical">Casos Criticos: {country.CasesCritical}</p>
            <p id="tests">Total de Tests: {country.Tests}</p>
            <p id="recoveredtoday">
              Total de Recuperados Hoy: {country.RecoveredToday}
            </p>
            <p id="recovered">Total De Recuperados: {country.CasesRecovered}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Page;
