//Required react modules
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var BrowserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;

//Add app styling to all routing
var BootstrapCss = require('./css/bootstrap.min.css');
var AppCss = require('./css/app.css');

//Get main layout
var MainLayout = require('./components/mainLayout');

//Get layouts
var HomeLayout = require('./components/homeLayout');
var MapLayout = require('./components/mapLayout');
var SearchLayout = require('./components/searchLayout');
var ApartmentLayout = require('./components/apartmentLayout');

//Get apartment inner views
var TabuView = require('./components/apartment/tabuView');
var SketchView = require('./components/apartment/sketchView');
var BuildingDocView = require('./components/apartment/buildingDocView');
var ReviewsView = require('./components/apartment/reviewsView');
var OwnerNotesView = require('./components/apartment/ownerNotesView');
var PicturesView = require('./components/apartment/picturesView');
var TourView = require('./components/apartment/tourView');
var VirtualizationView = require('./components/apartment/VirtualizationView');
var VideoView = require('./components/apartment/videoView');


//Routing
ReactDOM.render((
  <Router history={BrowserHistory}>
    <Route path="/" component={MainLayout}>
        <IndexRoute component={HomeLayout} />
        <Route path="home" component={HomeLayout}></Route>
        <Route path="map" component={MapLayout}></Route>
        <Route path="search" component={SearchLayout}></Route>
        <Route path="apartment/:id/" component={ApartmentLayout}>
            <IndexRedirect to="government/tabu" />
            <Route path="government/tabu" component={TabuView}></Route>
            <Route path="government/sketch" component={SketchView}></Route>

            <Route path="city-council/building-doc" component={BuildingDocView}></Route>

            <Route path="social/reviews" component={ReviewsView}></Route>
            <Route path="social/owner-notes" component={OwnerNotesView}></Route>

            <Route path="visual/map" component={MapLayout}></Route>
            <Route path="visual/pictures" component={PicturesView}></Route>
            <Route path="visual/tour" component={TourView}></Route>
            <Route path="visual/virtualization" component={VirtualizationView}></Route>
            <Route path="visualvideo" component={VideoView}></Route>
        </Route>
    </Route>
  </Router>
), document.getElementById('main'))