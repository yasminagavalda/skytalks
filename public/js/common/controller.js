angular.module('skytalksApp')
    .controller('navController', function ($scope, $cookies) {
      console.log($cookies.get('loggedIn'))
      if ($cookies.get('loggedIn') === 'true') {
      	$scope.navoptions = [{title: 'MY TALKS', route: 'user#!/talks'}, {title: 'NEW TALK', route: 'user#!/talk'}, {title: 'PROFILE', route: 'user'}, {title: 'LOG OUT', route: '/logout'}]
      	$scope.isLoggedIn = true
      } else {
      	$scope.navoptions = []
      	$scope.isLoggedIn = false
      }
      console.log($scope.isLoggedIn)
      console.log($scope.navoptions)
    })
      