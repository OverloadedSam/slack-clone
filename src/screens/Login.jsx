import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LoginWrapperContainer>
      <LoginContainer>
        <img src='assets/images/slack-logo.png' alt='slack' />
        <h1>Sign in to Slack Clone</h1>
        <p>slack-org.web.app</p>

        <Button onClick={signIn}>Sign in with google</Button>
      </LoginContainer>
    </LoginWrapperContainer>
  );
};

export default Login;

const LoginWrapperContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginContainer = styled.div`
  padding: 6.25rem;
  text-align: center;
  background-color: #fff;
  border-radius: 0.625rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    width: 6.25rem;
    margin-bottom: 2.5rem;
  }

  > button {
    margin-top: 3.125rem;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: #fff;
  }
`;
