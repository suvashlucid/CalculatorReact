import React from 'react';
import ReactDOM from 'react-dom';
import { subtract, multiply, divide } from './Calc';

function App() {
  return (
    <>
    <ul>
      <li> The required sub is{subtract(3, 2)}</li>
      <li>{divide(2, 1)}</li>
      <li>{multiply(2, 3)}</li>
    </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
