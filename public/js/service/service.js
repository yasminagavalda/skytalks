angular.module('skytalksApp')

    .factory('infojobsFactory', function($http) {

        var getDetails = function(offerId) {
            var url = 'https://boiling-plains-16324.herokuapp.com/offer/' + offerId
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })

        }

        return {
            getDetails: getDetails
        }
    })