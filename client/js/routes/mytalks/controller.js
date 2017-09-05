angular.module('skytalksApp')
    .controller('talksController', function(jwtHelper, $window, $scope, $location, UsersService, TalksService, AuthService, StorageService, $rootScope) {


        if (!AuthService.isLoggedIn()) {
		      $location.path('/login')
		    }

        TalksService.getMyTalksConfirmed($rootScope.userId)
            .then(function(response) {
                $scope.talksconfirmed = response
            })

        TalksService.getMyTalksWaitingPartner($rootScope.userId)
            .then(function(response) {
                $scope.talksWaitingPartner = response
            })

        TalksService.getMyTalksWaitingResponse($rootScope.userId)
            .then(function(response) {
                $scope.talksWaitingResponse = response
            })


    })