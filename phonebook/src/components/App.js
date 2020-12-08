import React, { useState, useEffect } from 'react'
import personService from '../services/persons'
import Notification from './Notification'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'



const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const showNotificationMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleDeleteClick = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name} ?`)) { 
      personService
      .remove(personToDelete.id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== personToDelete.id))
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(p => p.name === newName)
    if (person === undefined) {
      const newPerson = {
        name: newName, 
        number: newNumber
      }
      personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        showNotificationMessage(`Added ${returnedPerson.name}`)
      })      
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) { 
        const changedPerson = { ...person, number: newNumber}
        personService
        .update(changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
          showNotificationMessage(`Changed ${returnedPerson.name} phone number`)
        })
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      
      <h2>Add new</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}

export default App