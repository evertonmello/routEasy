angular.module("desafio").controller("desafioCtrl", function ($scope, $http, desafioAPI) {
    var geo = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var key = "&key=AIzaSyCyQFMKJb00p86hSOKmUGxACyBPf39YVKM";
    
    $scope.lat = "Latitude";
    $scope.long = "Longitude";
    var mymap = L.map('mapid').setView([-23.5506187, -46.6766643], 14);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mymap);
    L.marker([-23.5506187, -46.6766643]).addTo(mymap).bindPopup($scope.nome + " " + $scope.peso);

    $scope.buscar = function () {
        var url = geo + $scope.end.split(" ").join("+") + key;
        var data = $http.get(url);

        data.then(function (result) {
            var obj = result.data.results[0];
            mymap.setView([obj.geometry.location.lat, obj.geometry.location.lng], 14);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mymap);
            L.marker([obj.geometry.location.lat, obj.geometry.location.lng]).addTo(mymap).bindPopup($scope.nome + " " + $scope.peso);

            $scope.cliente = {
                nome: $scope.nome,
                peso: $scope.peso,
                endereco: {
                    Número: obj.address_components[0].long_name,
                    Logradouro: obj.address_components[1].long_name,
                    Bairro: obj.address_components[2].long_name,
                    Complemento: obj.address_components[6].long_name,
                    Cidade: obj.address_components[3].long_name,
                    Estado: obj.address_components[4].long_name,
                    País: obj.address_components[5].long_name,
                    Geolocalização: {
                        Latitude: obj.geometry.location.lat,
                        Longitude: obj.geometry.location.lng
                    }
                }
            };
            $scope.long = obj.geometry.location.lng;
            $scope.lat = obj.geometry.location.lat;
          
        });
    };
    $scope.save = function(){
        $http.post('http://localhost:3000/deliveries/',  $scope.cliente).then(alert("cliente cadastrado " ));
    };
    
    $scope.removeClient = function () {
        desafioAPI.delCliente().then(alert("clientes excluídos"));
        $scope.long = "Longitude";
        $scope.lat = "Latitude";
        $scope.nome = "";
        $scope.peso = "";
        $scope.end = "";
    };
});	