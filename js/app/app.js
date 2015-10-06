//var app = angular.module( "nonVegApp", ['ngAutocomplete', 'ngCsv', 'ngCsvImport']);

window.restaurants;
var app = angular.module('nonVegApp', [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngAutocomplete',
        'ngCookies',
        'ui.router'
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
            .when('/sign-in', {
                templateUrl: 'views/sign-in.html',
                controller: 'loginController'
            })
            .when('/sign-up', {
                templateUrl: 'views/sign-up.html',
                controller: 'signupController'
            })
            .when('/restaurants-menu-order', {
                templateUrl: 'views/restaurants-menu-order.html',
                controller: 'menuController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
.run(function ($rootScope, $cookieStore, $state) {
	var user = $cookieStore.get('userInfo');
	if (user) {
		$rootScope.isLoggedIn = true;
		$rootScope.username = user.name.split(" ")[0];
	} else {
		$rootScope.isLoggedIn = false;
	}
    // Check login session
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        var userInfo = $cookieStore.get('userInfo');
        if (!userInfo) {
            // user not logged in | redirect to login
            if (next.name !== "welcome") {
                // not going to #welcome, we should redirect now
                event.preventDefault();
                $state.go('welcome');
            }
        } else if (next.name === "welcome") {
            event.preventDefault();
            $state.go('dashboard');
        }
    });
});
