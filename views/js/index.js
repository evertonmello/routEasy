
var geo = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var key = "&key=AIzaSyCyQFMKJb00p86hSOKmUGxACyBPf39YVKM";
var end, peso, nome;

function findAdress(){
    end = document.getElementById("end").value;    
    peso = document.getElementById("peso").value;
    nome = document.getElementById("nome").value
    var url = geo + end.split(" ").join("+") + key;      
    alert(url);
 
}


var mymap = L.map('mapid').setView([-23.6442973, -46.5239157], 14);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(mymap);
L.marker([-23.6442973, -46.5239157]).addTo(mymap).bindPopup( nome + " " + peso);
