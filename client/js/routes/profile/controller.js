angular.module('skytalksApp')
    
    .controller('usersController', function ($scope, $rootScope, UsersService, StorageService, $window) {
      
      if (StorageService.getToken()) {

        const tokenPayload = jwt_decode(StorageService.getToken());
        $rootScope.userId = tokenPayload.id
          
        UsersService.getInfo($rootScope.userId)
          .then(function (response) {
            $scope.user = response
            $scope.languages = response.languages
          })
      } else {
        $window.location.href = "/login"
      }

      $scope.addLanguage = function (newlanguage, newlevel) {
        UsersService.addNewLanguage(newlanguage, newlevel)
      }

      $scope.removeLanguage = function (language) {
        UsersService.removeLanguage(language)
      }

      $scope.showAlert = function () {
        $scope.show = true
      }


    })
      