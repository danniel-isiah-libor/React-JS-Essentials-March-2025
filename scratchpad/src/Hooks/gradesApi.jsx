import React, {useEffect, memo} from 'react'

function Grades(props) {
    useEffect(() => {
        console.log('Grades component mounted');
    })

  return (
    <ul>
        {
            props.state.grades.map((grade, index) => {
                return (
                    <li key={index}>
                        <strong>{grade}</strong>
                        <button onClick={() => (props.state.onDelete(index))}>Delete</button>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default memo(Grades)