angular.module('skytalksApp')
    .controller('talksController', function ($scope, $window, usersService, $cookies) {

   
      if ($cookies.get('loggedIn') === 'true') {
      	  
	      usersService.getTalks('userId')
	        .then(function (response) {
	          $scope.talks = response
	        })
	  } else {
	  	$window.location.href = "/login"
	  }


    })
      