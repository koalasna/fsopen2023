const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course}/>
      <Content p={part1} e={exercises1} />
      <Content p={part2} e={exercises2} />
      <Content p={part3} e={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3} />
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

const Content = (props) => {
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