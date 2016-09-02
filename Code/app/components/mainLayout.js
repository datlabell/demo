var React = require('react');
var Navbar = require('./navigation/navbar');

var MainLayout = React.createClass( {
  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
});

module.exports = MainLayout;