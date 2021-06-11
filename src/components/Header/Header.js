import { Fragment } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-family: Acumin Pro;
  font-size: 13px;
  margin: auto;
  @media (min-width: 769px) {
    margin: 0;
  }
`;
const HeaderNav = styled.div`
  @media (min-width: 760px) {
    width: 262px;
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-family: Helvetica;
  }
  display: none;
`;

const MenuButton = styled.div`
  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <MenuButton>
        <div></div>
        <div></div>
        <div></div>
      </MenuButton>
      <Logo>LOGO</Logo>
      <HeaderNav>
        <span>HOME</span>
        <span>DISCOVERY</span>
        <span>PHOTOS</span>
        <span>CONTACT</span>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
