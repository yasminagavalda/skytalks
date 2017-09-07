angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/my-talks', {
              templateUrl: '/js/routes/mytalks/template.html',
              controller: 'talksController'
            })
    })
    


