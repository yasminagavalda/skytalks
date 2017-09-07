angular.module('skytalksApp')
    .controller('navController', function ($scope, $window, UsersService) {
      
      $scope.logout = function () {
	      UsersService.logout()
	      	.then(function(res) {
	      		$window.location.href = '/';
	      	});
	    }
    });
      