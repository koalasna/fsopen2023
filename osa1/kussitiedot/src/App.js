const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header header={course}/>
      <Part p={part1.name} e={part1.exercises} />
      <Part p={part2.name} e={part2.exercises} />
      <Part p={part3.name} e={part2.exercises} />
      <Total one={part1.exercises} two={part2.exercises} three={part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.header}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p>{props.p} {props.e}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <p>Number of exercises {props.one + props.two + props.three}</p>
    </>
  )
}

export default App