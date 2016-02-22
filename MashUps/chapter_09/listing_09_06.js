// Declare variables for later use
var map;
var geocoder;
var marker;

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
    map.setCenter(coordinates, 3, G_HYBRID_MAP);

    // Add the standard map controls
    map.addControl(new GSmallMapControl());
    map.addControl(new GScaleControl(), 
                   new GControlPosition(G_ANCHOR_BOTTOM_LEFT, new GSize(6, 18))); 
    map.addControl(new GMapTypeControl(true));

    // Initialize the geocoder object
    geocoder = new GClientGeocoder();
  }
};

function geocode()
{ 
  // geocode: Call the Google geocoder with the address supplied by the user
  var address = document.getElementById('address').value;
  geocoder.getLatLng(address, afterGeocode);
};

function afterGeocode(coordinates)
{
  // afterGeocode: Callback function for the geocoder, showing the coords on the map
  if (coordinates == null)
    alert('Address not found. Please try again.');
  else
  {
    // Address was found
    if (marker == null)
    {
      // This is the first time we've geocoded an address, so create the marker
      var iconOptions = {width: 24, height: 24, primaryColor: "#fffc1b"};
      var myIcon = MapIconMaker.createMarkerIcon(iconOptions);
      marker = new GMarker(coordinates, {icon: myIcon, draggable: true});
      map.addOverlay(marker);

      GEvent.addListener(marker, 'dragend',   markerDragEnd);
      GEvent.addListener(marker, 'dragstart', markerDragStart);
    }
    else
    {
      // The marker already exists, just move it to the new coordinates
      marker.setPoint(coordinates);
    }
    
    map.setCenter(coordinates, 14);

    marker.openInfoWindowHtml('Drag marker to exact location, then click Save.');
    saveCoordinates();
  }
};

function markerDragStart()
{
  // markerDragStart: Close the infowindow when the marker is being dragged
  map.closeInfoWindow();
};

function markerDragEnd()
{
  // markerDragEnd: Update the form coordinates and show more instructions

  saveCoordinates();

  var content = '<a href="#" onclick="map.zoomIn(); return false">Zoom in</a>' +
                ' if needed to place marker<br />exactly, or click Save when done.';
  marker.openInfoWindow(content);
};

function saveCoordinates()
{
  // saveCoordinates: Copy the current marker coordinates into the form fields
  var coordinates = marker.getPoint();
  document.getElementById('latitude').value  = coordinates.lat().toFixed(6);
  document.getElementById('longitude').value = coordinates.lng().toFixed(6);
};

