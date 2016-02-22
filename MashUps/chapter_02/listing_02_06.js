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
    map = new GMap2(mapDiv, 
      {mapTypes: [G_NORMAL_MAP, G_PHYSICAL_MAP, G_SATELLITE_MAP, G_HYBRID_MAP]});
    var coordinates = new GLatLng(39.9, -105.2);
    map.setCenter(coordinates, 10, G_PHYSICAL_MAP);

    var marker = new GMarker(coordinates);
    marker.bindInfoWindowHtml('<p>Hello, World!</p>');
    map.addOverlay(marker); 

    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GLargeMapControl());
  }
};
