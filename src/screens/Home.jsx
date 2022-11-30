import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <AppBody>
      <Sidebar />
      <Chat />
    </AppBody>
  );
};

export default Home;

const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;
