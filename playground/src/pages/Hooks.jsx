import React, { useState, useEffect, useActionState } from "react";
import StateHook from "../components/hooks/StateHook.jsx";

function Hooks() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  const onClick = () => {
    setCount(count + 18);
  };

  const onReset = () => {
    setCount(0);
  };

  const actions = {
    onClick: onClick,
    onReset: onReset,
  };

  return (
    <>
      <div>Hooks</div>

      <StateHook count={count} actions={actions} />
      <br />

      <strong>{number}</strong>
      {/* <button onClick={setNumber(1)}>Set Number</button> */}
    </>
  );
}

export default Hooks;
