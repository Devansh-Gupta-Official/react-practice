import React from 'react';

const App = () => {
  return <h1 title="MY APP">A React App!</h1>;  //same as React.createElement('h1',{title:'MY APP'},'Hi this is reactJS');
};

// class App extends React.Component{
//   render(){
//     return <h1 title="MY APP">A React App Part 2!</h1>; 
//   }
// }   this is the same as the above jsx function

export default App;
