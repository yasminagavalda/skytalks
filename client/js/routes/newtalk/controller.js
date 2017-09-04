angular.module('skytalksApp')
    .controller('newTalkController', function ($scope, $rootScope, UsersService, StorageService, TalksService, $location) {

      if (StorageService.getToken()) {

        const tokenPayload = jwt_decode(StorageService.getToken());
        $rootScope.userId = tokenPayload.id
          
        UsersService.getLanguages($rootScope.userId)
        .then(function(languages) {
          $scope.languages = languages
          $scope.id = id
        })
      } else {
        $window.location.href = "/login"
      }
      
      
      $scope.createTalk = function() {
        TalksService.createTalk()	
      }
    })
    
      