angular.module('skytalksApp')
    .controller('navController', function ($window, $scope, StorageService, AuthService) {
      if (AuthService.isLoggedIn()) {
      	$scope.navoptions = [{title: 'MY TALKS', route: '/user'}, {title: 'NEW TALK', route: '/user#!/talk'}, {title: 'PROFILE', route: '/user#!/profile'}]
      	$scope.isLoggedIn = true
      } else {
      	$scope.navoptions = []
      	$scope.isLoggedIn = false
      }

      $scope.logout = function () {
	      AuthService.logout()
	      $window.location.href = 'user#!/login'
	    }
    })
      