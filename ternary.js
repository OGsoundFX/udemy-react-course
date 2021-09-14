class Ternary extends React.Component {
  render () {
    const num = Math.floor(Math.random() * 10 ) + 1;
    return (
      <div>
        <p>Your number is {num}</p>
        { num < 7 &&   <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" alt=""></img> }
      </div>
    );
  }
}

// ReactDOM.render(<Ternary/>, document.getElementById('root'));