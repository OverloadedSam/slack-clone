import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import Avatar from '@mui/material/Avatar';
import TimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { auth } from '../firebase';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <NavContainer>
      <NavLeft>
        <NavAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <TimeIcon />
      </NavLeft>

      <NavSearch>
        <SearchIcon />
        <input placeholder='Search' type='text' />
      </NavSearch>

      <NavRight>
        <HelpOutlineOutlinedIcon />
      </NavRight>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  background-color: var(--slack-color);
  color: #fff;
`;

const NavLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 1.25rem;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 1.875rem;
  }
`;

const NavAvatar = styled(Avatar)`
  cursor: pointer;
  & :hover {
    opacity: 0.8;
  }
`;

const NavSearch = styled.div`
  flex: 0.4;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 3.125rem;
  border: 1px solid grey;

  > input {
    background-color: transparent;
    outline: 0;
    border: none;
    text-align: center;
    min-width: 30vw;
    color: #fff;
  }
`;

const NavRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 1.875rem;
  }
`;
