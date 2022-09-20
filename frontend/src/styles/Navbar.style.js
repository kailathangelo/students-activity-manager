import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #5db5f8;
  display: flex;
`;

export const MiniNavbarContainer = styled.nav`
  width: 15%;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
  margin: 15px;
  margin-left: 50px;
  text-align: center;
  font-size: 1.5em;
  &:hover {
    color: grey;
  }
  &:focus {
    color: grey;
  }
`;

export const BtnLink = styled.button`
  color: #5db5f8;
  padding: 10px;
  margin: 15px 5px;
  text-align: center;
  font-size: 1.5em;
  border: none;
  border-radius: 5px;
  
  &:hover {
    /* background-color: grey; */
    color: grey;
  }
  &:focus {
    background-color: #ebfbff;
    color: grey;
  }
`;
