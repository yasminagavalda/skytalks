angular.module('skytalksApp')
    
    .controller('usersController', function (Upload, $location, AuthService, jwtHelper, $scope, $rootScope, UsersService, StorageService, $window) {



      function setCredentials (token) {
        const tokenPayload = jwtHelper.decodeToken(token)
        $rootScope.loggedUser = tokenPayload.username
        $rootScope.userId = tokenPayload.id
      }

      if ($location.absUrl().length > 50) {
        const token = $location.absUrl().split('=')[1].split('#')[0]
        StorageService.saveToken(token)
        setCredentials(token)
      }

      if (!AuthService.isLoggedIn()) {
          $window.location.href = '/login'
        }


      const token = StorageService.getToken()
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.userId = tokenPayload.id
        
      function loadUserProfile(callback) {
        UsersService.getInfo($rootScope.userId)
        .then(function (response) {
          $scope.user = response
          $scope.languages = response.languages
          if (callback)
            callback(response)
        })
      }

      loadUserProfile()

      $scope.addLanguage = function (newlanguage, newlevel) {
        UsersService.addNewLanguage(newlanguage, newlevel)
          .then(function(response) {
                    // window.location.reload()
                    loadUserProfile(function() {
                      $scope.showLanguage = true
                    })
                })
      }

      $scope.removeLanguage = function (language) {
        UsersService.removeLanguage(language)
      }

      $scope.showAlert = function () {
        $scope.show = true
      }

      $scope.fileSelected = (files) => {
        if (files && files.length) {
          $scope.file = files[0];
        }
      }

      $scope.uploadFile = function() {
        const url = '/upload'
        const file = $scope.file

        Upload.upload({ url, file })
          .success( ({imageLink}) => {
            $scope.image = imageLink
            UsersService.updateImage(imageLink)
              .then(() => window.location.reload())
          })


      }

  })

      