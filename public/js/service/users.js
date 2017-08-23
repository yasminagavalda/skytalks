angular.module('skytalksApp')

    .factory('usersService', function($http) {

        var getInfo = function(userId) {
            var url = ''
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getLanguages = function(userId) {
            var url = ''
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data.languages
                })
        }

        var getTalks = function(userId) {
            var url = ''
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data.talks
                })
        }

        return {
            getInfo: getInfo,
            getLanguages: getLanguages,
            getTalks: getTalks
        }
    })