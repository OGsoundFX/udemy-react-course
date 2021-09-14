class App extends React.Component {
  render() {
    const fruits = ["🍏", "🍍", "🍉", "🍒", "🍑", "🍋"]
    const randomFruit = () => {
      return fruits[Math.floor(Math.random() * 6)]
    }
    return (
      <div>
        <h1>Slot Machines</h1>
        <Machine f1={randomFruit()} f2={randomFruit()} f3={randomFruit()} />
        <Machine f1={randomFruit()} f2={randomFruit()} f3={randomFruit()}/>
        <Machine f1={randomFruit()} f2={randomFruit()} f3={randomFruit()}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));