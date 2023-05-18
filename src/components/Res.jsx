import React, { useState } from "react";

const Res = () => {
  let [num, setNum] = useState(0);
  return (
    <div>
      <div className="calculator">
        <button onClick={() => setNum(num + 1)}>+1</button>
        <button onClick={() => setNum(num - 1)}>-1</button>
        <button onClick={() => setNum(0)}>Reset</button>
        <h1>{num}</h1>
      </div>
    </div>
  );
};

export default Res;
