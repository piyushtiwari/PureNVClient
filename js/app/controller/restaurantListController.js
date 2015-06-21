/**
 * 
 */
app.controller('restaurantListController', function ($scope, $http, $location, restuarantService) {
    restuarantService.allLocations().then(function(data){
            $scope.restaurants = data.data;
              window.restaurants = data.data;
            initialize()
        })
        $scope.searchText = window.searchText;

        var map;
        var global_markers = [];

        function initialize() {
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(18.54, 73.910965);
            var myOptions = {
                zoom: 10,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
            addMarker();
        }

        function addMarker() {
            var markers = window.restaurants;
            var infowindow = new google.maps.InfoWindow({});
            var latLngs = []
            for (var i = 0; i < markers.length; i++) {
                // obtain the attribues of each marker
                var lat = parseFloat(markers[i].latitude);
                var lng = parseFloat(markers[i].longitude);

                var myLatlng = new google.maps.LatLng(lat, lng);
                latLngs[i] = myLatlng;
                var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h3 id="firstHeading" class="firstHeading">'+ markers[i].name +
                '<div id="bodyContent">'+
                '<p><p>'+
                '<p><p>'+
                '<p><a href="http://maps.google.com/maps?saddr=&daddr='+lat+','+lng+'" target="_blank">Get Direction</a></p>'
                '</div>'+
                '</div>';

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: "Coordinates: " + lat + " , " + lng + " | " + markers[i].name
                });
                var latlngbounds = new google.maps.LatLngBounds();
                latLngs.forEach(function(n){
                   latlngbounds.extend(n);
                });
                map.setCenter(latlngbounds.getCenter());
               // map.fitBounds(latlngbounds);

                marker['infowindow'] = contentString;

                global_markers[i] = marker;

                google.maps.event.addListener(global_markers[i], 'click', function() {
                    infowindow.setContent(this['infowindow']);
                    infowindow.open(map, this);
                });
            }
        }


})