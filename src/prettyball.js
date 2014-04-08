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
    //get a reference to the canvas
    var ctx = $('.canvas-ctr')[0].getContext("2d");

    //draw a circle
    ctx.beginPath();
    ctx.arc(100,75,50,0,2*Math.PI); 
    ctx.closePath();
    ctx.fill();
  };

  function addCanvas(self){
    var el = self.element;
    var canvasEl = '<canvas class="canvas-ctr" style="height: 300px; width: 300px">';
    el.append(canvasEl);
  }

  window.PrettyBall = PrettyBall;

})(); 