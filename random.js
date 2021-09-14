// creating several files for your components works too

class Random extends React.Component {
  render () {
    return (
      <div>
        <h1>RANDOM!</h1>
      </div>
    );
  }
}

ReactDOM.render(<Random/>, document.getElementById('random'));