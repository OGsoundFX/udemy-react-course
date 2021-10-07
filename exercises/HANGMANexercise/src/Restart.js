import React, {Component} from "react";

class Restart extends Component {
  refreshPage() {
    window.location.reload(false);
  }
  
  render() {
    return (
      <button onClick={this.refreshPage}>Restart</button>
    )
  }
}

export default Restart;