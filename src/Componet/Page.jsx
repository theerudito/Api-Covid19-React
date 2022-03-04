import React, {Fragment, useState, useEffect} from 'react'
import { SearchCountry, SearchCountryAlL } from './ApiData'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/style.css"


const Page = () => {
  const [Search, setSearch] = useState([])
  const [country, setCountry] = useState([])


  const CountryAll = async (props) => {
      const data = await SearchCountryAlL()
      let paises = {
        //Flag: data.countryInfo.flag,
        Populations: data.population,
        Country: data.affectedCountries,
        Continet: data.active,
        Cases: data.cases,
        CasesConfirmToday: data.todayCases,
        Deaths: data.deaths,
        DeathsToday: data.todayDeaths,
        CasesCritical: data.critical,
        Tests: data.tests,
        RecoveredToday: data.todayRecovered,
        CasesRecovered: data.recovered,

      }
      setCountry(paises)
  }

  
  const Country = async () => {
    const data = await SearchCountry(Search)
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

      }
      setCountry(pais)     
  }

  const onChange = (e) => {
    setSearch(e.target.value)
  }


 

useEffect(() =>  {
  CountryAll()
},[])

  return (
    <Fragment>
          <div className="form-control container" id="contenedor">
            <div className='w-50'>
              <input 
                  id="input"
                  type="text" 
                  placeholder='Search Country'
                  onChange={onChange}
                  className="form-control m-4"
                  />
            </div>

                <div>
                   <button className='btn btn-primary ' id="boton" onClick={Country} >Buscar</button>
                </div>
                <img src={country.Flag} id="flag"></img>

                
                <div id="estadistic">
                <p id="populations">Poblacion Total: {country.Populations}</p>
                <p id="country" onChange={onChange}>Pais: {country.Country}</p>
                
                

                <p id="continent">Continete: {country.Continet}</p>
                <p id="cases">Casos Totales: {country.Cases}</p>
                <p id="caseconfirm">Casos Confirmados Hoy: {country.CasesConfirmToday}</p>
                <p id="deaths">Total de Muertes: {country.Deaths}</p>
                <p id="deathstoday">Total de Muertes Hoy: {country.DeathsToday}</p>
                <p id="critical">Casos Criticos: {country.CasesCritical}</p>
                <p id="tests">Total de Tests: {country.Tests}</p>   
                <p id="recoveredtoday">Total de Recuperados Hoy: {country.RecoveredToday}</p>
                <p id="recovered">Total De Recuperados: {country.CasesRecovered}</p>
                </div>
            </div>
    </Fragment>
  )
}

export default Page

const cambio  = (props) => {
  return <p>{props.mensaje}</p>
}