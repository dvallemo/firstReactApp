const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}

//export is needed to output your app
//if not app breaks dowm
export default App 