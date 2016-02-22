// Declare variables for later use
var map;
var geoXml;
var data = new Array();
var markers = new Array();

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
    var coordinates = new GLatLng(53.6, -4.3);
    map.setCenter(coordinates, 6);

    // Add the standard map controls
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());

    // Initialize the KML processor
    var url = 'uk_breweries.kml';
    var options = {sidebarid: 'list', createmarker: addDataPoint, nozoom: true};
    geoXml = new EGeoXml(map, url, options);

    // Attach an event handler for after the KML is processed
    GEvent.addListener(geoXml, 'parsed', xmlParsed);

    // Load the KML
    geoXml.parse();

    // Attach an event to refresh the marker display whenever the map moves
    GEvent.addListener(map, 'moveend', mapMoveEnd);
  }
};

function addDataPoint(coordinates, name, description)
{
  // addDataPoint: save the data for a placemark found by the KML processor 
  var d = data.length;
  data[d] = {coords: coordinates, title: name, details: description};
};

function xmlParsed()
{
  // xmlParsed: after KML processing, initialize the marker display
  mapMoveEnd();
};