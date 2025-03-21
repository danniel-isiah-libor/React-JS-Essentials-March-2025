import React from 'react'

function WorkExperienceInfo(props) {
  return (
    <li style={{ borderBottom: '1px solid grey' }}>
        <p>{props.data.company}</p>
        <p>{props.data.position}</p>
        <p>{props.data.date}</p>
    </li>
  )
}

export default WorkExperienceInfo