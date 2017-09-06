angular.module('skytalksApp')

    .factory('TalksService', function($http, $rootScope) {

        var createTalk = function() {
            var url = 'api/newtalk'
            return $http.post(url)
                .then(function(response) {
                    window.location.reload()
                })
        }

        var getMyTalksConfirmed = function() {
            var url = 'api/talks-confirmed/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getMyTalksWaitingPartner = function() {
            var url = 'api/talks-waiting-partner/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getMyTalksWaitingResponse = function() {
            var url = 'api/talks-waiting-response/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var joinedPartner = function (partnerId, talkId) {
            var url = 'api/talk/' + talkId + '/partner/' + partnerId
            console.log('service')
            return $http.put(url)
                .then(function() {
                    window.location.reload()
                })
        }

        var cancelTalk = function (talkId) {
            var url = 'api/cancel/talk/' + talkId
            console.log('service')
            return $http.delete(url)
                .then(function() {
                    window.location.reload()
                })
        }

        var unjoinTalk = function (talkId, userId) {
            var url = 'api/unjoin/' + userId + '/talk/' + talkId
            console.log('service')
            return $http.put(url)
                .then(function() {
                    window.location.reload()
                })
        }

        return {
            createTalk,
            getMyTalksConfirmed,
            getMyTalksWaitingPartner,
            getMyTalksWaitingResponse,
            joinedPartner,
            cancelTalk,
            unjoinTalk
        }
    })
