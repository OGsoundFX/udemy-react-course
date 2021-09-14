class Machine extends React.Component {
  render() {
    const winLose = (f1,f2,f3) => {
      return f1 === f2 && f1 ===f3
    }
    return (
      <div>
        <h1>{this.props.f1}{this.props.f2}{this.props.f3}</h1>
        <h1 className={winLose(this.props.f1, this.props.f2, this.props.f3)
          ? "win" : "lose"
          }>
          {
            winLose(this.props.f1, this.props.f2, this.props.f3)
            ? "You Win"
            : <em>You lose</em>
          }
        </h1>
      </div>
    )
  }
}