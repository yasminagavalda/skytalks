angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider

            .when('/login', {
              templateUrl: '/js/routes/login/template.html',
              controller: 'loginController',
          	  controllerAs: 'ctrl'
            })
    })
    


