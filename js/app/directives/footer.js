/**
 * Created by piyusht on 14/06/15.
 */

app.directive('footer', function(){
    return{
        restrict: 'A',
        replace: true,
        scope: {user:'='},
        templateUrl: 'views/footer.html'
    }
})