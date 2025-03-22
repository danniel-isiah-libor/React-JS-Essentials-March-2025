import React ,{useState}from 'react'
import Header from '../page/Header'
import Field from '../form/Field'
import Card from '../page/Card'

export default function Profile() {
  const [profile] = useState({
    name:"Gerald Orzal",
    username:"GOrzal",
    email:"geraldorzal18@gmail.com",
    workingExperiences:[]
  })
  return (
   <div>
        <Header text="Profile"/>
        {
            Object.keys(profile)?.map((key)=> console.log(typeof(key)) && <Field label={key} text={profile[key]} isReadOnly={true}/>)
        }
        
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
