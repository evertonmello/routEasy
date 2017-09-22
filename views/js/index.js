
var geo = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var key = "&key=AIzaSyCyQFMKJb00p86hSOKmUGxACyBPf39YVKM";

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={sk.eyJ1IjoiZXZlcnRvbm1lbGxvIiwiYSI6ImNqN3doN2M1bzU1cXYyd3BrYzRrZ2licWkifQ.YP2YDbFYFvZJ0Ub5B4YRBg}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'evertonmello.streets',
    accessToken: 'sk.eyJ1IjoiZXZlcnRvbm1lbGxvIiwiYSI6ImNqN3doN2M1bzU1cXYyd3BrYzRrZ2licWkifQ.YP2YDbFYFvZJ0Ub5B4YRBg'
}).addTo(mymap);

function findAdress(){
    var end = document.getElementById("end").value;    
    var result = geo + end.split(" ").join("+") + key;
    alert(result);
}