angular.module('skytalksApp')
    
    .controller('usersController', function ($scope, usersService) {
      var users = [{id: "2548dd", username: "ygava", firstname: "Yasmina", lastname: "Gavaldà", age: "26", country: "Spain", email: "y.gava@gmail.com", languages: [{language: "English", level: "Native"}, {language: "Spanish", level: "Medium"}, {language: "Russian", level: "Advanced"}], about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]

      //$scope.user = users[Service.getInfo('userId')]
      $scope.user = users[0]
        // .then(function (response) {
        //   $scope.user = response
        // })

      //$scope.languages = usersService.getLanguages('userId')
      $scope.languages = users[0].languages


      $scope.addLanguage = function (newlanguage, newlevel) {
      	users[0].languages.push({language: newlanguage, level: newlevel})
      	console.log(users[0].languages)
      	$scope.user = users[0]

      }
    })
      