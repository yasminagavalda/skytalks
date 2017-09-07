angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/profile', {
              templateUrl: 'js/routes/profile/template.html',
              controller: 'usersController'
            })
            .when('/', {
              templateUrl: 'js/routes/profile/template.html',
              controller: 'usersController'
            })
    })
