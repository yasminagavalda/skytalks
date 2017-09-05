angular.module('skytalksApp')
    .controller('newTalkController', function (AuthService, jwtHelper, $scope, $rootScope, UsersService, StorageService, TalksService, $location) {

      if (!AuthService.isLoggedIn()) {
          $location.path('/login')
        }

        const token =StorageService.getToken()
        const tokenPayload = jwtHelper.decodeToken(token)
        $rootScope.userId = tokenPayload.id
          
        UsersService.getLanguages($rootScope.userId)
        .then(function(languages) {
          $scope.languages = languages
          $scope.id = $rootScope.userId
        })

      
      $scope.createTalk = function() {
        TalksService.createTalk()	
      }
    })
    
      