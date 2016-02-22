// Declare variables for later use
var map;
var whiteIcon, blackIcon;
var entranceMarker, delicateArchMarker, windowsMarker;

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
    
    // Initialize a new icon, based on the GMaps default but in white
    whiteIcon = new GIcon(G_DEFAULT_ICON);
    whiteIcon.image = '../markers/white.png';

    // Add a marker to the map for the park entrance, using the white icon
    coordinates = new GLatLng(38.6168, -109.61986);
    entranceMarker = new GMarker(coordinates, {icon: whiteIcon});
    map.addOverlay(entranceMarker);

    // Another new icon, also based on the GMaps default but this time in black
    blackIcon = new GIcon(G_DEFAULT_ICON);
    blackIcon.image = '../markers/black.png';
    
    // Add two markers to the map for hiking trails, using the black icon

    coordinates = new GLatLng(38.73561, -109.52073);
    delicateArchMarker = new GMarker(coordinates, {icon: blackIcon});
    map.addOverlay(delicateArchMarker);
    
    coordinates = new GLatLng(38.68725, -109.53712);
    windowsMarker = new GMarker(coordinates, {icon: blackIcon});
    map.addOverlay(windowsMarker);
  }
};
