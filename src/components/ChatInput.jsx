import React, { useState } from 'react';
import { Button } from '@mui/material';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId || !input.trim()) return false;

    const channelReference = collection(db, `channels/${channelId}/messages`);
    await addDoc(channelReference, {
      message: input.trim(),
      timestamp: serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({ behavior: 'smooth' });
    setInput('');
  };

  return (
    <ChatInputContainer className='ip-container'>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          autoFocus
        />
        <Button hidden type='submit' onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 1.875rem;
    width: 60%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 1.25rem;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
