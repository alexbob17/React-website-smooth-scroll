import React from "react";
import {animateScroll as scroll} from 'react-scroll';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "../Footer/FooterElement";

const Footer = () => {

  
const toggleHome = () => {
  scroll.scrollToTop();
}



  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/singin">How it works</FooterLink>
              <FooterLink to="/singin">Testimonial</FooterLink>
              <FooterLink to="/singin">Careers</FooterLink>
              <FooterLink to="/singin">Investors</FooterLink>
              <FooterLink to="/singin">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/singin">Submit Video</FooterLink>
              <FooterLink to="/singin">Ambassador</FooterLink>
              <FooterLink to="/singin">Agency</FooterLink>
              <FooterLink to="/singin">Influencer</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/singin">Contact</FooterLink>
              <FooterLink to="/singin">Support</FooterLink>
              <FooterLink to="/singin">Destinations</FooterLink>
              <FooterLink to="/singin">Sponsorships</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/singin">Instagram</FooterLink>
              <FooterLink to="/singin">Facebook</FooterLink>
              <FooterLink to="/singin">Youtube</FooterLink>
              <FooterLink to="/singin">Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/"  onClick={toggleHome}>Alejo Bank</SocialLogo>
            <WebsiteRights>
              Alejo Banks{new Date().getFullYear} All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
