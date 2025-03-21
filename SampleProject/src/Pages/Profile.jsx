import React from 'react'
import Card from '../Components/Card'

export default function Profile() {
    const profileInfos = [
        {
            Name: "Christian Javier",
            Username: "cjavier",
            Email: "ChristianJavier@gmail.com"
        }
    ] 
    const profileExp = [
        {
            Company: "JX Metals",
            Role: "Programmer",
            Year: "Jan 2023 - March 2025"
        },
        {
            Company: "Company Sample :",
            Role: "Programmer",
            Year: "Jan 2020 - March 2023"
        },
        
    ]
  return (
    <div className='flex flex-col space-y-5 p-5 border max-w-[60%]'>
        
        <Card label="Profile Information" type="profile" data={profileInfos}/>
        <Card  label="Work Experiences" type="work" data={profileExp}/>

    </div>
  )
}
