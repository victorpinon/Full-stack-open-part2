import React from 'react'

const List = ({filteredCountries}) => {
    
    if (filteredCountries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    else if (filteredCountries.length === 1) {
        return (
            null
        )
    }
    else {
        return(
            <div>
                {filteredCountries
                .map(country => <p key={country.alpha3Code}>{country.name}</p>)}
            </div>
        )
    }
}

export default List