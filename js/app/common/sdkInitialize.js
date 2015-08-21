            // Facebbok OAuth init
            window.fbAsyncInit = function () {
                FB.init({
                    appId: '1878297255729085', // Replace the App ID with yours
                    status: true, // check login status
                    cookie: true, // enable cookies to allow the server to access the session
                    xfbml: true  // parse XFBML
                });
            };
 
            // Load the SDK asynchronously
            (function (d) {
                var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";
                ref.parentNode.insertBefore(js, ref);
            }(document));
            // Facebbok OAuth init - END
            
            // Google OAuth Init
            (function () {
                var po = document.createElement('script');
                po.type = 'text/javascript';
                po.async = true;
                po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(po, s);
            })();
 
            function onLoadCallback() {
                // Replace the API key with yours
                gapi.client.setApiKey('jKyUX0WH8h8NypEcfK6bfpx9');
                gapi.client.load('plus', 'v1', function () {
                });
            }
            // Google Oauth Init - END
