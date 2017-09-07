angular.module('skytalksApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/new-talk', {
              templateUrl: 'js/routes/newtalk/template.html',
              controller: 'newTalkController'
            })
    })
