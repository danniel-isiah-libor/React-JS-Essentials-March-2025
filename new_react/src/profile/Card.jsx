import React from "react";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h2 style={{ borderBottom: "1px solid white" }}>{props.title}</h2>

      {props.children}
    </div>
  );
}

export default Card;
