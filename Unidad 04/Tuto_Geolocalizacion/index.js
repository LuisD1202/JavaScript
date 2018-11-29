var map, infoWindows, pos

if(navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition(function (position){
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    alert("posicion " +pos)
    initMap() /// Colocar el pos
  })
}
else {
  alert("El navegador no soporta la geolocalización")
}

function initMap()
{
  var mapContainer = document.getElementById("map")
  var config = {center: new google.maps.LatLng({lat:40.6643, lng: -73.9385}),
                zoom:5
              }
  map = new google.maps.Map (mapContainer, config)
  infoWindows = new google.maps.InfoWindow ({map: map})
}

var button = document.getElementById("btn-geo")

button.addEventListener("click",function(){
  alert("Se buscara la ubicacion en el mapa")
  map.setCenter(pos)
  map.setZoom(15)
  infoWindows.setPosition(pos)
  infoWindows.setContent("Aqui estas")
})
