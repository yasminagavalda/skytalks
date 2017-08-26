angular.module('skytalksApp')
    .controller('navController', function ($scope, $cookies) {
      if ($cookies.get('loggedIn') === 'true') {
      	$scope.navoptions = [{title: 'MY TALKS', route: 'user'}, {title: 'NEW TALK', route: 'user#!/talk'}, {title: 'PROFILE', route: 'user#!/profile'}, {title: 'LOG OUT', route: '/logout'}]
      	$scope.isLoggedIn = true
      } else {
      	$scope.navoptions = []
      	$scope.isLoggedIn = false
      }
    })
      