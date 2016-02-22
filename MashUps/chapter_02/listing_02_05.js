var map;

function loadMap()
{
  var mapDiv = document.getElementById('map');
  
  if (!GBrowserIsCompatible())
  {
    mapDiv.innerHTML = 'Sorry, your browser isn\'t compatible with Google Maps.';
  }
  else
  {
    map = new GMap2(mapDiv);
    var coordinates = new GLatLng(39.9, -105.2);
    map.setCenter(coordinates, 10);

    var marker = new GMarker(coordinates);
    marker.bindInfoWindowHtml('<p>Hello, World!</p>');
    map.addOverlay(marker); 
  }
};
