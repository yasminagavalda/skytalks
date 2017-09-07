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

        $scope.addLanguage = function(newlanguage, newlevel) {
            UsersService.addNewLanguage(newlanguage, newlevel)
                .then(function(response) {
                    loadUserProfile()
                        .then(function() {
                            $scope.showLanguage = true
                        })
                })
        }

        $scope.removeLanguage = function(language) {
            UsersService.removeLanguage(language)
                .then(function(response) {
                    loadUserProfile()
                        .then(function() {
                            $scope.removedLanguage = true
                        })
                })
        }

        $scope.showAlert = function() {
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
                .success(({ imageLink }) => {
                    $scope.image = imageLink
                    UsersService.updateImage(imageLink)
                        .then(() => window.location.reload())
                })
        }

    })