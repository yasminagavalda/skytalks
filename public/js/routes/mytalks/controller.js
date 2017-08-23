angular.module('skytalksApp')
    .controller('talksController', function ($scope, usersService) {
      

      $scope.talks = usersService.getTalks('userId')
      console.log($scope.talks)
        // .then(function (response) {
        //   $scope.user = response
        // })
    })
      