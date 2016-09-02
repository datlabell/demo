//Get react.
var React = require('react');

//Get Sidebar & Sidebar data.
var Sections = require('./data/sidebarData');
var Sidebar = require('./navigation/sidebar');

//Get apt data.
var ApartmentData = require('./data/apartmentData');

var ApartmentSection = React.createClass({
    renderValue: function (detail) {
      return detail.shouldEmphasize ? <span className="apt-detail-emphasize">{detail.value}</span> : detail.value;
    },  
    renderDetail: function(detail) {
        return (
          <div className="row" key={detail.key}>
              <p>
                <span className="apt-detail-key">{detail.key}</span> : {this.renderValue(detail)}
              </p>
          </div>
        )
    },
    render: function() {
        return(
          <div className="col-xs-3 pull-right apt-section">
            {this.props.section.map(this.renderDetail)}
          </div>
        )  
    }
});

var ApartmentHeadline = React.createClass({ 
  render: function() {
      return(
        <div className="row apt-headline">
              <ApartmentSection section={this.props.rightSection}/>
              <ApartmentSection section={this.props.centerRightSection}/>
              <ApartmentSection section={this.props.centerLeftSection}/>
              <ApartmentSection section={this.props.leftSection}/>
        </div>
      )
  }
});

var ApartmentLayout = React.createClass({
  getInitialState: function() {
    return ApartmentData;
  },

  render: function() {
    return (
        <div className="container-fluid container-rtl">
          <ApartmentHeadline rightSection={this.state.rightSection} centerRightSection={this.state.centerRightSection}
          centerLeftSection={this.state.centerLeftSection} leftSection={this.state.leftSection}/>
          <div className="row apt-content">
            <div className="col-xs-2 pull-right">
                <Sidebar sections={Sections}/>
            </div>
            <div className="col-xs-10 pull-right">
                {this.props.children}
            </div>
          </div>
        </div>
    )
  }
});

module.exports = ApartmentLayout;