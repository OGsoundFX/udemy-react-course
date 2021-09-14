class App extends React.Component {
  render () {
    return (
      <div>
        <Random/>
        <Ternary/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
