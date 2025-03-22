// import React from 'react'

// function Info(props) {
//   return (
// <>
//         <p style>{props.label}</p>
//             {props.value}
// </>
//   )
// }

// export default Info


import React from 'react'

function Info(props) {
  return (
    <>
        <p style={{ color: "red" }}>{props.label}: {props.value}</p>
    </>
  )
}

export default Info