angular.module('skytalksApp')
    .controller('newTalkController', function($scope, $location, UsersService, TalksService) {

        var input = document.getElementById('autocomplete');
        var autocomplete = new google.maps.places.Autocomplete(input);

        UsersService.getLanguages()
            .then(function(languages) {
                $scope.languages = languages;
            });


        $scope.createTalk = function(newlanguage, place, date) {
            console.log(place + ' ' + $scope.city)
            TalksService.createTalk(newlanguage, place, date)
                .then(() => {
                    $location.path('/my-talks')
                })
        }
    })