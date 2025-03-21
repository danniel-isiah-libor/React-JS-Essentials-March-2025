import React from 'react'
import Header from '../page/Header'
import Field from '../form/Field'
import Card from '../page/Card'

export default function Profile() {
  return (
   <div>
        <Header text="Profile"/>
        <Field label="Name" text="Gerald Orzal" isReadOnly={true}/>
        <Field label="Username" text="GOrzal" isReadOnly={true}/>
        <Field label="Email  " text="geraldorzal18@gmail.com" isReadOnly={true}/>
        <Header text="Work Experiences"/>
        <ul style={{listStyle:"inside"}}>
          <Card
            itemsToDisplay={[
              {
                title:"Company Name",
                text:"JX Metals"
              },
              {
                title:"Role",
                text:"Jr. MIS Programmer"
              },
              {
                title:"Year",
                text:"2023-Present"
              }
            ]}
          />
            <Card
            itemsToDisplay={[
              {
                title:"Company Name",
                text:"Random"
              },
              {
                title:"Role",
                text:"Jr. MIS Programmer"
              },
              {
                title:"Year",
                text:"2012-2023"
              }
            ]}
          />
        </ul>
   </div>
  )
}
