angular.module('skytalksApp')
    .controller('talksController', function ($scope, usersService, $q, $location, $cookies) {


      if ($cookies.get('loggedIn') === 'true') {
      	  console.log($cookies.get('loggedIn'))
	      usersService.getTalks('userId')
	        .then(function (response) {
	          $scope.talks = response
	        })
	  } else {
	  	$location.path('./login')
	  }
    })
      