const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header header={course} />
      <Part parts={course} />
      <Total total={course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.header.name}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p>{props.parts.parts[0].name} {props.parts.parts[0].exercises}</p>
    <p>{props.parts.parts[1].name} {props.parts.parts[1].exercises}</p>
    <p>{props.parts.parts[2].name} {props.parts.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
    </>
  )
} 

export default App