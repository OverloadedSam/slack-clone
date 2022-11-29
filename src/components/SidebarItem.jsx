import React from 'react';
import styled from 'styled-components';
import { collection, addDoc } from '@firebase/firestore';
import { useDispatch } from 'react-redux';
import { enterChannel } from '../features/appSlice';
import { db } from '../firebase';

const SidebarItem = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();

  const addChannel = async () => {
    const channelName = prompt('Please enter the channel name');
    const channelCollectionRef = collection(db, 'channels');

    if (channelName.trim())
      await addDoc(channelCollectionRef, { name: channelName });
  };

  const selectChannel = () => {
    if (id) dispatch(enterChannel({ channelId: id }));
  };

  return (
    <SidebarItemContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: '0.625rem' }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarItemChannel>
          <span>#</span> {title}
        </SidebarItemChannel>
      )}
    </SidebarItemContainer>
  );
};

export default SidebarItem;

const SidebarItemContainer = styled.div`
  display: flex;
  font-size: 0.75rem;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  > h3 {
    font-weight: 500;
  }

  h3 > span {
    padding: 0.93rem;
  }

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
`;

const SidebarItemChannel = styled.h3`
  padding: 0.625rem 0;
  font-weight: 300;
`;
