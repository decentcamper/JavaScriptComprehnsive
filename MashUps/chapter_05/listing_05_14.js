// Declare variables for later use
var map;
var geocoder;
var startMarker;
var finishMarker;
var directions;
var traffic;
var streetviewClient;
var ads;

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

    // Initialize the driving directions object
    var panel = document.getElementById('directions');
    directions = new GDirections(map, panel);

    // Initialize the traffic object
    traffic = new GTrafficOverlay();
    map.addOverlay(traffic);

    // Initialize the Street View controller object
    streetviewClient = new GStreetviewClient();

    // Initialize the map advertising object
    ads = new GAdsManager(map, 'google', {maxAdsOnMap: 10});
    ads.enable();
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

function destinationChange()
{
  // destinationChange: Update destination marker from the drop-down list

  // Extract the new destination from the drop-down
  var finish = document.getElementById('finish');
  var value = finish.options[finish.selectedIndex].value;
  if (value != '')
  {
    // Valid destination:  create a coordinates object from it
    var coordinates = eval('new GLatLng(' + value + ')');
  
    if (finishMarker == null)
    {
      // This is the first time the user has selected a destination
      finishMarker = new GMarker(coordinates);
      map.addOverlay(finishMarker);
    }
    else
    {
      // The marker already exists, just move it to the new coordinates
      finishMarker.setPoint(coordinates);
    }

    // Ensure that the destination point is visible on the map
    if (!map.getBounds().contains(coordinates))
      map.panTo(coordinates);
  }
};

function getDirections()
{
  // getDirections: Request driving directions from start to destination

  if ((startMarker == null) || (finishMarker == null))
    alert('Please select a starting address and destination for directions.');
  else
  {
    // Collect the start and finish points as 'lat,lon' strings
    var waypoints = [startMarker.getPoint().toUrlValue(),
                     finishMarker.getPoint().toUrlValue()];

    // Load driving directions for those points
    directions.loadFromWaypoints(waypoints);
  }
};

function toggleTraffic()
{
  // toggleTraffic: Turn the traffic overlay on or off
  if (document.getElementById('show_traffic').checked)
    traffic.show();
  else
    traffic.hide();
};

function getView()
{
  // getView: Retrieve a Street View panorama for the selected destination

  if (finishMarker == null)
    alert('Please select a destination.');
  else
  {
    // Retrieve the Street View panorama for the coordinates of the marker
    var coordinates = finishMarker.getPoint();
    streetviewClient.getNearestPanorama(coordinates, afterView);
  }
};

function afterView(streetviewData)
{
  // afterView: Callback function for Street View panorama retrieval

  if (streetviewData.code == G_GEO_SUCCESS)
  {
    // Create a DHTML element to contain the panorama
    var streetViewer = document.createElement('div');

    // Create the Street View panorama object
    var panorama = new GStreetviewPanorama(streetViewer);
      
    // Extract the precise lat/lon coordinates from the Street View data object
    var coordinates = new GLatLng(streetviewData.location.lat, 
                                  streetviewData.location.lng);

    // Tell the panorama object to display view for those coordinates
    panorama.setLocationAndPOV(coordinates, streetviewData.location.pov);

    // Open an infowindow with the panorama container element
    streetViewer.className = 'streetViewer';
    finishMarker.openInfoWindow(streetViewer);
  }
};
