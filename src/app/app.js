define(function (require) {

    require('prettyball');

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