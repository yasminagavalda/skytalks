angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/newtalk', {
              templateUrl: 'js/routes/newtalk/template.html',
              //controller: 'viewDetailsController'
            })
    })
