import React from 'react'

const View = ({filteredCountries}) => {

    if (filteredCountries.length === 1) {
        let country = filteredCountries[0]
        return(
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h3>languages</h3>
                <ul>
                    {country.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
                </ul>
                <img src={country.flag} alt={country.name} width="150" />
            </div>
        )
    } 
    else {
        return(
            null
        )
    }
    
}

export default View