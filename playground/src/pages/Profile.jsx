import React, {useState, useReducer} from 'react'
import Card from '../profile/Card.jsx'
import Info from '../profile/Info.jsx'
import WorkExperienceInfo from '../profile/WorkExperienceInfo.jsx'

const initialWorkExperiences = [
    {
        company: 'Tech Inc.',
        position: 'Software Engineer',
        date: 'Jan 2019 - Dec 2021'
    },
    {
        company: 'Shop Inc.',
        position: 'Software Developer',
        date: 'Jan 2021 - Dec 2022'
    }
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

function Profile() {
    const [profile] = useState({
        Name: 'Danniel Libor',
        Username: 'danniel.libor',
        Email: 'danniel@mail.test',
        Address: '1234 Main St, City, Country',
    })

    const [workExperiences, dispatch] = useReducer(reducer, initialWorkExperiences)

    const onDelete = (index) => {
        dispatch({type: 'DELETE', index})
    }

  return (
    <>
        <Card title="Profile Information">
            {
                Object.keys(profile).map((key, index) => {
                    return (
                        <Info key={index} label={key} value={profile[key]}/>
                    )
                })
            }
        </Card>

        <br />

        <Card title="Work Experiences">
            <ul>
            {
                workExperiences.map((workExperience, index) => {
                    return (
                        <WorkExperienceInfo key={index} data={workExperience} onDelete={onDelete}/>
                    )
                })
            }
            </ul>
        </Card>
    </>
  )
}

export default Profile