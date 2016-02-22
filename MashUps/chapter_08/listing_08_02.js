var timeout;
var clickCoords;

function mapClick(overlay, coordinates)
{
  if (overlay != null)
    // Click wasn't on "empty" map space, so don't go any further
    return;
  
  if (timeout == null)
  {
    // The first click we've had recently => start a timeout for the lookup
    clickCoords = coordinates;
    timeout = setTimeout('placeMarker()', 500);
  }
  else
  {
    // Second click means it's a double-click, so cancel the lookup timeout
    clearTimeout(timeout)
    timeout = null;
  }
};