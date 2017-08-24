angular.module('skytalksApp')

    .factory('usersService', function($http) {

        

        var getInfo = function(userId) {
            var url = 'user/' + userId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getLanguages = function(userId, callback) {
            var url = ''
            callback(users[0].languages)
            // $http.get(url)
            //     .then(function(response) {
            //         console.log(response)
            //         callback(response.data.languages)
            //     })
        }

        var getTalks = function(userId) {
            var url = 'talk/' + userId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        return {
            getInfo: getInfo,
            getLanguages: getLanguages,
            getTalks: getTalks
        }
    })