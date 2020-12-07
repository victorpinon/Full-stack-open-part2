import React from 'react'

const Filter = ({persons, nameFilter}) => {

  return (
    <div>
        {persons.filter(person => nameFilter === '' ? true : person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Filter