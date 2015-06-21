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

  app.directive('selectWatcher', function ($timeout) {
        return {
            link: function (scope, element, attr) {
                var last = attr.last;
                if (last === "true") {
                    $timeout(function () {
                        $(element).parent().selectpicker('val', 'any');
                        $(element).parent().selectpicker('refresh');
                    });
                }
            }
        };
});
