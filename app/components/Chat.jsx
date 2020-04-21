import React, { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = window.io();
    socketRef.current.on("chat message", msg => {
      setMsgs(msgs => [...msgs, msg]);
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    socketRef.current.emit("chat message", input);
    setInput("");
  }

  return (
    <>
      <ul id="messages">
        {msgs.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button>Send</button>
      </form>
    </>
  );
}
