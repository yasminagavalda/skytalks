angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/', {
              templateUrl: 'js/routes/profile/template.html',
              //controller: 'viewDetailsController'
            })
    })
