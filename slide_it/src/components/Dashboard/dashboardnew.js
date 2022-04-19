//import useState hook to create menu collapse state
import React, { useState } from "react";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import "./dashboardnew.css";


const Dashboard = () => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
      setsidebarOpen(true);
    };
    const closeSidebar = () => {
      setsidebarOpen(false);
    };
    return (
      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    );
  };

export default Dashboard;
