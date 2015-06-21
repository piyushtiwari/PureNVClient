//var app = angular.module( "nonVegApp", ['ngAutocomplete', 'ngCsv', 'ngCsvImport']);

window.restaurants;
var app = angular.module('nonVegApp', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngAutocomplete'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/restaurants', {
                templateUrl: 'views/restaurants.html',
                controller: 'restaurantListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });