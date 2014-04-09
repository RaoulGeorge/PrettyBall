define(function (require) {
    //var app = require('app/app'); // causes a cyclic error

require(['app/app1'], function (app) {   //solves the cyclic error
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
});