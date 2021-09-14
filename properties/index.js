class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Olivier" from="Caroline" />
      </div>
    )
  } 
}

ReactDOM.render(<App/>, document.getElementById('root'));