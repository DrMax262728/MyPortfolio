import styled from "styled-components";
// themes
import colors from "styles/colors";

export const HeaderNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.purple900};
  color: white;
  padding: 40px;
  margin-top: 40px;
`;

export const NavBrand = styled.div`
  margin-left: 120px;
`;

export const NavRight = styled.div``;

export const NavLink = styled.a`
  padding: 0 32px;
  cursor: pointer;
  font-size: 20px;

  :hover {
    opacity: 0.8;
  }
`;
