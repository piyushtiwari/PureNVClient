/**
 * Created by piyusht on 14/06/15.
 */

app.directive('header', function(){
    return{
        restrict: 'A    ',
        replace: true,
        scope: {user:'='},
        isLoggedin: '=',
        templateUrl: 'views/header.html',
        controller: function($scope, $element, $location, $cookieStore, $rootScope){
            $scope.logout = function() {
                $cookieStore.remove("userInfo");
                $rootScope.isLoggedIn = false;
                $location.path("home");
                $scope.$apply()
            }
        }
    }
})