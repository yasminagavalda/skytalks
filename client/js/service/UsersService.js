angular.module('skytalksApp')
    .factory('UsersService', function($http, jwtHelper) {
        var user = {};

        function setToken(token) {
            sessionStorage.setItem('token', token);
            var tokenPayload = jwtHelper.decodeToken(token);
            user.username = tokenPayload.username;
            user.id = tokenPayload.id;
        }

        function getToken() {
            return sessionStorage.getItem('token');
        }

        function isLoggedIn() {
            return !!getToken();
        }

        function getUser() {
            return user;
        }

        function logout (username, password) {
          sessionStorage.removeItem('token')

          return $http.get('/logout')
        }

        function getData() {
            var url = 'api/user/' + user.id;
            return $http.get(url)
                .then(function(response) {
                    if (!response.data.firstname) return false
                    return true
                })
        }


        var getInfo = function() {
            var url = 'api/user/' + user.id;
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getLanguages = function() {
            var url = 'api/user/' + user.id;
            return $http.get(url)
                .then(function(response) {
                    return response.data.languages
                })
        }

        var addNewLanguage = function(newlanguage, newlevel) {
            var url = '/api/user/' + user.id + '/newlanguage/' + newlanguage + '/' + newlevel
            return $http.put(url)
        }

        var removeLanguage = function(language) {
            var url = '/api/user/' + user.id + '/remove/' + language
            return $http.put(url)
        }

        var updateProfile = function() {
            var url = '/api/user/update'
            return $http.put(url)
                .then(function(response) {})
        }

        var updateImage = function(image) {
            var url = '/api/user/' + user.id + '/update/image'
            image = image.toString()
            return $http.put(url, { image })
                .then(function(response) {
                    window.location.reload()
                })
        }

        var getTalks = function() {
            var url = 'talk/' + user.id;
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        return {
            getUser,
            setToken,
            getToken,
            isLoggedIn,
            logout,
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