angular.module('skytalksApp')
    
    .controller('usersController', function ($scope, usersService, $window) {

      usersService.getInfo('Paul')
        .then(function (response) {
          $scope.user = response[0]
          $scope.languages = response[0].languages
        })

      

      $scope.addLanguage = function (id, newlanguage, newlevel) {
        usersService.addNewLanguage(id, newlanguage, newlevel)
          .then(function (response) {
            console.log(response[0].languages)

          	//$scope.languages = response[0].languages
           //  $scope.newlanguage = ''
           //  $scope.newlevel = ''
          })
      }

      $scope.removeLanguage = function (id, language) {
        usersService.removeLanguage(id, language)
          .then(function(response) {
            console.log(response[0].languages)
          })
      }


      $scope.type = "password"
      $scope.showPassword = function () {
        if ($scope.type === "password") {
          $scope.type = "text"
        } else {
          $scope.type = "password"
        }
      }

      // $scope.updateProfile = function(arguments) {
      //   console.log(arguments)
      //   usersService.updateProfile(arguments)
      //     .then(function(response) {
      //       console.log(response)
      //     })
      // }


    })
      