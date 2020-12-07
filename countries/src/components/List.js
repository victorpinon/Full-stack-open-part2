import React from 'react'

const List = ({filteredCountries, setFilteredCountries, handleShowClick}) => {
    
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
                .map(country => <p key={country.name}>{country.name} <button onClick={() => handleShowClick(country.name)}>show</button></p>)}
            </div>
        )
    }
}

export default List