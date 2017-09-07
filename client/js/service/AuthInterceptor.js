angular.module('skytalksApp')
    .factory('AuthInterceptor', function() {
        return {
            request: function(config) {
                var token = sessionStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                };
                return config;
            }
        }
    });