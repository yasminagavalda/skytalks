angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/mytalks', {
              templateUrl: 'js/routes/mytalks/template.html',
              //controller: 'viewDetailsController'
            })
    })
