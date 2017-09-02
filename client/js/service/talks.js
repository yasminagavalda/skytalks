angular.module('skytalksApp')

    .factory('talksService', function($http) {

        var createTalk = function() {
            var url = 'api/newtalk'
            return $http.post(url)
                .then(function(response) {
                    console.log(response)
                    window.location.reload()
                })
        }

        var getMyTalksConfirmed = function(id) {
            var url = 'api/talks-confirmed/' + id
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getMyTalksWaitingPartner = function(id) {
            var url = 'api/talks-waiting-partner/' + id
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getMyTalksWaitingResponse = function(id) {
            var url = 'api/talks-waiting-response/' + id
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
