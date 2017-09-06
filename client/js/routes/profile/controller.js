angular.module('skytalksApp')
    
    .controller('usersController', function (AuthService, jwtHelper, $scope, $rootScope, UsersService, StorageService, $window) {

      if (!AuthService.isLoggedIn()) {
          $location.path('/login')
        }

        
            

        const token = StorageService.getToken()
        const tokenPayload = jwtHelper.decodeToken(token)
        $rootScope.userId = tokenPayload.id
          
        UsersService.getInfo($rootScope.userId)
          .then(function (response) {
            $scope.user = response
            $scope.languages = response.languages
          })

      // $scope.uploadImage = function (avatar) {
      //   const image = $base64.encode(avatar)
      //   console.log(image)
      //   UsersService.addNewImage(image)
      // }

      $scope.addLanguage = function (newlanguage, newlevel) {
        UsersService.addNewLanguage(newlanguage, newlevel)
        $scope.showLanguage = true
      }

      $scope.removeLanguage = function (language) {
        UsersService.removeLanguage(language)
      }

      $scope.showAlert = function () {
        $scope.show = true
      }


    })
      