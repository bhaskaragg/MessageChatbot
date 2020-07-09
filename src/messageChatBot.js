import React from "react";

const MessageChatBot = (props) => {
  const { messages } = props;
  const messagesEndRef = React.useRef(null);
  React.useEffect(() => {
    if (messagesEndRef && messagesEndRef.current)
      messagesEndRef.current.scrollTop =
        messagesEndRef.current.scrollHeight -
        messagesEndRef.current.clientHeight;
  }, [messages]);
  return (
    <div className="main-content" ref={messagesEndRef}>
      <div className="message-list">
        {messages.map((messageObject) => {
          return messageObject.send ? (
            <div className="message-right">
              <div className="text-message">
                <p>{messageObject.message}</p>
              </div>
            </div>
          ) : (
            <div className="message-left">
              <div className="text-message">
                <p>{messageObject.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageChatBot;
