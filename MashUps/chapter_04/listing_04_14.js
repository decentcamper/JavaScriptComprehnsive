// Declare variables for later use
var map;
var whiteIcon, blackIcon;
var entranceMarker, delicateArchMarker, windowsMarker;
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
    // Initialize the core map object, including the Google Earth maptype
    map = new GMap2(mapDiv, {mapTypes: [G_NORMAL_MAP, G_SATELLITE_MAP, 
      G_HYBRID_MAP, G_PHYSICAL_MAP, G_SATELLITE_3D_MAP]});
    var coordinates = new GLatLng(38.661, -109.534);
    map.setCenter(coordinates, 11, G_PHYSICAL_MAP);

    // Add the standard map controls, moving the scale control to the upper-right
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl(), 
                   new GControlPosition(G_ANCHOR_TOP_RIGHT, new GSize(6, 31))); 
    map.addControl(new GOverviewMapControl());
    map.addControl(new GMapTypeControl());

    // Also add a local search control to the map
    map.enableGoogleBar();
    
    // Initialize a new icon, based on the GMaps default but in white
    whiteIcon = new GIcon(G_DEFAULT_ICON);
    whiteIcon.image = '../markers/white.png';

    // Add a marker to the map for the park entrance, using the white icon
    coordinates = new GLatLng(38.6168, -109.61986);
    entranceMarker = new GMarker(coordinates, {icon: whiteIcon});
    map.addOverlay(entranceMarker);
    GEvent.addListener(entranceMarker, 'click', entranceClick);

    // Another new icon, also based on the GMaps default but this time in black
    blackIcon = new GIcon(G_DEFAULT_ICON);
    blackIcon.image = '../markers/black.png';
    
    // Create two infowindow tabs for Delicate Arch using content from the XHTML
    var tabs = [new GInfoWindowTab('Details', 
                                   document.getElementById('delicate_tab_details')),
                new GInfoWindowTab('Photo',   
                                   document.getElementById('delicate_tab_photo'))]; 

    // Add a map marker for the Delicate Arch trail using the tabs and black icon
    coordinates = new GLatLng(38.73561, -109.52073);
    delicateArchMarker = new GMarker(coordinates, {icon: blackIcon});
    delicateArchMarker.bindInfoWindowTabs(tabs, {maxWidth: 300});
    map.addOverlay(delicateArchMarker);
    
    // Two more infowindow tabs, for the Windows trail...
    tabs = [new GInfoWindowTab('Details', 
                               document.getElementById('windows_tab_details')),
            new GInfoWindowTab('Photo',   
                               document.getElementById('windows_tab_photo'))]; 

    // ...and a map marker for the Windows trail as well, again using the black icon
    coordinates = new GLatLng(38.68725, -109.53712);
    windowsMarker = new GMarker(coordinates, {icon: blackIcon});
    windowsMarker.bindInfoWindowTabs(tabs, {maxWidth: 300});
    map.addOverlay(windowsMarker);

    // Create a geodata overlay for nearby campgrounds and add it to the map
    geoXml = new GGeoXml(
                   'http://www.satellitefriendly.com/services/popular_network.kml');
    map.addOverlay(geoXml);
  }
};

function entranceClick()
{
  // entranceClick: Open a map detail infowindow showing the park entrance area
  entranceMarker.showMapBlowup({mapType: G_NORMAL_MAP, zoomLevel: 14});
};

function toggleCampgrounds()
{
  // toggleCampgrounds: Turn the campground geodata overlay on or off
  if (document.getElementById('show_campgrounds').checked)
    geoXml.show();
  else
    geoXml.hide();
};
