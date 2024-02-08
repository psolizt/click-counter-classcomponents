import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      numCliks: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.countReset = this.countReset.bind(this);
  }

  handleClick() {
    //  Use the setState method to update the state object's properties
    this.setState({numCliks : this.state.numCliks + 1});
    // or use an arrow function for concise syntax
    //this.setState(({numCliks}) => ({numCliks: numCliks + 1}));
    
  }

  countReset() {
    this.setState({numCliks: 0});
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo'>
          <img className="logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp"/>
        </div>
        <div className='container'>
          <Counter numCliks={this.state.numCliks}/>
          <Button text='Clic' isClickButton={true} eventClick={this.handleClick}/>
          <Button text='Reiniciar' isClickButton={false} eventClick={this.countReset}/>
        </div>
      </div>
    );
  };
}

export default App;

// import { useState } from 'react';
// import './App.css';
// import Button from './components/button';
// import Counter from './components/counter';
// import freeCodeCampLogo from './images/freecodecamp-logo.png';

// function App() {
  
//   const [numCliks, setNumClicks] = useState(0);

//   const eventClick = () => {
//     setNumClicks(numCliks + 1);
//   };

//   const countReset = () => {
//     setNumClicks(0);
//   };

//   return (
//     <div className="App">
//       <div className='freecodecamp-logo'>
//         <img className="logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp"/>
//       </div>
//       <div className='container'>
//         <Counter numCliks={numCliks}/>
//         <Button text='Clic' isClickButton={true} eventClick={eventClick}/>
//         <Button text='Reiniciar' isClickButton={false} eventClick={countReset}/>
//       </div>
//     </div>
//   );
// }

// export default App;
