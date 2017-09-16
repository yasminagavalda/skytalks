angular.module('skytalksApp')
    .factory('UsersService', function($http, jwtHelper) {
        var user;

        function setToken(token) {
            sessionStorage.setItem('token', token);
            var tokenPayload = jwtHelper.decodeToken(token);
            sessionStorage.setItem('username', tokenPayload.username);
            sessionStorage.setItem('userId', tokenPayload.id);
        }

        function getToken() {
            return sessionStorage.getItem('token');
        }

        function isLoggedIn() {
            return !!getToken();
        }

        function getUser() {
            if (!user) {
                user = {
                    username: sessionStorage.getItem('username'),
                    id: sessionStorage.getItem('userId')
                }
            }
            return user;
        }

        function logout (username, password) {
          sessionStorage.removeItem('token')

          return $http.get('/logout')
        }

        var getInfo = function() {
            var url = 'api/user/' + getUser().id;
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }

        var getLanguages = function() {
            var url = 'api/user/' + getUser().id;
            return $http.get(url)
                .then(function(response) {
                    return response.data.languages
                })
        }

        var addNewLanguage = function(newlanguage, newlevel) {
            var url = '/api/user/' + getUser().id + '/newlanguage/' + newlanguage + '/' + newlevel
            return $http.put(url)
        }

        var removeLanguage = function(language) {
            var url = '/api/user/' + getUser().id + '/remove/' + language
            return $http.put(url)
        }

        var updateImage = function(image) {
            var url = '/api/user/' + getUser().id + '/update/image'
            image = image.toString()
            return $http.put(url, { image })
        }

        var getTalks = function() {
            var url = 'talk/' + getUser().id;
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
            // updateProfile,
            updateImage
        }
    })