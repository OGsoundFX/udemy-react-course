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
// The curly braces (without $ sign) enables interpolation in JSX
const number = Math.floor(Math.random() * 10) + 1;
const element = <div><h3>This is a test</h3><p>testing some shit with the number {number}</p></div>;

ReactDOM.render(<Hello/>, document.getElementById('root'));
ReactDOM.render(<Goodbye/>, document.getElementById('goodbye'));
ReactDOM.render(element, document.getElementById('testing'));