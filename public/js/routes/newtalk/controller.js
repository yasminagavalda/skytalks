angular.module('skytalksApp')
    .controller('newTalkController', function ($scope, usersService, $location) {
      usersService.getLanguages('userId', function(languages) {
      	$scope.languages = languages
      	// $scope.apply()
      })
        // .then(function (response) {
        //   $scope.user = response
        // })


        $scope.createNewTalk = function(newlanguage, newplace, newdate) {
        	console.log(newlanguage, newplace, newdate)
          $location.path('/')
        }
      	// $scope.apply()
      })
    
      