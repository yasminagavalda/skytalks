angular.module('skytalksApp')
    .controller('newTalkController', function($scope, $location, UsersService, TalksService) {
        UsersService.getLanguages()
            .then(function(languages) {
                $scope.languages = languages;
            });


        $scope.createTalk = function(newlanguage, place, date) {
            TalksService.createTalk(newlanguage, place, date)
                .then(() => {
                    $location.path('/my-talks')
                })
        }
    })