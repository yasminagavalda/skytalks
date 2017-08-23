angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/talk', {
              templateUrl: 'js/routes/newtalk/template.html',
              controller: 'newTalkController'
            })
    })
