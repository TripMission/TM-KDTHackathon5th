import React from 'react';
import './App.css';

const helloWorldReactElment = <h1>HELLOWORLD!</h1>
function returnDiffName(myname){
  return(
    <h1>{myname}, hello!</h1>
  )
}

class HelloWorld extends React.Component{

  render(){

    return(
      <div>
        <h1> Hello, World??? </h1>
        <h1> Hello, World?? </h1>
      </div>
    )

  }
  
}

class App extends React.Component {
  render() {
    
    return (
      <div className='App'>
        <h1> Hello, New World?? </h1>
        <h1> Hello, New World?? </h1>
        <HelloWorld/>
        {helloWorldReactElment}
        <h1> Hello, New World?? </h1>
        {returnDiffName('SUNGWHAN')}
      
      </div>

    );
  }
}



export default App;