define(function (require) {

    require('prettyball');

    function App() {

    };

    App.prototype.activate = function() {
        console.log('activated');
    };

    return App;
});