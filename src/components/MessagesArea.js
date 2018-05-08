import React from 'react';
import NewMessageForm from './NewMessageForm';
import { Icon, Divider } from 'antd'

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {
  return (
    <div className="messagesArea">
      <Divider dashed />
      <h2>{title}</h2>
      <NewMessageForm conversation_id={id} /><p></p>
      <div id="orderedMessages">{orderedMessages(messages)}</div>
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return sortedMessages.map(message => {
    return <div key={message.id}><Icon type="message" /> {message.text}</div>;
  });
};
