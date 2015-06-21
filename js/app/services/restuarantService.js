/**
 * 
 */

app.factory("restuarantService",['$http', function($http) {
  var searchText;

  return {
    allLocations: function() {
      return  $http.get("http://private-5dbfc-purenonveg.apiary-mock.com/search?type=kk&keyword=banr&long=10&lat=22&pin=411014");
    },
    getSearchText: function () {
        return searchText;
    },
    setSearchText: function(value) {
        searchText = value;
    },
  };
}]);