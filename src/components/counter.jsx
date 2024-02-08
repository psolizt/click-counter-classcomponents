import React, { Component } from "react";
import '../css/counter.css';

class counter extends Component {
  render() {
    return (
      <div className="counter">
        {this.props.numCliks}
      </div>
    );
  }
}

export default counter;

// import '../css/counter.css';

// function Counter({numCliks}) {
//     return (
//         <div className="counter">
//             {numCliks}
//         </div>
//     );
// }

// export default Counter;
