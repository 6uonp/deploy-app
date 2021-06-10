import { Fragment } from "react";
import styled from "styled-components";
import Banner from "./Banner";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 0 20px;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: Acumin Pro;
  font-size: 13px;
`;
const HeaderNav = styled.div`
  width: 262px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-family: Helvetica;
`;

const Header = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <Logo>LOGO</Logo>
        <HeaderNav>
          <span>HOME</span>
          <span>DISCOVERY</span>
          <span>PHOTOS</span>
          <span>CONTACT</span>
        </HeaderNav>
        <div>
          <img />
        </div>
      </HeaderWrapper>
      <Banner />
    </Fragment>
  );
};

export default Header;
