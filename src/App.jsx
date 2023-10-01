import React from 'react';
import ReactDOM from 'react-dom';

function App() {
 var named="Suvash"
  function checking()
  {
     
      console.log(`Good!! Now You are Welcomed By ${named}Now`)
  }
  return (
    <>
        
      <div style={{ backgroundColor: "red" }}>
        <h1>Hi I will do welcome using {named} after clicking the click me.</h1>
        <button className="btN" onDoubleClick={checking}>Click me</button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
import React from 'react'

