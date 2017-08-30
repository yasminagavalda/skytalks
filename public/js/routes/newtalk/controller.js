angular.module('skytalksApp')
    .controller('newTalkController', function ($cookies, $scope, usersService, $location) {
      
      var id = $cookies.get('id').split(':')[1]
      id = id.substr(1, id.length-2)

      
      usersService.getLanguages(id)
        .then(function(languages) {
          $scope.languages = languages
        })      
      
      


      $scope.createNewTalk = function(newlanguage, newplace, newdate) {
        	console.log(newlanguage, newplace, newdate)
          $location.path('/')
      }
      	// $scope.apply()
    })
    
      