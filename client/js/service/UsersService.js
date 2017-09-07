angular.module('skytalksApp')

    .factory('UsersService', function($http, $rootScope) {


        function getData() {
            var url = 'api/user/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    if (!response.data.firstname) return false
                    return true
                })
        }


        var getInfo = function() {
            var url = 'api/user/' + $rootScope.userId
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
        }

        var removeLanguage = function(language) {
            var url = '/api/user/' + $rootScope.userId + '/remove/' + language
            return $http.put(url)
                .then(function(response) {
                    window.location.reload()
                })
        }

        var updateProfile = function() {
            var url = '/api/user/update'
            return $http.put(url)
                .then(function(response) {
                })
        }

        var updateImage = function(image) {
            var url = '/api/user/' + $rootScope.userId + '/update/image'
            image = image.toString()            
            return $http.put(url, {image})
                .then(function(response) {
                    window.location.reload()
                })
        }

        var getTalks = function() {
            var url = 'talk/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        return {
            getInfo,
            getLanguages,
            getTalks,
            addNewLanguage,
            removeLanguage,
            updateProfile,
            getData,
            updateImage
        }
    })