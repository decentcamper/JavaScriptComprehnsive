// Declare variables for later use
var map;
var geocoder;
var startMarker;

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
    var coordinates = new GLatLng(37.75, -122.44);
    map.setCenter(coordinates, 12);

    // Add the standard map controls
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());

    // Initialize the geocoder object and tie it to the current map view
    geocoder = new GClientGeocoder();
    geocoder.setViewport(map.getBounds());
  }
};

function geocode()
{ 
  // geocode: Call the Google geocoder with the address supplied by the user
  var address = document.getElementById('start').value;
  geocoder.getLatLng(address, afterGeocode);
};

function afterGeocode(coordinates)
{
  // afterGeocode: Callback function for the geocoder, showing the coords on the map
  if (coordinates == null)
    alert('Address not found. Please try again.');
  else if (!map.getBounds().contains(coordinates))
    alert('Address not found in map area. Please try again.');
  else
  {
    // Address was found
    if (startMarker == null)
    {
      // This is the first time we've geocoded an address, so create the marker
      startMarker = new GMarker(coordinates);
      map.addOverlay(startMarker);
    }
    else
    {
      // The marker already exists, just move it to the new coordinates
      startMarker.setPoint(coordinates);
    }
  }
};

