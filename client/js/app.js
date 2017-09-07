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
            console.log('route has changed')
            //if (next && next.secure) {
                console.log('this route is secured!!')
                if (!UsersService.isLoggedIn() && $window.location.href.indexOf('login') < 0) {
                    $window.location.href ='/login'
                }
            //}
        })
    })