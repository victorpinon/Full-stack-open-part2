import React, { useState, useEffect } from 'react'
import axios from 'axios'

const View = ({filteredCountries}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const country = filteredCountries[0]

    const [ weather, setWeather ] = useState('')

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}&units=m`)
        .then(response => {
            setWeather(response.data.current)
        })
    }, [api_key, country.capital])

    // While weather is loading
    if (weather === '') {
        return(
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h3>languages</h3>
                <ul>
                    {country.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
                </ul>
                <img src={country.flag} alt='Country flag' width="150" />
            </div>
        )
    }   // When weather is loaded
    else {
        return(
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h3>languages</h3>
                <ul>
                    {country.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
                </ul>
                <img src={country.flag} alt='Country flag' width="150" />
                <h1>Weather in {country.capital}</h1>
                <p><b>temperature:</b> {weather.temperature} Celsius</p>
                <img src={weather.weather_icons} alt='Weather incon' />
                <p><b>wind: </b>{weather.wind_speed} km/h direction {weather.wind_dir}</p>
            </div>
        )
    }
}

export default View