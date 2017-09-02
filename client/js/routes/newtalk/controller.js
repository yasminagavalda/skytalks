angular.module('skytalksApp')
    .controller('newTalkController', function ($cookies, $scope, usersService, talksService, $location) {
      
      var id = $cookies.get('id').split(':')[1]
      id = id.substr(1, id.length-2)

      if ($cookies.get('loggedIn') === 'true') {
          
        usersService.getLanguages(id)
        .then(function(languages) {
          $scope.languages = languages
          $scope.id = id
        })
      } else {
        $window.location.href = "/login"
      }
      
      
      $scope.createTalk = function() {
        talksService.createTalk()	
      }
    })
    
      