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

        return {
            createTalk:createTalk
        }
    })
