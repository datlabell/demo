var React = require('react');
var Navbar = require('./Navigation/navbar');

var ApartmentPage = React.createClass( {
  render: function() {
    return (
      <div>
        <Navbar/>
        <h1>Welcome To Apartment Page</h1>
      </div>
    )
  }
});

module.exports = ApartmentPage;