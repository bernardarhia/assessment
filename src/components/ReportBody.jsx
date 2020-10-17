import React from 'react'
import { Link } from 'react-router-dom';
import {navLists} from "../contents/reportBodyContent";
import MedicalInfo from './MedicalInfo';
import PersonalDetails from './PersonalDetails';
const ReportBody = ({userData}) => {
    return (
        <div className="container">
            <div className="report__body">

                {/* Report navigation */}
                <div className="report__nav">
                    <ul className="nav__lists">
                            {navLists.map((navList, index) =>{
                                return <li className="nav__list" key={index}>
                                    <Link to={navList.path}><span>WW</span> {navList.text}</Link>
                                </li>
                            })}
                    </ul>
                </div>

                {/* Print icon */}

                <div className="print">
                    <button>Print</button>
                </div>

                <PersonalDetails />
                <MedicalInfo userData={userData}/>
            </div>
        </div>
    )
}

export default ReportBody
