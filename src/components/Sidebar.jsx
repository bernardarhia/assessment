import React from "react";
import {sidebarLists} from "../contents/sidebarContent"
const Sidebar = () => {
  
  return <div className="sidebar">
        <ul className="sidebar__lists">
            {sidebarLists.map((list, index) =>{
                return <li className="sidebar__list" key={index}>{list.text}</li>
            })}
        </ul>
  </div>;
};

export default Sidebar;
