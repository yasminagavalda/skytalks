angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/talks', {
              templateUrl: 'js/routes/mytalks/template.html',
              controller: 'talksController'
            })
    })
