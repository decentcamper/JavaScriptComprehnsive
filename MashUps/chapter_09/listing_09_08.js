// Declare variables for later use
var map;
var geoXml;

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

    // Set the starting map viewport
    var coordinates = new GLatLng(39.8, -98.5);
    map.setCenter(coordinates, 4);

    // Add the standard map controls
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());

    // Initialize a custom marker icon
    var starIcon = new GIcon();
    starIcon.image = '../markers/star.png';
    starIcon.iconSize         = new GSize(17, 17);
    starIcon.iconAnchor       = new GPoint(8, 8);
    starIcon.infoWindowAnchor = new GPoint(12, 4);

    // Initialize the KML processor
    var url = 'state_capitals.kml';
    var options = {sidebarid: 'list', 
                   markeroptions: {icon: starIcon}};
    geoXml = new EGeoXml(map, url, options);

    // Load the KML
    geoXml.parse();
  }
};
