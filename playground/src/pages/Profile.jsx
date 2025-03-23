import { Card, Work, Adv, Info, WorkExperienceInfo } from "../profile/Card.jsx";
import {useState} from 'react'

function Profile() {
  const [profile] =  useState([{
    name: "Jervin Faderanga",
    username: "jervsfads",
    email: "jervin.faderanga@wdc.com",
  }]);

  const [workExperiences] = useState([
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
]) 


  return (
    <div>
      <Card
        title="Profile Information"
        name="Name: Jervin Faderanga"
        username="Username:JervsFads"
        email="Email: jervin.faderanga@wdc.com"
      />
      <br />
      <Work
        title="Work experiences"
        comp="Western Digital"
        role="SQL Dev"
        from="2019 -Present"
      />

      <br />
      <>
        <Adv title="This is advanced Profile">
          {Object.keys(profile).map((key) => {
            return <Info label={key} value={profile[key]} />;
          })}
        </Adv>

        <Adv title="This is advanced Work Experience">
        <ul>
            {
                workExperiences.map((workExperience) => {
                    return (
                        <WorkExperienceInfo data={workExperience}/>
                    )
                })
            }
            </ul>
        </Adv>
      </>
      <a href="/login">Go to login</a>
    </div>
  );
}

export default Profile;
