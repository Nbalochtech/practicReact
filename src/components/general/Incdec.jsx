import React, { useReducer, useState } from "react";



const Incdec = () => {

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "Inc":
  //       return state + 2;
  //       break;
  //     case "Dec":
  //       return state - 2;
  //       break;
  //     case "Mul":
  //       return state * 2;
  //       break;
  //     case "Dev":
  //       return state / 2;
  //       break;
  //     default:
  //       return state;
  //       break;
  //   }
  // }
  // const [state, dipatch] = useReducer(reducer, 0);
  const [counter, setCounter] = useState(0);
  const dec = (n) => {
    setCounter(counter - n);
  };
  const inc = (n) => {
    setCounter(counter + n);
  };

  return (
    <dev className="container center">

      <div class="card text-center">
        <div class="card-header">
          <h1>Increament and decreament</h1>
        </div>
        <div class="card-body">
          {/* <h1 class="card-title">{state}</h1>
          <button className="btn btn-danger m-3" onClick={() => dipatch({ type: "Dec" })}> - Decreament</button>
          <button className="btn btn-primary" onClick={() => dipatch({ type: "Inc" })}> + Increament</button>
          <button className="btn btn-success m-3" onClick={() => dipatch({ type: "Mul" })}> * Multiply</button>
          <button className="btn btn-warning" onClick={() => dipatch({ type: "Dev" })}> / devide</button>
        </div> */}
          <div class="card-footer text-muted">
            Use Reduce
          </div>
        </div>
    </dev>
  );
};

export default Incdec;
