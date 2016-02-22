var map;
var geoXml;

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
      {mapTypes: [G_NORMAL_MAP, G_SATELLITE_MAP, G_HYBRID_MAP, G_PHYSICAL_MAP]});
    var coordinates = new GLatLng(39.8, -98.5);
    map.setCenter(coordinates, 4);

    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());
    
    geoXml = new GGeoXml(
      'http://www.placeopedia.com/cgi-bin/rss.cgi?num_results=5', xmlLoaded);
    map.addOverlay(geoXml);
  }
};

function xmlLoaded()
{
  geoXml.gotoDefaultViewport(map);
};