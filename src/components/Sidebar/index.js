import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about"  onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover"  onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services"  onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="singup"  onClick={toggle}>Sing Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to= "/singin">Sing In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
