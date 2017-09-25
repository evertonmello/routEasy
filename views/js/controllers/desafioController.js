angular.module("desafio").controller("desafioCtrl", function ($scope, $http, desafioAPI) {
    var geo = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var key = "&key=AIzaSyCyQFMKJb00p86hSOKmUGxACyBPf39YVKM";
    var mymap = L.map('mapid').setView([-23.6442973, -46.5239157], 14);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mymap);
    L.marker([-23.6442973, -46.5239157]).addTo(mymap).bindPopup(nome + " " + peso);

    $scope.lat = "Latitude";
    $scope.long = "Longitude";

    $scope.addCliente = function () {
        var url = geo + end.split(" ").join("+") + key;  
        var data = $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=RUA+PACAEMBU&key=AIzaSyCyQFMKJb00p86hSOKmUGxACyBPf39YVKM");
        
        end = $scope.end;
        peso = $scope.peso;
        nome = $scope.nome;        
        
        data.then(function (result) {             
            $scope.long = result.data.results[0].geometry.location.lng;
            $scope.lat = result.data.results[0].geometry.location.lat;
        });
    }
});	