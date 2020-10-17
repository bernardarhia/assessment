import React from "react";

const PersonalDetails = () => {
  return (
    <div className="personal__details">
      <div className="heading">
        <p>Personal Information</p>
      </div>

      <div className="details">
          {/* Phone number */}
        <div className="phone__number">
          <p className="title">Mobile number</p>
          <p className="text">0543814868</p>
        </div>

        {/* Email */}
        <div className="email">
          <p className="title">Email</p>
          <p className="text">bernardarhia@gmail.com</p>
        </div>
        {/* Nationality */}
        <div className="nationality">
          <p className="title">Nationality</p>
          <p className="text">Ghanaian</p>
        </div>
        {/* Occupation */}
        <div className="occupation">
          <p className="title">Occupation</p>
          <p className="text">Web developer</p>
        </div>
        {/* Date of birth */}
        <div className="dob">
          <p className="title">Date of birth</p>
          <p className="text">2020 03 12</p>
        </div>
        {/*Gender*/}
        <div className="gender">
          <p className="title">Gender</p>
          <p className="text">Male</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
