import React from 'react'

const Filter = ({persons, nameFilter, handleDeleteClick}) => {

  return (
    <div>
        {
        persons
        .filter(person => nameFilter === '' ? true : person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => {
          return(
            <p key={person.id}>{person.name} {person.number} <button onClick={() => handleDeleteClick(person)}>delete</button></p>
          )
        })
        }
    </div>
  )
}

export default Filter