angular.module('skytalksApp')
    .controller('talksController', function ($window, $scope, $location, UsersService, TalksService, AuthService, StorageService, $rootScope, jwtHelper) {
      function setCredentials (token) {
        const tokenPayload = jwtHelper.decodeToken(token)
        $rootScope.loggedUser = tokenPayload.username
        $rootScope.userId = tokenPayload.id
      }

      if ($location.absUrl().length > 30) {
        const token = $location.absUrl().split('=')[1].split('#')[0]
        StorageService.saveToken(token)
        setCredentials(token)
      }

      if (!AuthService.isLoggedIn()) {
          $window.location.href = '/login'
      }


      const token =StorageService.getToken()
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.userId = tokenPayload.id

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

    })
