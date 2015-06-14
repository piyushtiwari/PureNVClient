/**
 * Created by piyusht on 14/06/15.
 */

app.controller('homeController', function ($scope, $http, restuarantService) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.restaurantsList = function(){
        alert('Called RestaurantList funtion from home controller  '+ JSON.stringify( restuarantService.getRestuarants()) );
    }


    $scope.restaurantsSuggestions = ['EatSome','Makrana','FoodCourt']
});
