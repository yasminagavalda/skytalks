angular.module('skytalksApp')
    .controller('newTalkController', function ($scope, usersService) {
      usersService.getLanguages('userId', function(languages) {
      	$scope.languages = languages
      	// $scope.apply()
      })
        // .then(function (response) {
        //   $scope.user = response
        // })


        $scope.createNewTalk = function(newlanguage, newplace, newdate, $location) {
        	console.log(newlanguage, newplace, newdate)
        }
      	// $scope.apply()
      })
    
      