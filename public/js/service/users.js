angular.module('skytalksApp')

    .factory('usersService', function($http) {

        var getInfo = function(firstname) {
            var url = 'api/user/' + firstname
            return $http.get(url)
                .then(function(response) {
                    console.log(response)
                    return response.data
                })
        }

        var getLanguages = function(userId, callback) {
            var url = 'user/' + userId
            $http.get(url)
                .then(function(response) {
                    console.log(response)
                    callback(response.data.languages)
                })
        }

        var addNewLanguage = function(id, newlanguage, newlevel) {
            var url = '/api/user/' + id + '/newlanguage/' + newlanguage + '/' + newlevel
            return $http.put(url)
                .then(function(response) {
                    window.location.reload()
                })
        }

        var removeLanguage = function(id, language) {
            var url = '/api/user/' + id + '/remove/' + language
            return $http.put(url)
                .then(function(response) {
                    console.log('ok')
                    window.location.reload()
                })
        }

        var updateProfile = function() {
            var url = '/api/user/update'
            return $http.put(url)
                .then(function(response) {
                    console.log('ok')
                    window.location.reload()
                })
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
            getTalks: getTalks,
            addNewLanguage:addNewLanguage,
            removeLanguage:removeLanguage,
            updateProfile:updateProfile
        }
    })