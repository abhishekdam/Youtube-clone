import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home"></SidebarRow>
      <SidebarRow Icon={WhatshotIcon} title="Trending"></SidebarRow>
      <SidebarRow Icon={SubscriptionsIcon} title="Subcription"></SidebarRow>
    </div>
  );
}

export default Sidebar;
