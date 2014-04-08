require(['config/global'], function () {
    require(['app/app'], function (application) {
    	new application().activate();
    });
});
