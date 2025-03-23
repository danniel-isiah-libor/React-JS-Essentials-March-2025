import React from "react";

function Section(props) {
  return (
    <div className="bg-white p-10 m-5 rounded-2xl">
      <h2 className="text-lg font-bold">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Section;
