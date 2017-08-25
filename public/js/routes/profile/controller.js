angular.module('skytalksApp')
    
    .controller('usersController', function ($scope, usersService) {

      usersService.getInfo('userId')
        .then(function (response) {
          $scope.user = response
          $scope.languages = response.languages
          console.log($scope.languages)

        })

      //$scope.languages = usersService.getLanguages('userId')
      

      $scope.addLanguage = function (newlanguage, newlevel) {
      	$scope.languages.push({language: newlanguage, level: newlevel})
        $scope.newlanguage = ''
        $scope.newlevel = ''
      }


      $scope.type = "password"
      $scope.showPassword = function () {
        if ($scope.type === "password") {
          $scope.type = "text"
        } else {
          $scope.type = "password"
        }
      }
    })
      