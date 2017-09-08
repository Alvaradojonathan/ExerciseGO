var map;
var infowindow;

function initMap() {
    var pyrmont = { lat: 41.4993, lng: -81.6944 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 14
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 5000,
        type: ['gym']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


//display legs div
function myFunction() {

    var x = document.getElementById('divContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    x = document.getElementById('legs');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//this function legs div
function closeWindow() {
    var x = document.getElementById('legs');
    if (x.style.display === 'none') {
        x.style.display = "display";
    }
    else {
        x.style.display = 'none';
    }
    x = document.getElementById('divContainer');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

//display arms div
function myFunctionOne() {

    var x = document.getElementById('divContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    x = document.getElementById('arms');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//close arms div
function closeWindowOne() {

    var x = document.getElementById('arms');
    if (x.style.display === 'none') {
        x.style.display = "display";
    }
    else {
        x.style.display = 'none';
    }
    x = document.getElementById('divContainer');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//display back div
function myFunctionTwo() {

    var x = document.getElementById('divContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    x = document.getElementById('back');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//close back div
function closeWindowTwo() {

    var x = document.getElementById('back');
    if (x.style.display === 'none') {
        x.style.display = "display";
    }
    else {
        x.style.display = 'none';
    }
    x = document.getElementById('divContainer');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//display chest div
function myFunctionThree() {

    var x = document.getElementById('divContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    x = document.getElementById('chest');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//close back div
function closeWindowThree() {

    var x = document.getElementById('chest');
    if (x.style.display === 'none') {
        x.style.display = "display";
    }
    else {
        x.style.display = 'none';
    }
    x = document.getElementById('divContainer');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//display abs div
function myFunctionFour() {

    var x = document.getElementById('divContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    x = document.getElementById('abs');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//close abs div
function closeWindowFour() {

    var x = document.getElementById('abs');
    if (x.style.display === 'none') {
        x.style.display = "display";
    }
    else {
        x.style.display = 'none';
    }
    x = document.getElementById('divContainer');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//display cardio div
function myFunctionFive() {

    var x = document.getElementById('divContainer');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    x = document.getElementById('cardio');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
//close cardio div
function closeWindowFive() {

    var x = document.getElementById('cardio');
    if (x.style.display === 'none') {
        x.style.display = "display";
    }
    else {
        x.style.display = 'none';
    }
    x = document.getElementById('divContainer');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}
