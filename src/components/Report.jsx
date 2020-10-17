import React from "react";
import Navbar from "./Navbar"
import {Link} from "react-router-dom"
import ReportBody from "./ReportBody";
const Report = ({ location:{state}}) => {
  console.log(state);
  return (
    <div className="report__page">
     <Navbar />


     <header  className="showcase">
         <div className="username">
             <p className="name">Wayne Rooney</p>
             <p className="text">TONE UP 1400</p>
         </div>
         <div className="edit__profile">
             <Link to="/edit">Edit profile</Link>
         </div>
     </header>

     <ReportBody userData={state} />
    </div>
  );
};

export default Report;
