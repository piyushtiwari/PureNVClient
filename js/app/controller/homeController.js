/**
 * Created by piyusht on 14/06/15.
 */

app.controller('homeController', function ($scope, $http, $location, restuarantService, MenuService) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.restaurantsList =  function() {
        if ($("#search-area").val().trim() != "")
        $location.path("restaurants");
    }

$scope.showMenu = function(id) {
    MenuService.setRestaurantId(id);
    window.location.href = "../../assets/views/restaurants-menu-order.html";
}

  });

