// Declare variables for later use
var map;
var geoXml;
var data = new Array();
var markers = new Array();
var clicked;
var current;

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
    var options = {createmarker: addDataPoint, nozoom: true};
    geoXml = new EGeoXml(map, url, options);

    // Attach an event handler for after the KML is processed
    GEvent.addListener(geoXml, 'parsed', xmlParsed);

    // Load the KML
    geoXml.parse();

    // Attach an event to refresh the marker display whenever the map moves
    GEvent.addListener(map, 'moveend',         mapMoveEnd);
    GEvent.addListener(map, 'infowindowopen',  mapInfoWindowOpen);
    GEvent.addListener(map, 'infowindowclose', mapInfoWindowClose);
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

function mapMoveEnd()
{
  //  mapMoveEnd: refresh the marker display after the map has moved
  
  // Get the map boundary coordinates
  var mapBounds = map.getBounds();

  // Don't refresh if the currently-selected marker is still in view
  if (current != null)
  {
    if (mapBounds.contains(current))
      return;
    else
      map.closeInfoWindow();
  }

  // Prepare to build new sidebar content by starting with a clean slate
  var sidebarContent = '';
  
  // Remove previous set of markers from the map and the array
  for (var m = markers.length - 1; m >= 0; m--)
  {
    map.removeOverlay(markers[m]);
    markers.splice(m, 1);
  }

  // Create a base icon
  var numberIcon = new GIcon(G_DEFAULT_ICON);

  // Look for data in the new map area
  for (var d = 0; d < data.length; d++)
  {
    if (mapBounds.contains(data[d].coords))
    {
      // Map does contain this data point; create a marker and add it to the map
      m = markers.length;
      numberIcon.image = 
        'http://gmaps-samples.googlecode.com/svn/trunk/markers/orange/marker' + 
        (m + 1) + '.png';
      markers[m] = new GMarker(data[d].coords, {icon: numberIcon});
      markers[m].data = data[d];
      map.addOverlay(markers[m]);

      // Also attach an event handler to show infowindow when marker is clicked
      GEvent.addListener(markers[m], 'click', 
        new Function('showDetail(' + m + ')'));
      
      // Create sidebar content for this data point, including click event handler
      sidebarContent = sidebarContent + 
        '<li><a href="#" onclick="showDetail(' + m + '); return false">' + 
        data[d].title + '</a></li>';

      if (m >= 19)
      {
        // We've reached 20 markers, so break out of the loop
        sidebarContent = sidebarContent + 
          '<li style="list-style: none">zoom in for more...</li>';
        break;
      }
    }
  }
  
  if (markers.length == 0)
    // No data points found in map boundaries
    sidebarContent = '<li style="list-style: none">No results found in map area. ' +
        'Try zooming out or moving the map.</li>';

  // Move the new content into the sidebar
  document.getElementById('list').innerHTML = sidebarContent;
};

function showDetail(m)
{
  // showDetail: open the infowindow for the given map marker
  current = clicked = markers[m].data.coords;
  markers[m].openInfoWindow(
    '<h4 style="margin: 0; font-size=120%">' + markers[m].data.title + '</h3>' +
    '<p style="margin: 0; font-size=90%">' + markers[m].data.details + '</p>');
};

function mapInfoWindowOpen()
{
  // mapInfoWindowOpen: set the variable that keeps track of the selected coords
  current = clicked;
};

function mapInfoWindowClose()
{
  // mapInfoWindowClose: clear the variable that keeps track of the selected coords
  current = null;
};
