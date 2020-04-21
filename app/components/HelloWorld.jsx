const React = require('react');
const {useEffect} = React;

/* the main page for the index route of this app */
const HelloWorld = function() {
  useEffect(() => {
    let socket;/// = window.io.connect();
    console.log(socket);;;
  });
  return (
    <div>
      Hi {useEffect ? 'yesefg' : 'no'} there
    </div>
  );
}

module.exports = HelloWorld;