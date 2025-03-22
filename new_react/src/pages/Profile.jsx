import React, { useState } from "react";
import Card from "../profile/Card.jsx";
import Info from "../profile/Info.jsx";
import WorkExperienceInfo from "../profile/WorkExperienceInfo.jsx";

function Profile() {
  const [profile] = useState({
    Name: "Danniel Libor",
    Username: "danniel.libor",
    Email: "danniel@mail.test",
    Address: "1234 Main St, City, Country",
  });

  const [workExperiences] = useState([
    {
      company: "Tech Inc.",
      position: "Software Engineer",
      date: "Jan 2019 - Dec 2021",
    },
    {
      company: "Shop Inc.",
      position: "Software Developer",
      date: "Jan 2021 - Dec 2022",
    },
  ]);

  return (
    <>
      <Card title="Profile Information">
        {Object.keys(profile).map((key, index) => {
          return <Info key={index} label={key} value={profile[key]} />;
        })}
      </Card>

      <br />

      <Card title="Work Experiences">
        <ul>
          {workExperiences.map((workExperience, index) => {
            return <WorkExperienceInfo key={index} data={workExperience} />;
          })}
        </ul>
      </Card>
    </>
  );
}

export default Profile;
