(function() {
  var PrettyBall, defaultOptions;

  PrettyBall = function(element, options) {
    this.init(element, options);
  };

  if (PrettyBall.options == null) {
    PrettyBall.options = {};
  }

  defaultOptions = {
    'test': 'test'
  };

  PrettyBall.prototype.getOption = function(key) {
    if(!(key in PrettyBall.options)) {
      return defaultOptions[key];
    }
  };

  PrettyBall.prototype.init = function(element, options) {
    console.log(this.getOption('test'));
  };

  window.PrettyBall = PrettyBall;

})(); 