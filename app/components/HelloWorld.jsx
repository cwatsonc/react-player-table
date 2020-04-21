const React = require('react');

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      Hi {window.io ? 'yes' : 'no'} there
    </div>
  );
}

module.exports = HelloWorld;