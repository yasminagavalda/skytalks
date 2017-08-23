angular.module('skytalksApp')

    .factory('usersService', function($http) {

        var users = [{id: "2548dd", username: "ygava", firstname: "Yasmina", lastname: "Gavaldà", age: "26", country: "Spain", email: "y.gava@gmail.com", languages: [{language: "English", level: "Native"}, {language: "Spanish", level: "Medium"}, {language: "Russian", level: "Advanced"}], about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]

        var talks = [{
            id: "2548dd",
            firstname_with: "Yasmina",
            language: "English",
            date: "Tuesday August 20",
            place: "Le Journal, Carrer de Francisco Giner 36, Barcelona"
        }, 
        {
            id: "2548dd",
            firstname_with: "Maria",
            language: "Spanish",
            date: "Monday August 25",
            place: "Le Journal, Carrer de Francisco Giner 36, Barcelona"
        },
        {
            id: "2548dd",
            firstname_with: "Paul",
            language: "French",
            date: "Wednesday August 26",
            place: "Le Journal, Carrer de Francisco Giner 36, Barcelona"
        }]

        var getInfo = function(userId) {
            // var url = ''
            return users[0]
            // return $http.get(url)
            //     .then(function(response) {
            //         console.log(users[userId])
            //         return users[userId]
            //     })
        }

        var getLanguages = function(userId, callback) {
            var url = ''
            callback(users[0].languages)
            // $http.get(url)
            //     .then(function(response) {
            //         console.log(response)
            //         callback(response.data.languages)
            //     })
        }

        var getTalks = function(userId) {
            return talks
            // var url = ''
            // return $http.get(url)
            //     .then(function(response) {
            //         console.log(response)
            //         return response.data.talks
            //     })
        }

        return {
            getInfo: getInfo,
            getLanguages: getLanguages,
            getTalks: getTalks
        }
    })