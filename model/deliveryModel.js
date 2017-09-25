var mongoose = require('mongoose');

var DeliverySchema = mongoose.Schema({
    nome: String,
    peso: Number,
    endereco :{
        Logradouro : String,
        Número : Number,
        Bairro: String,
        Complemento: String,
        Cidade: String,
        Estado: String,
        País: String,
        Geolocalização: {
            Latitude : String,
            Longitude : String
        }
    }
});

var Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;