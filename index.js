// 3 Ways of creating components and passing them to the DOM

// 1- Class
class Hello extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello there!</h1>
        <p>My first React app</p>
      </div>
    );
  }
};


// 2- Function
function Goodbye() {
  return (
    <div>
      <h1>Goodbye!</h1>
      <p>This was nice</p>
    </div>
  );
};

// 3- Simple variable
const element = <div><h3>This is a test</h3><p>testing some shit</p></div>;

ReactDOM.render(<Hello/>, document.getElementById('root'));
ReactDOM.render(<Goodbye/>, document.getElementById('goodbye'));
ReactDOM.render(element, document.getElementById('testing'));