// const React = require('react');
// const {useEffect, useState} = React;
import React, {useEffect, useState} from 'react';

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [id, setId] = useState('<nimic>');
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    console.log('useeffect');;;
    let socket = window.io();
    socket.on('onconnected', data => {
      console.log('ononnected', data);;;
      setId(data.id);
    });
    socket.on('chat message',  msg => {
      
    });
  }, []);
  
  return (
    <>
      <ul id="messages">
      </ul>
      <form action="">
        <input id="m" autoComplete="off" />
        <button>Sendxt</button>
      </form>
    </>
  );
}

// module.exports = HelloWorld;
export default HelloWorld;