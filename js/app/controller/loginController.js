/**
 * @author Niks
 */

app.controller('loginController', function ($scope, $state, $cookieStore, $rootScope, $location) {
    
    /**
     * SOCIAL LOGIN
     * Facebook and Google
     */
    // FB Login
    $scope.fbLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                getUserInfo();
                $rootScope.isLoggedIn = true;
            } else {
                console.log('User cancelled login or did not fully authorize.');
                $rootScope.isLoggedIn = false;
            }
        }, {scope: 'email'});
 
        function getUserInfo() {
            // get basic info
            FB.api('/me', function (response) {
                console.log('Facebook Login RESPONSE: ' + angular.toJson(response));
                // get profile picture
                FB.api('/me/picture?type=normal', function (picResponse) {
                    console.log('Facebook Login RESPONSE: ' + picResponse.data.url);
                    response.imageUrl = picResponse.data.url;
                    // store data to DB - Call to API
                    // Todo
                    // After posting user data to server successfully store user data locally
                    var user = {};
                    user.name = response.name;
                    $rootScope.username = user.name.split(" ")[0];
                    user.email = response.email;
                    if(response.gender) {
                        response.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    user.profilePic = picResponse.data.url;
                    $cookieStore.put('userInfo', user);
                    $location.path("home");
                    $scope.$apply()
                    //$state.go('home');
 
                });
            });
        }
    };
    // END FB Login
 
    // Google Plus Login
    $scope.gplusLogin = function () {
        var myParams = {
            // Replace client id with yours
            'clientid': '698865073305-59mretuks50d4joh8gego3ukb3qlis29.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': loginCallback,
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(myParams);
 
        function loginCallback(result) {
            if (result['status']['signed_in']) {
                var request = gapi.client.plus.people.get({'userId': 'me'});
                request.execute(function (resp) {
                    $rootScope.isLoggedIn = true;
                    console.log('Google+ Login RESPONSE: ' + angular.toJson(resp));
                    var userEmail;
                    if (resp['emails']) {
                        for (var i = 0; i < resp['emails'].length; i++) {
                            if (resp['emails'][i]['type'] == 'account') {
                                userEmail = resp['emails'][i]['value'];
                            }
                        }
                    }
                    // store data to DB
                    var user = {};
                    user.name = resp.displayName;
                    $rootScope.username = user.name;
                    user.email = userEmail;
                    if(resp.gender) {
                        resp.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    user.profilePic = resp.image.url;
                    $cookieStore.put('userInfo', user);
                    $location.path("home");
                    $scope.$apply()
                });
            }
        }
    };
    // END Google Plus Login
 
})
