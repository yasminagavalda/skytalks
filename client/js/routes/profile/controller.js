angular.module('skytalksApp')

    .controller('usersController', function($window, $location, $scope, Upload, UsersService) {
        function loadUserProfile() {
            return UsersService.getInfo()
                .then(function(response) {
                    $scope.user = response
                    $scope.languages = response.languages
                })
        }

        loadUserProfile()

        $scope.updateUser = function (firstname, lastname, age, country, about, email, password) {
            UsersService.updateProfile(firstname, lastname, age, country, about, email, password)
                .then(function() {
                    loadUserProfile()
                        .then(function() {
                            console.log('updated')
                            $scope.show = true
                            $scope.showLanguage = false
                            $scope.removedLanguage = false
                        })
                })
        }

        $scope.addLanguage = function(newlanguage, newlevel) {
            UsersService.addNewLanguage(newlanguage, newlevel)
                .then(function(response) {
                    loadUserProfile()
                        .then(function() {
                            $scope.showLanguage = true
                            $scope.removedLanguage = false
                            $scope.show = false
                        })
                })
        }

        $scope.removeLanguage = function(language) {
            UsersService.removeLanguage(language)
                .then(function(response) {
                    loadUserProfile()
                        .then(function() {
                            $scope.removedLanguage = true
                            $scope.showLanguage = false
                            $scope.show = false
                        })
                })
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
                .success(({ imageLink }) => {
                    $scope.image = imageLink
                    UsersService.updateImage(imageLink)
                        .then(() => $window.location.reload())
                })
        }

    })