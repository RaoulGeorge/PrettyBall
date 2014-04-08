(function() {
  var PrettyBall, defaultOptions;

  PrettyBall = function(element, options) {
    this.init(element, options);
  };

  if (PrettyBall.options == null) {
    PrettyBall.options = {};
  }

  defaultOptions = {
    'container': '.prettyball-container'
  };

  PrettyBall.prototype.getOption = function(key) {
    if(!(key in PrettyBall.options)) {
      return defaultOptions[key];
    }
  };

  PrettyBall.prototype.setOption = function (option) {

  };

  PrettyBall.prototype.init = function() {
    var element;

    element = this.getOption('container');
    cacheControls(this, element);
    drawPrettyBall(this);
  };

  function cacheControls(self, element) {
    self.element = $(element);

  }

  function drawPrettyBall(self) {
    addCanvas(self);
  };

  function addCanvas(self){
    console.log();
    var el = self.element;
    el.append('canvas');
  }

  window.PrettyBall = PrettyBall;

})(); 