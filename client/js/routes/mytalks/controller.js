angular.module('skytalksApp')
    .controller('talksController', function ($scope, $window, usersService, talksService, $cookies) {

      var id = $cookies.get('id').split(':')[1]
      id = id.substr(1, id.length-2)


   
      // if ($cookies.get('loggedIn') === 'true') {
      	  
	      talksService.getMyTalksConfirmed(id)
	        .then(function (response) {
	            $scope.talksconfirmed = response
	        })

	      talksService.getMyTalksWaitingPartner(id)
	        .then(function (response) {
	            $scope.talksWaitingPartner = response
	        })

	      talksService.getMyTalksWaitingResponse(id)
	        .then(function (response) {
	            $scope.talksWaitingResponse = response
	        })
	  // } else {
	  // 	$window.location.href = "/login"
	  // }


    })
      