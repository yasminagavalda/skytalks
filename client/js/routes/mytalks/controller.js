angular.module('skytalksApp')
    .controller('talksController', function ($window, $scope, $location, TalksService) {
      TalksService.getMyTalksConfirmed()
        .then(function (response) {
          $scope.talksconfirmed = response
        })

      TalksService.getMyTalksWaitingPartner()
        .then(function (response) {
          $scope.talksWaitingPartner = response
        })

      TalksService.getMyTalksWaitingResponse()
        .then(function (response) {
          $scope.talksWaitingResponse = response
        })

      $scope.choosePartner = function(partnerId, talkId) {
        TalksService.joinedPartner(partnerId, talkId)
      }

      $scope.cancelTalk = function(talkId) {
        TalksService.cancelTalk(talkId)
      }

      $scope.unjoin = function(talkId) {
        TalksService.unjoinTalk(talkId)
      }

    })
