const React = require('react');
const {useEffect, useState} = React;

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [id, setId] = useState('<nimic>');
  
  useEffect(() => {
    console.log('useeffect');;;
    let socket = window.io();
    socket.on('onconnected', data => {
      console.log('ononnected', data);;;
      setId(data.id);
    })
  }, []);
  
  return (
    <div>
      I am {id}.
    </div>
  );
}

module.exports = HelloWorld;