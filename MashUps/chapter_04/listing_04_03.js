// Declare variables for later use
var map;

function loadMap()
{
  // loadMap: initialize the API and load the map onto the page

  // Get the map container div
  var mapDiv = document.getElementById('map');

  // Confirm browser compatibility with the Maps API
  if (!GBrowserIsCompatible())
    mapDiv.innerHTML = 'Sorry, your browser isn\'t compatible with Google Maps.';
  else
  {
    // Initialize the core map object
    map = new GMap2(mapDiv, 
      {mapTypes: [G_NORMAL_MAP, G_SATELLITE_MAP, G_HYBRID_MAP, G_PHYSICAL_MAP]});

    // Set the starting map viewport, based on center coordinates and zoom level
    var coordinates = new GLatLng(38.661, -109.534);
    map.setCenter(coordinates, 11, G_PHYSICAL_MAP);

    // Add the standard map controls
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());
  }
};
