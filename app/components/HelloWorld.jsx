const React = require('react');
const {useEffect} = React;

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      Hi {useEffect ? 'yesefg' : 'no'} there
    </div>
  );
}

module.exports = HelloWorld;