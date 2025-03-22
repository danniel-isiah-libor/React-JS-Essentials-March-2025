import React, { act, useReducer, useState } from 'react'
import Card from '../components/Card'

const initialWorkExp = [
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

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE': {
            const data = [...state]
            data.splice(action.index, 1)
            return data
        }
    }
}
export default function Profile() {
    const [profileInfos] = useState ([
        {
            Name: "Christian Javier",
            Username: "cjavier",
            Email: "ChristianJavier@gmail.com"
        }
    ]) 
    // const [workExp] = useState ([
    //     {
    //         Company: "JX Metals",
    //         Role: "Programmer",
    //         Year: "Jan 2023 - March 2025"
    //     },
    //     {
    //         Company: "Company Sample :",
    //         Role: "Programmer",
    //         Year: "Jan 2020 - March 2023"
    //     },
        
    // ])
    const [workExp, dispatch] = useReducer(reducer, initialWorkExp)
    const onDelete = (index) => {
        dispatch({type: "DELETE", index})
    }

  return (
    <div className='flex flex-col space-y-5 p-5 border max-w-[60%]'>
        
        <Card label="Profile Information" type="profile" data={profileInfos}/>
        <Card  label="Work Experiences" type="work" data={workExp} onDelete={onDelete}/>

    </div>
  )
}  
