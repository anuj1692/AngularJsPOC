(function () {
    //'use strict';
    var core = angular.module('app.core');
    core.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        init();
        function init() {
            $routeProvider.
                when('/landingpage/', {
                    templateUrl: 'app/landingpage/landing.html',
                }).
        }
    };

})();