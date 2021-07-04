import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MessagesPanel({ currentUser }) {
  const [messages, setMessages] = useState([]);

  const { conversationId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/messages?conversationId=${conversationId}`)
      .then((resp) => resp.json())
      .then(setMessages);
  }, [conversationId]);

  return (
    <ul className="conversation__messages">
      {messages.map((message) => (
        <li
          key={message.id}
          className={message.userId === currentUser.id ? "outgoing" : ""}
        >
          <p>{message.messageText}</p>
        </li>
      ))}
    </ul>
  );
}

export default MessagesPanel;
