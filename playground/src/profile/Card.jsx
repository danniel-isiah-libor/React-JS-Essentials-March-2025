import React from 'react'

function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.name}</p>
      <p>{props.username}</p>
      <p>{props.email}</p>
    </div>
  )
}

  function Work(props) {
    return (
      <div>
        <h3>{props.title}</h3>
        <p>{props.comp}</p>
        <p>{props.role}</p>
        <p>{props.from}</p>
      </div>
    )

}
function Adv(props) {
  return (
    <div>
    <h2 style={{ borderBottom: "1px solid white" }}>{props.title}</h2>

    {props.children}
</div>
  ) 
}

function Info(props) {
    return (
      <>
          <p style={{ color: "red" }}>{props.label}: {props.value}</p>
      </>
    )
  }

  function WorkExperienceInfo(props) {
    return (
      <li style={{ borderBottom: '1px solid grey' }}>
          <p>{props.data.company}</p>
          <p>{props.data.position}</p>
          <p>{props.data.date}</p>
      </li>
    )
  }

export { Card, Work, Adv, Info, WorkExperienceInfo };