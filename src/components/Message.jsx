import styled from 'styled-components';
import React from 'react';

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message} </p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem;

  > img {
    width: 3.125rem;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 0.625rem;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 0.625rem;
  }
`;
