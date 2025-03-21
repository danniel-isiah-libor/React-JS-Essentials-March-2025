import React from "react";
import MainProfile from "../componentsprofile/Mainprofile";
import SubProfile from "../componentsprofile/Subprofile";

function Profile() {
  return (
    <>
      <div className="bg-white w-1/3 rounded-sm p-10 mx-auto text-black">
        <MainProfile></MainProfile>
        <SubProfile />
      </div>
    </>
  );
}

export default Profile;
