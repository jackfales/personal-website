import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.div`
   background-color: white;
   width: 100vw;
   padding: 37px 0px 37px 28px;
   
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

const LinkContainer = styled.div`
   padding-right: 97px;
`;

const StyledLink = styled(Link)`
   font-family: Poppins;
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 30px;

   letter-spacing: 0.05em;
   text-transform: uppercase;

   margin: 0 33px;
   color: #A6AEAD;

   &:hover {
      color: #4F4C4C;
   }

   transition: color 0.5s ease-out;
`;

const StyledLogo = styled.h1`
   font-family: Yeseva One;
   font-style: normal;
   font-weight: normal;
   font-size: 21px;
   line-height: 24px;
   letter-spacing: 0.02em;

   color: #000000;
   margin-right: auto;
`;

export default function Navbar() {

   return (
      <NavbarContainer>
         <StyledLogo>Jack F.</StyledLogo>
         <LinkContainer>

            <StyledLink
               to="about-container"
               smooth
            >
               About
            </StyledLink>

            <StyledLink
               to="experience-container"
               smooth
            >
               Experience
            </StyledLink>

            <StyledLink
               to="projects-container"
               smooth
            >
               Projects
            </StyledLink>

            <StyledLink
               to="contact-container"
               smooth
            >
               Contact
            </StyledLink>

         </LinkContainer>
      </NavbarContainer>
   );
}