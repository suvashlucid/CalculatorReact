import React, { useState } from "react";

const namedd = "suvash";

function App() {
  const [named, setNamed] = useState(
    `Hi, I will do welcome using ${namedd} after ck me.`
  );

  function checking() {
    // Toggle the state between two different values
    named === `Hi, I will do welcome using ${namedd} after clicki`
      ? setNamed(`Good!! Now You are Welcomed By ${namedd}Now`)
      : setNamed(`Hi, I will do welcome using ${namedd} a`);
  }

  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <h1>{named}</h1>
        <button className="btN" onClick={checking}>
          Click me
        </button>
      </div>
    </>
  );
}

export default App;
//acp
