import React from "react";

function Header({info}) {
  return (
    <div className="header">
      <div className="personal-information">
        <h2>{info.name}</h2>
        <p>{info.username}</p>
        <p>{info.email}</p>
      </div>
      <div className="work-information">
        <h2>{info.company}</h2>
        <p>{info.role}</p>
        <p>{info.date}</p>
      </div>
    </div>
  );
}

export default Header;
