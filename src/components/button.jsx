import React, { Component } from "react";
import '../css/button.css'

class button extends Component {
  render() {
    return (
      <button className={this.props.isClickButton ? "button-click" : "button-reset"} onClick={this.props.eventClick} >
        {this.props.text}
      </button>
    );
  }
}

export default button;

// import '../css/button.css'

// function Button({text, isClickButton, eventClick }) {
//     return (
//         <button className={isClickButton?'button-click':'button-reset'} onClick={eventClick}>{text}</button>
//     );
// }

// export default Button;
