var map;

GEvent.addDomListener(window, 'load',   loadMap);
GEvent.addDomListener(window, 'unload', GUnload);

function loadMap()
{
  var mapDiv = document.getElementById('map');
  
  if (!GBrowserIsCompatible())
    mapDiv.innerHTML = 'Sorry, your browser isn\'t compatible with Google Maps.';
  else
  {
    map = new GMap2(mapDiv);
    map.setCenter(new GLatLng(39.8, -98.5), 4);
  }
};
