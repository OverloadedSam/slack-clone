import React from 'react';
import styled from 'styled-components';
import { collection } from '@firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import Online from '@mui/icons-material/FiberManualRecord';
import Pencil from '@mui/icons-material/Create';
import Thread from '@mui/icons-material/InsertComment';
import Inbox from '@mui/icons-material/Inbox';
import Bookmark from '@mui/icons-material/BookmarkBorder';
import People from '@mui/icons-material/PeopleAlt';
import Apps from '@mui/icons-material/Apps';
import File from '@mui/icons-material/FileCopy';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Add from '@mui/icons-material/Add';
import SidebarItem from './SidebarItem';
import { auth, db } from '../firebase';

const Sidebar = () => {
  const channelCollectionRef = collection(db, 'channels');
  const [channels] = useCollection(channelCollectionRef);
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Welcome</h2>
          <h3>
            <Online />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <Pencil />
      </SidebarHeader>

      <SidebarItem Icon={Thread} title='Threads' />
      <SidebarItem Icon={Inbox} title='Mentions & reactions' />
      <SidebarItem Icon={Bookmark} title='Channel browser' />
      <SidebarItem Icon={People} title='People and user groups' />
      <SidebarItem Icon={Apps} title='Apps' />
      <SidebarItem Icon={File} title='file browser' />
      <SidebarItem Icon={ExpandLess} title='Show less' />

      <hr />
      <SidebarItem Icon={ExpandMore} title='Channels' />
      <hr />
      <SidebarItem Icon={Add} title='Add Channel' addChannelOption />

      {channels?.docs.map((doc) => (
        <SidebarItem key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  color: #fff;
  border-top: 1px solid #49274b;
  max-width: 16.25rem;
  margin-top: 3.75rem;
  overflow-y: scroll;

  > hr {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 0.8rem;

  > .MuiSvgIcon-root {
    padding: 0.5rem;
    color: #49274b;
    font-size: 1.1rem;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 0.93rem;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 0.87rem;
    margin-top: 1px;
    margin-right: 2px;
    color: #47da47;
  }
`;
