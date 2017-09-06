angular.module('skytalksApp')
    .controller('talksController', function ($window, $scope, $location, UsersService, TalksService, AuthService, StorageService, $rootScope, jwtHelper) {
      function setCredentials (token) {
        const tokenPayload = jwtHelper.decodeToken(token)
        $rootScope.loggedUser = tokenPayload.username
        $rootScope.userId = tokenPayload.id
      }

      console.log($rootScope.userId)

      if ($location.absUrl().length > 30) {
        const token = $location.absUrl().split('=')[1].split('#')[0]
        StorageService.saveToken(token)
        setCredentials(token)
      }

      if (StorageService.getToken()) {
        TalksService.getMyTalksConfirmed($rootScope.userId)
                .then(function (response) {
                  $scope.talksconfirmed = response
                })

        TalksService.getMyTalksWaitingPartner($rootScope.userId)
                .then(function (response) {
                  $scope.talksWaitingPartner = response
                })

        TalksService.getMyTalksWaitingResponse($rootScope.userId)
                .then(function (response) {
                  $scope.talksWaitingResponse = response
                })
      } else {
        $window.location.href = '/login'
      }
    })
