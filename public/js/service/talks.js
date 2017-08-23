angular.module('skytalksApp')

    .factory('talksService', function($http) {

        var getFeatured = function() {
            var url = ''
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getResults = function(language) {
            var url = ''
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getDetails = function(talkId) {
            var url = ''
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }


        return {
            getThree: getThree,
            getResults: getResults,
            getDetails:getDetails
        }
    })