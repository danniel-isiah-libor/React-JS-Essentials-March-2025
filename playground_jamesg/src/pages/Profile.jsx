import React from 'react'
import Card from '../profile/Card.jsx'
import Info from '../profile/Info.jsx'
import WorkExperienceInfo from '../profile/WorkExperienceInfo.jsx'

function Profile() {
    const profile = {
        Name: 'James Gonzales',
        Username: 'james.gonzales',
        Email: 'jms@mail.test',
        Address: '1234 Main St, City, Country',
    }

    const workExperiences = [
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

  return (
    <div>
        <br />
        <Card title="Profile Information">
            {
                Object.keys(profile).map((key) => {
                    return (
                        <Info label={key} value={profile[key]}/>
                    )
                })
            }
        </Card>

        <br />

        <Card title="Work Experiences">
            <ul>
            {
                workExperiences.map((workExperience) => {
                    return (
                        <WorkExperienceInfo data={workExperience}/>
                    )
                })
            }
            </ul>
        </Card>
    </div>
  )
}

export default Profile