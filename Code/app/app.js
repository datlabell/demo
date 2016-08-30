//Required react modules
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var BrowserHistory = ReactRouter.browserHistory;

//Add app styling to all routing
var BootstrapCss = require('./css/bootstrap.min.css');
var AppCss = require('./css/app.css');

//Get main layout
var MainLayout = require('./components/mainLayout');

//Get pages
var HomeView = require('./components/homeView');
var MapView = require('./components/mapView');
var SearchView = require('./components/searchView');
var ApartmentView = require('./components/apartmentView');

ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={HomeView}></Route>
        <Route path="/home" component={HomeView}></Route>
        <Route path="/map" component={MapView}></Route>
        <Route path="/search" component={SearchView}></Route>
        <Route path="/apartment" component={ApartmentView}></Route>
    </Route>
  </Router>
), document.getElementById('main'))