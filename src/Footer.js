import React, { useState } from "react";
import { IconCamera, IconSend } from "./icons";

const Footer = (props) => {
  const { onSendMessage } = props;
  const [messageText, setMessageText] = useState("");
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-input-wrapper">
          <div className="footer-input">
            <input
              autocomplete="off"
              name="inputField"
              placeholder="Type message"
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && messageText.trim() !== "") {
                  onSendMessage(messageText);
                  setMessageText("");
                }
              }}
            />
          </div>
          <div className="message-camera-icon">
            <input
              type="file"
              id="file-add"
              className="d-none"
              accept="image/png, image/jpeg" // on change not handled 
            />
            <label for="file-add">
              <IconCamera />
            </label>
          </div>
        </div>
        <div
          className="message-send"
          onClick={() => {
            if (messageText.trim() !== "") {
              onSendMessage(messageText);
              setMessageText("");
            }
          }}
        >
          <IconSend />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
