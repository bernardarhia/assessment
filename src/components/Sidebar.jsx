import React from "react";

const Sidebar = () => {
  const sidebarLists = [
      {
          text:"Login information",
          location:"login"
      },
      {
          text:"Personal information",
          location:"personal_info"
      },
      {
          text:"Delivery information",
          location:"delivery"
      },
      {
          text:"Medical information",
          location:"medical"
      },
      {
          text:"Lifestyle information",
          location:"lifestyle"
      },
      {
          text:"Goal setting",
          location:"goals"
      },
      {
          text:"Subscription",
          location:"subscription"
      },
];
  return <div className="sidebar">
        <ul className="sidebar__lists">
            {sidebarLists.map((list, index) =>{
                return <li className="sidebar__list" key={index}>{list.text}</li>
            })}
        </ul>
  </div>;
};

export default Sidebar;
