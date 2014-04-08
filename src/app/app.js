define(function (require) {

    require('prettyball');

    function App() {
    	console.log(new PrettyBall());
    };

    App.prototype.activate = function() {
    };

    return App;
});