//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {
  FaMagic,
  FaBrush,
  FaRegHeart,
  FaPlus,
  FaTv,
  FaRegShareSquare,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import Avatar from "react-avatar";

//import card from materialUi

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./dashboard.css";
import Search from "./search";

const Dashboard = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="dashboard">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p style={{ paddingTop: "7px" }}>
                {menuCollapse ? "SlideIt" : "Slide_It"}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FaPlus />}>
                New Presentation
              </MenuItem>
              <MenuItem icon={<FaMagic />}>Explore Templates</MenuItem>
              <MenuItem icon={<FaTv />}>My Presentations</MenuItem>

              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<FaRegShareSquare />}>Shared with me</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      <div>
        <Search />
        <Avatar
          name="Afrin Sultana"
          value="86%"
          size="40"
          round={true}
          style={{ float: "right", display: "absoulate" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          float: "right",
          paddingTop: "20px",
          paddingRight: menuCollapse ? "57%" : "45%",
        }}
      >
        <h4>You're ready to start your first presentation</h4>
      </div>
      <div
        style={{
          display: "flex",
          paddingTop: "20px",
          paddingLeft: menuCollapse ? "10%" : "22%",
        }}
      >
        <div style={{ padding: "12px" }}>
          <div
            className="card text-white bg-secondary mb-3"
            style={{
              width: "20rem",
              height: "10rem",
              Hover: "transform: scale(1.05)",
            }}
          >
            {/* <img
              className="card-img"
              src={temImg}
              height="70%"
              width="39%"
            ></img> */}
            <div className="card-header">
              <p>USE A TEMPLATE</p>
            </div>
            <p className="card-text" style={{ padding: "18px" }}>
              Use any template from our website
            </p>
          </div>
        </div>

        <div style={{ padding: "12px" }}>
          <div
            className="card text-white bg-secondary mb-3"
            style={{ width: "20rem", height: "10rem" }}
          >
            <div className="card-header">
              <p>BLANK PRESENTATION</p>
            </div>
            <p className="card-text" style={{ padding: "18px" }}>
              {" "}
              Create your own slides from scratch
            </p>
          </div>
        </div>

        <div style={{ padding: "12px" }}>
          <div
            className="card text-white bg-secondary mb-3"
            style={{ width: "20rem", height: "10rem" }}
          >
            <div className="card-header">
              <p>REDESIGN A PRESENTATION</p>
            </div>
            <p className="card-text" style={{ padding: "18px" }}>
              {" "}
              Edit any existing presentation
            </p>
          </div>
        </div>
      </div>
      <div
        className="RecommendedTemplate"
        style={{
          display: "flex",
          paddingTop: "20px",
          paddingLeft: menuCollapse ? "8%" : "20%",
        }}
      >
        Here are some recommended templates to start up
      </div>
    </>
  );
};

export default Dashboard;
