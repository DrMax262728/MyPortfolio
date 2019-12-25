import * as React from "react";
// views
import { HeaderNavBar, NavBrand, NavRight, NavLink } from "./views";
import { ImageWrapper } from "components/viewComponents/PortfolioLanding/views";

const NavBar: React.FunctionComponent = () => (
  <HeaderNavBar>
    <NavBrand>Max Halynskyi</NavBrand>
    <ImageWrapper
      src="/static/electroBall.png"
      width="364px"
      height="341.5px"
      top="-124px"
      left="26px"
      opacity="0.4"
    />
    <NavRight>
      <NavLink>My Projects</NavLink>
      <NavLink>About Me</NavLink>
      <NavLink>Contacts</NavLink>
    </NavRight>
  </HeaderNavBar>
);

export default NavBar;
