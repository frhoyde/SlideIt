import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu, SidebarLinkR} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="about" onClick={toggle}> About</SidebarLink>
                    <SidebarLink to ="discover" onClick={toggle}> discover</SidebarLink>
                    <SidebarLink to ="services" onClick={toggle}> Services</SidebarLink>
                    
                    <SidebarLink to ="start" onClick={toggle}> Start</SidebarLink>
                    <SidebarLinkR to ="/signin" > Sign In</SidebarLinkR>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signup">
                        Sign Up
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
