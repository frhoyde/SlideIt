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
  FaRegHeart,
  FaPlus,
  FaTv,
  FaRegShareSquare,
  FaTrashAlt,
} from "react-icons/fa";
import {
  FiHome,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiLogOut,
} from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

// import Avatar from "react-avatar";

//import card from materialUi

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./dashboard.css";
import Search from "./search";
import Services from "./Cards/card";
import TemplateCard from "./Cards/templateCards";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div>
        <div id="dashboard">
          {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                <p
                  style={{
                    paddingTop: "7px",
                    paddingLeft: "10px",
                    fontSize: "20px",
                    paddingBottom: "0px",
                    fontWeight: "bold",
                  }}
                >
                  {menuCollapse ? "SlideIt" : "Slide It"}
                </p>
              </div>
              <div
                className="closemenu"
                onClick={menuIconClick}
                style={{
                  paddingTop: "0px",
                  paddingLeft: "10px",
                  fontSize: "20px",
                }}
              >
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
                <MenuItem icon={<FaTrashAlt />}>Trash</MenuItem>
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

          {/* <Avatar
          name="Afrin Sultana"
          value="86%"
          size="60"
          round={true}
          style={{ float: "right", display: "absoulate" }}
        /> */}
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: "20px",
            paddingLeft: menuCollapse ? "10%" : "22%",
          }}
        ></div>
        <div
          style={{
            paddingLeft: menuCollapse ? "-2%" : "0%",
          }}
        >
          <Services />
        </div>

        {/* <TemplateCard
        img="https://picsum.photos/id/54/400/300"
        title="What I learned from my visit to The Upside Down"
        author="Click to view"
      ></TemplateCard>  */}
      </div>
    </>
  );
};

export default Dashboard;
