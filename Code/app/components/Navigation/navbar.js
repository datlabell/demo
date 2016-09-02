var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var BSNavbar = ReactBootstrap.Navbar;
var BSNav = ReactBootstrap.Nav;
var BSNavItem = ReactBootstrap.NavItem;

var Navbar = React.createClass( {
  render: function() {
    return (
      <BSNavbar>
        <BSNavbar.Header>
            <BSNavbar.Brand>
                <a href="/home" id="delta-brand-color">Delta Project</a>
            </BSNavbar.Brand>
        </BSNavbar.Header>
        <BSNav pullRight>
            <BSNavItem eventKey={1} href="/home">
                <span>דירות למכירה</span>
            </BSNavItem>
        </BSNav>
      </BSNavbar>
    )
  }
});

module.exports = Navbar;