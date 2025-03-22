import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>Hooks</div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click Me</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default Hooks;
Hooks;
