var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var HomeLayout = React.createClass( {
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
            <h1>
                Welcome to home page...
            </h1>
        </div>
      </div>
    )
  }
});

module.exports = HomeLayout;