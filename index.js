class Hello extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello there!</h1>
        <p>My first React app</p>
      </div>
    );
  }
}

// function Goodbye() {
//   return (
//     <div>
//       <h1>Goodbye!</h1>
//       <p>This was nice</p>
//     </div>
//   );
// }

ReactDOM.render(<Hello/>, document.getElementById('root'));
// ReactDOM.render(<Goodbye/>, document.getElementById('root'));