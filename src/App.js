import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import MessageChatBot from "./messageChatBot";

function App() {
  const [messages, setMessages] = React.useState([]);
  const [isOnline, setIsOnline] = React.useState([]);
  const onSendMessage = (message) => {
    setMessages((messages) => [...messages, { message: message, send: true }]);
    receiveMessage();
  };
  React.useEffect(() => {
    setInterval(() => {
      if (navigator.onLine) {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    }, 5000);
  }, []);
  const receiveMessage = () => {
    Promise.resolve({
      data: {
        botMessage: "Pardon my Ignorance.I am just a dummy",
      },
    }).then((response) => {
      setMessages((messages) => [
        ...messages,
        { message: response.data.botMessage, send: false },
      ]);
    });
  };
  return (
    <div className="App">
      <Header isOnline={isOnline} setIsOnline={setIsOnline} />
      <MessageChatBot messages={messages} />
      <Footer onSendMessage={onSendMessage} />
    </div>
  );
}

export default App;
