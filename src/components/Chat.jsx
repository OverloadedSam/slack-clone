import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc, query, orderBy } from '@firebase/firestore';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { selectChannelId } from '../features/appSlice';
import ChatInput from './ChatInput';
import Message from './Message';

const Chat = () => {
  const chatRef = useRef(null);
  let channelId = useSelector(selectChannelId);

  let docRef = channelId && doc(db, 'channels', channelId);
  const [channelDetails] = useDocument(docRef);

  const messagesRef =
    channelId && collection(db, 'channels/', channelId, '/messages');
  const [messages, loading] = useCollection(
    messagesRef && query(messagesRef, orderBy('timestamp', 'asc'))
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channelId, loading]);

  return (
    <ChatContainer>
      {channelDetails && messages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong># {channelDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon />
                Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {messages?.docs?.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  id={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={channelDetails?.data().name}
            channelId={channelId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 3.75rem;
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 12.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 0.625rem;
    align-items: center;
  }

  > h4 .MuiSvgIcon-root {
    margin-left: 0.625rem;
    font-size: 1.125rem;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }

  > p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 1rem;
  }
`;
