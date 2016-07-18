var React = require('react');
var Navbar = require('./Navbar');

//Home Component
var Home = React.createClass({
    render: function() {
        return (
            <div className="well">
            <Navbar />
                <div className="page-header">
                    <h1>WEATHER DETAILS</h1>
                </div>
                <p className="lead"><small>Finding the Particular city Weather Details</small></p>
            </div>
        );
    }
});

module.exports = Home;
