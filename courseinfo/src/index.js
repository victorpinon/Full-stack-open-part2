import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

const Total = ({ parts }) => {
    const sum = parts.reduce((total, current) => (total + current.exercises), 0)
    return(
        <p><b>total of {sum} exercises</b></p>
    ) 
}

const Part = ({name, exercises}) => {
    return (
        <p >
            {name} {exercises}
        </p>    
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
  }



const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        }, 
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
  
    return(
        courses.map(course => <Course key={course.id} course={course}/>)
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))