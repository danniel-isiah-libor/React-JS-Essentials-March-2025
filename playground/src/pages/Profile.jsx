import React, { useState } from "react";
import "../css/Profile.css";
import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";

function Profile() {
  const [profile] = useState({
    image: "//unsplash.it/seed/profile158/200",
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    company: "Inventive Media",
    role: "Web Developer",
    date: "March 08, 2025 - present",
    about:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, mi id ultricies tempus, ex felis ultricies nunc, nec ultricies purus erat ac odio. Nullam nec purus at risus tincidunt varius. Integer et odio at elit ultricies aliquam. Nullam nec ultricies erat. Nullam nec purus at risus tincidunt varius. Integer et odio at elit ultricies aliquam. Nullam nec ultricies erat.",
  });

  const gallery = [
    "//unsplash.it/seed/a123/200",
    "//unsplash.it/seed/a124/200",
    "//unsplash.it/seed/a125/200",
    "//unsplash.it/seed/a126/200",
    "//unsplash.it/seed/a127/200",
    "//unsplash.it/seed/a128/200",
    "//unsplash.it/seed/a129/200",
    "//unsplash.it/seed/a130/200",
  ];

  return (
    <div className="section">
      <div className="container">
        <img src={profile.image} alt="" id="profile" />

        <Header info={profile} />

        <About body={profile.about} />

        <Gallery images={gallery} />
      </div>
    </div>
  );
}

export default Profile;
