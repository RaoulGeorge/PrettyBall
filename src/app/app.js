define(function (require) {

    require('prettyball');
    var app1 = require('app/app2');

    function App() {
    	
    };

    App.prototype.activate = function() {
    	var prettyball = new PrettyBall();
    	prettyball.options = {
    		'test': 'test'
    	};
    };

    return App;
});