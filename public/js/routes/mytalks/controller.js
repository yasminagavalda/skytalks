angular.module('skytalksApp')
    .controller('talksController', function ($scope, usersService) {
      

      usersService.getTalks('userId')
        .then(function (response) {
          $scope.talks = response
        })
    })
      