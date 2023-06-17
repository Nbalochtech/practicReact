import React, { useState } from "react";

const Incdec = () => {
  const [counter, setCounter] = useState(0);

  const dec = (n) => {
    setCounter(counter - n);
  };
  const inc = (n) => {
    setCounter(counter + n);
  };
  return (
    <>
      <h1>{counter}</h1>
      <br />
      <button onClick={() => dec(2)}> - Decreament</button>
      <button onClick={() => inc(5)}> + Increament</button>
    </>
  );
};

export default Incdec;
