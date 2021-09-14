class Machine extends React.Component {
  render() {
    const winLose = (f1,f2,f3) => {
      return f1 === f2 && f1 ===f3
    }
    return (
      <div>
        <h1>{this.props.f1}{this.props.f2}{this.props.f3}</h1>
        <h1>
          {
            winLose(this.props.f1, this.props.f2, this.props.f3)
            ? "You Win"
            : "You Lose"
          }
        </h1>
      </div>
    )
  }
}