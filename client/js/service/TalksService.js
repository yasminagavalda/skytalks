angular.module('skytalksApp')

    .factory('TalksService', function($http, UsersService) {

        var createTalk = function() {
            var url = 'api/newtalk'
            return $http.post(url, {id: UsersService.getUser().id}, newlanguage, place, date)
        }

        var getMyTalksConfirmed = function() {
            var url = 'api/talks-confirmed/' + UsersService.getUser().id
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getMyTalksWaitingPartner = function() {
            var url = 'api/talks-waiting-partner/' + UsersService.getUser().id
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getMyTalksWaitingResponse = function() {
            var url = 'api/talks-waiting-response/' + UsersService.getUser().id
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

        var unjoinTalk = function (talkId) {
            var url = 'api/unjoin/' + UsersService.getUser().id + '/talk/' + talkId
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
