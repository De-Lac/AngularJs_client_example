 // create the module and name it scotchApp
var pwApp = angular.module('pwApp', ['ngRoute']);


    // configure our routes
    pwApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'html/home/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'html/about/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'html/contact/contact.html',
                controller  : 'contactController'
            });
    });
