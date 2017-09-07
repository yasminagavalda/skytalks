angular.module('skytalksApp', ['ngRoute', 'angular-jwt', 'ngFileUpload'])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor')
    })
    .config(function($routeProvider) {
        $routeProvider
            .otherwise('/login')
    })
    .run(function($rootScope, $window, $location, UsersService) {
        if ($location.absUrl().indexOf('?token=') !== -1) {
            const token = $location.absUrl().split('=')[1].split('#')[0]

            if (token)
                UsersService.setToken(token)
        }

        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            //if (next && next.secure) {
                var atUser = $window.location.href.indexOf('user') > -1;
                if (!UsersService.isLoggedIn() && atUser) {
                    $window.location.href ='/login'
                }
            //}
        })
    })