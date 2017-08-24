angular.module('skytalksApp')
    
    .controller('usersController', function ($scope, usersService) {

      usersService.getInfo('userId')
        .then(function (response) {
          $scope.user = response
          $scope.languages = response.languages

        })

      //$scope.languages = usersService.getLanguages('userId')
      

      $scope.addLanguage = function (newlanguage, newlevel) {
      	users[0].languages.push({language: newlanguage, level: newlevel})
      	console.log(users[0].languages)
      	$scope.user = users[0]

      }
    })
      