angular.module('skytalksApp')

    .factory('AuthService', function($http, StorageService, $rootScope) {

        const isLoggedIn = function () {
		    const token = StorageService.getToken()
		    console.log(token, 'hol')
		    if (!token) return false
		    return true
		}

		const setCredentials = function (token) {
	        const tokenPayload = jwtHelper.decodeToken(token)
	        $rootScope.loggedUser = tokenPayload.username
	    }

	    const logout = function () {
	        StorageService.removeToken()
	        delete $rootScope.loggedUser
	        delete $rootScope.id


	    }

	    return { isLoggedIn, setCredentials, logout }
	})