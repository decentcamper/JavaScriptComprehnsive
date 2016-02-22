var map;

function loadMap()
{
  var mapDiv = document.getElementById('map');
  
  if (!GBrowserIsCompatible())
    mapDiv.innerHTML = 'Sorry, your browser isn\'t compatible with Google Maps.';
  else
  {
    map = new GMap2(mapDiv);
    map.setCenter(new GLatLng(39.8, -98.5), 4);

    GEvent.addListener(map, 'moveend', mapMoveEnd);
  }
};

function mapMoveEnd()
{
  GLog.write(map.getCenter().toUrlValue());
};
