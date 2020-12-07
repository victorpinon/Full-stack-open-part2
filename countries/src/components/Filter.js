import React from 'react'

const Filter = ({nameFilter, handleNameFilterChange}) => {
    return(
        <div>find countries
            <input
                value={nameFilter}
                onChange={handleNameFilterChange}
            />
        </div>
    )
}

export default Filter