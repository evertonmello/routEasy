angular.module("desafio").factory("desafioAPI", function ($http) {
    var _delClient = function () {        
        return $http.delete("http://localhost:3000/deliveries/");        
    };

    var _getClients = function () {        
        return $http.get("http://localhost:3000/deliveries/");        
    };

    return {
        delCliente: _delClient,
        getClients: _getClients
        
    };
});