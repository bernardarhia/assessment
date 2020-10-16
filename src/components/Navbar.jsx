import React from 'react'
import {FiMenu} from "react-icons/fi"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="user__info">
               <div className="icon">
                   <FiMenu />
            </div>
            <div className="user__avatar">
                    <img src="https://www.pexels.com/photo/1006265/download/?search_query=person&tracking_id=9c5h6odcgud" alt=""/>
                </div>
                <div className="username">
                    John Snow
                </div>
        </div>
        </div>
    )
}

export default Navbar
