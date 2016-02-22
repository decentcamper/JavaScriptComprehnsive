function placeMarker()
{
  if (marker == null)
  {
    // Marker doesn't exist yet, so create it now
    marker = new GMarker(clickCoords);
    map.addOverlay(marker);
  }
  else
    // Move the marker to the new coordinates
    marker.setPoint(clickCoords);

  // Prepare for the next click
  timeout = null;
};
