//var app = angular.module( "nonVegApp", ['ngAutocomplete', 'ngCsv', 'ngCsvImport']);


var app = angular.module('nonVegApp', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
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
            .otherwise({
                redirectTo: '/'
            });
    });