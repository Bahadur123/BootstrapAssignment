var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var Login = require('./pages/Login/Login');
var MovieBox = require('./components/MovieBox');
var HomePage = require('./components/Home');
var ViewMovieBox = require('./components/ViewMovieBox');

var  LoginRequired  = require('./utils/RouteHelpers');
var a=require('./components/First');

module.exports = (
<Route>
    <Route handler={Login} name="Login" path="/Login"/>
    <Route handler={LoginRequired}>
        <Route handler={Master}>
            <DefaultRoute handler={Home} name="Home"/>
        </Route>
        <Route handler={HomePage} name="HomePage" path="/home"/>

        <Route handler={a} name="MovieBox" path="/First"/>

    </Route>
</Route>
);
