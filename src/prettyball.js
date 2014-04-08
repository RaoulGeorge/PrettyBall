(function() {

        var PrettyBall = function(element, options) {
          this.init(element, options);
        };

        PrettyBall.prototype.init = function(element, options) {
          console.log('init');
        };

        window.PrettyBall = PrettyBall;

})(); // We call our anonymous function immediately