angular.module('skytalksApp')
    .controller('navController', function ($window, $scope, StorageService, AuthService) {
      
      $scope.logout = function () {
	      AuthService.logout()
	      $window.location.href = '/'
	    }
    })
      