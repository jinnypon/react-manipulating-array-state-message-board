import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => {
       setMessageText(event.target.value);
    };

  const addMessage = (event) => {
      event.preventDefault();
      const newMessages = [...messages];
      newMessages.push(messageText);
      setMessages(newMessages);
      setMessageText("");
    };
  
  const deleteMessage = (messagesIndex) => {
      const newMessages = [...messages];
      newMessages.splice(messagesIndex, 1);
      setMessages(newMessages);
    };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form onSubmit={addMessage}>
        <div className="message-input-container">
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              onChange={handleMessageTextChange}
              value={messageText}
              placeholder="Enter message here"
            />
          </label>
          <button className="submit-message-button" type="submit">Submit</button>
        </div>
      </form>
        <ul className="board">
        {messages.map((item, index) => {
          return (
            <li key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                type="button"
                onClick={() => {deleteMessage(index);}}
              >
                x
              </button>
            </li>
          );
        })}
        </ul>
    </div>
  );
}

export default MessageBoard;
