var React = require('react');
var Navbar = require('./Navigation/navbar');

var MapPage = React.createClass( {
  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});

module.exports = MapPage;