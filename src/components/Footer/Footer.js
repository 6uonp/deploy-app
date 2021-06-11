import styled from "styled-components";
import { Logo } from "../Header/Header";

const FooterWrapper = styled.div`
  background: #a6adb4;
  height: 200px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterNav = styled.div`
  width: 379px;
  height: 84px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 140px;
`;

const FooterNavCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Helvetica;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav>
        <Logo>LOGO</Logo>
        <FooterNavCol>
          <span>Home</span>
          <span>Discovery</span>
          <span>Photos</span>
          <span>Contact</span>
        </FooterNavCol>
        <FooterNavCol>
          <span>About</span>
          <span>Help</span>
          <span>Terms</span>
          <span>Guidlines</span>
        </FooterNavCol>
        <FooterNavCol>
          <span>Testimonials</span>
          <span>Advertise</span>
          <span>Integrations</span>
          <span>Careers</span>
        </FooterNavCol>
      </FooterNav>
    </FooterWrapper>
  );
};

export default Footer;
