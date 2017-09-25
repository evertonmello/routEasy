var mongoose = require('mongoose');

var DeliverySchema = mongoose.Schema({
    nome: String,
    peso: Number,
    endereco :{
        logradouro : String,
        numero : Number,
        bairro: String,
        complemento: String,
        cidade: String,
        estado: String,
        pais: String,
        geolocalizacao: {
            lat : String,
            lng : String
        }
    }
});

var Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;