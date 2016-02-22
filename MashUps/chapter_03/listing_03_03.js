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
    var coordinates = new GLatLng(49.186416, -122.842911);
    map.setCenter(coordinates, 15);

    var marker = new GMarker(coordinates);
    marker.bindInfoWindowHtml('<h3>Our Office</h3>' +
      '<addr>10100 E Whalley Ring Rd<br />Vancouver, BC</addr>');
    map.addOverlay(marker); 
    GEvent.trigger(marker, 'click');

    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());
    
    geoXml = new GGeoXml('http://bbs.keyhole.com/ubb/download.php?Number=921371');
    map.addOverlay(geoXml);
  }
};
