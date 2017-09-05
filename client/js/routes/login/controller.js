angular.module('skytalksApp')
    .controller('loginController', function($window, AuthService, $location) {
    this.login = (e) => {
      e.preventDefault()
      AuthService.login(this.username, this.password)
        .then(success => {
          console.log(success)
          if (success) {
            $location.path('/')
            $window.location.reload()
          } else {
            $scope.wronglogin = true
          }
        })
    }
  })