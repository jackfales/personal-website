import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { MenuList } from './MenuList';
import styled from 'styled-components';

const Nav = styled.nav`
   background-color: white;
   height: 80px;
   display: flex;
   justify-content: space-between;
   padding: 0.5rem calc((100vw - 1000px) / 2);
`;

const Bars = styled(FaBars)`
   display: none;
   color: black;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
   }
`;

const NavContainer = styled.div`
   display: flex;
   align-items: center;
   margin-right: 24px;

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

const NavLink = styled(Link)`
   font-family: Poppins;
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 30px;

   letter-spacing: 0.05em;
   text-transform: uppercase;

   margin: 0 33px;
   color: #A6AEAD;

   display: flex;
   align-items: center;
   height: 100%;

   &:hover {
      color: #4F4C4C;
   }

   transition: color 0.5s ease-out;
`;

export default function Navbar() {
   const menuList = MenuList.map(({ title, container }) => {
      return (
         <NavLink to={container} smooth>
            {title}
         </NavLink>
      )
   });

   return (
      <Nav>
         <NavLink>Jack F.</NavLink>
         <Bars />
         <NavContainer>
            {menuList}
         </NavContainer>
      </Nav>
   );
}