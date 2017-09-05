angular.module('skytalksApp')

    .factory('TalksService', function($http, $rootScope) {

        var createTalk = function() {
            var url = 'api/newtalk'
            return $http.post(url)
                .then(function(response) {
                    console.log(response)
                    window.location.reload()
                })
        }

        var getMyTalksConfirmed = function() {
            var url = 'api/talks-confirmed/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getMyTalksWaitingPartner = function() {
            var url = 'api/talks-waiting-partner/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getMyTalksWaitingResponse = function() {
            var url = 'api/talks-waiting-response/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        return {
            createTalk:createTalk,
            getMyTalksConfirmed:getMyTalksConfirmed,
            getMyTalksWaitingPartner:getMyTalksWaitingPartner,
            getMyTalksWaitingResponse:getMyTalksWaitingResponse
        }
    })
