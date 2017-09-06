angular.module('skytalksApp')

    .factory('UsersService', function($http, $rootScope) {

        var getInfo = function() {
            var url = 'api/user/' + $rootScope.userId
            console.log($rootScope.userId)
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getLanguages = function() {
            var url = 'api/user/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    return response.data.languages
                })
        }

        var addNewLanguage = function(newlanguage, newlevel) {
            var url = '/api/user/' + $rootScope.userId + '/newlanguage/' + newlanguage + '/' + newlevel
            return $http.put(url)
                .then(function(response) {
                    window.location.reload()
                })
        }

        var removeLanguage = function(language) {
            var url = '/api/user/' + $rootScope.userId + '/remove/' + language
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
                })
        }

        var addNewImage = function(image) {
            var url = '/api/image/update/' + image
            return $http.put(url)
                .then(function(response) {
                    console.log('image uploaded')
                })
        }

        var getTalks = function() {
            var url = 'talk/' + $rootScope.userId
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
            addNewLanguage: addNewLanguage,
            removeLanguage: removeLanguage,
            updateProfile: updateProfile,
            addNewImage:addNewImage
        }
    })