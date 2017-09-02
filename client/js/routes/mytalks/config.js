angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider

            .when('/', {
              templateUrl: '/js/routes/mytalks/template.html',
              controller: 'talksController'
            })
    })


