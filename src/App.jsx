const App = () => {
  //making a new object called built in Date() function
  const now = new Date()
  const a = 10
  const b = 20

  console.log(now, a + b)
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} + {b} is {a + b}
      </p>
    </div>
  )
}

//export is needed to output your app
//if not app breaks dowm
export default App 