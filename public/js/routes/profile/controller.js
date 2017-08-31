angular.module('skytalksApp')
    
    .controller('usersController', function ($cookies, $scope, usersService, $window) {

      var id = $cookies.get('id').split(':')[1]
      id = id.substr(1, id.length-2)

      if ($cookies.get('loggedIn') === 'true') {
          
        usersService.getInfo(id)
          .then(function (response) {
            $scope.user = response
            $scope.languages = response.languages
          })
      } else {
        $window.location.href = "/login"
      }

      

      

      

      $scope.addLanguage = function (newlanguage, newlevel) {
        usersService.addNewLanguage(id, newlanguage, newlevel)
      }

      $scope.removeLanguage = function (language) {
        usersService.removeLanguage(id, language)
      }


      $scope.type = "password"
      $scope.showPassword = function () {
        if ($scope.type === "password") {
          $scope.type = "text"
        } else {
          $scope.type = "password"
        }
      }

      $scope.saveChanges = function () {
        $scope.show = 'hey'
      }


    })
      