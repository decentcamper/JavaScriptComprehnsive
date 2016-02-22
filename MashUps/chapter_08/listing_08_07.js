// Declare variables for later use
var moving = false;
var lastCenter = new GLatLng(90, 0);

// Initialize the map
var map = new GMap2();

// Create the center "crosshair" overlay
var crosshair = new GScreenOverlay(	
  'http://sterlingudell.com/bgmm/markers/crosshair.png',    // image URL
  new GScreenPoint(0.5, 0.5, 'fraction', 'fraction'),       // screen offset
  new GScreenPoint(11, 12, 'pixel', 'pixel'),               // overlay offset
  new GScreenSize(24, 24, 'pixel', 'pixel')                 // overlay size
);
map.addOverlay(crosshair);

// Attach several events to be called when the map moves
GEvent.addListener(map, 'movestart', mapMoveStart);
GEvent.addListener(map, 'moveend',   mapMoveEnd);
GEvent.addListener(map, 'zoomend',   mapZoomEnd);

// Initialize the center display
map.getCenterAsync(afterGetCenter);

// Adjust the height of the sidebar display
_IG_AdjustIFrameHeight();
