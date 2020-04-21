// const React = require('react');
// const {useEffect, useState} = React;
import React, { useEffect, useState } from "react";

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [id, setId] = useState("<nimic>");
  const [msgs, setMsgs] = useState(["lorem", "ipsum", "dolor"]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    console.log("useeffect");
    const socket = window.io();
    socket.on("onconnected", data => {
      console.log("ononnected", data);
      setId(data.id);
    });
    socket.on("chat message", msg => {
      setMsgs(msgs => [...msgs, msg]);
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    console.log(input);;;
    setInput('');
  }
  return (
    <>
      <ul id="messages">
        {msgs.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input autoComplete="off" value={input} onChange={e => {setInput(e.target.value)}} />
        <button>Send</button>
      </form>
    </>
  );
};

// module.exports = HelloWorld;
export default HelloWorld;
