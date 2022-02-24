import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap,FooterLinkWrapper, FooterLinksContainer, FooterLinkTitle ,FooterLink , FooterLinkItems, SocialIcon, SocialIconLink,SocialLogo, Socialmedia, SocialmediaWrap, WebsiteRights} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Team info</FooterLink>
                            <FooterLink to="/signin">What's new</FooterLink>
                            <FooterLink to="/signin">Customer reviews</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Support </FooterLinkTitle>
                            <FooterLink to="/signin">Help center</FooterLink>
                            <FooterLink to="/signin">Feature request</FooterLink>
                            <FooterLink to="/signin">Contact us</FooterLink>
                    </FooterLinkItems>
                    </FooterLinkWrapper>
                    {/* <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us </FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">About us</FooterLink>
                    </FooterLinkItems>
                    </FooterLinkWrapper> */}
                </FooterLinksContainer>
                <Socialmedia>
                    <SocialmediaWrap>
                        <SocialLogo to=''>Slide It!</SocialLogo>
                        <WebsiteRights>SlideIt! © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcon>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"> <FaTwitter/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink> 
                        </SocialIcon>
                        
                    </SocialmediaWrap>
                </Socialmedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
