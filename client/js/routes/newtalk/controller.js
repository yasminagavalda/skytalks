angular.module('skytalksApp')
    .controller('newTalkController', function($scope, UsersService, TalksService) {
        UsersService.getLanguages()
            .then(function(languages) {
                $scope.languages = languages;
            });


        $scope.createTalk = function(e) {
            e.preventDefault();
            TalksService.createTalk(newlanguage, place, date);
        }
    })