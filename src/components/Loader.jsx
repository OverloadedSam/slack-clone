import React from 'react';
import styled from 'styled-components';
import Stack from '@mui/system/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {
  return (
    <AppLoading>
      <AppLoadingContents>
        <img src='assets/images/slack-logo.png' alt='slack' />
        <LinearProgress color='secondary' />
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
          <LinearProgress color='secondary' />
        </Stack>
      </AppLoadingContents>
    </AppLoading>
  );
};

export default Loader;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 100px;
    padding: 20px;
    margin-bottom: 50px;
  }
`;
