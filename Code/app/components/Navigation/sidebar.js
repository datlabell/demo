//React requirements
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//Bootstrap requirements
var ReactBootstrap = require('react-bootstrap');
var BSNav = ReactBootstrap.Nav;

//Sidebar Section Element
var SidebarSection = React.createClass({
    
    renderLinkSafe: function(link) {
        return link.href === undefined ? <a>{link.name}</a> :  <Link to={link.href}>{link.name}</Link>;
    },

    renderSectionLink: function(link) {
        return (
            <li className="sidebar-section-link" key={link.name}>
                {this.renderLinkSafe(link)}
            </li>
        )
    },
    
    render: function() {
        return (
            <li className="sidebar-section" disabled>
                <div className="sidebar-section-title">
                    {this.props.section.title}
                </div>
                <ul className="sidebar-section-links">
                   {this.props.section.links.map(this.renderSectionLink)}
                </ul>
            </li>
        )
    }
})

//Sidebar element
var Sidebar = React.createClass({
    
    renderSidebarSection: function(section) {
        return <SidebarSection section={section} key={section.title}/>
    },

    render: function() {
        return (
            <div className="sidebar">
                <BSNav stacked>
                    {this.props.sections.map(this.renderSidebarSection)}
                </BSNav>
            </div>
        )
    }
});


module.exports = Sidebar;
