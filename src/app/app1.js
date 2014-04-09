define(function (require) {
    //var app = require('app/app'); // causes a cyclic error
    var app1 = require('app/app2');

   function App() {
    	
    };

    App.prototype.activate = function() {
    	
    };

    return App;
});