/**
 * 
 */
app.factory("MenuService",['$http', function($http) {
    var restaurantId = null;

    return {
        getMenu: function(id) {
            return $http.get("http://private-5dbfc-purenonveg.apiary-mock.com/restuarant/"+id+"/menu");
        },
        getRestaurantId: function () {
            return restaurantId;
        },
        setRestaurantId: function(value) {
            restaurantId = value;
        },
        getRestaurant: function(id) {
            return $http.get("http://private-5dbfc-purenonveg.apiary-mock.com/restuarant/id");
        }
    }
}])