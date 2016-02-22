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

  // Build and retrieve the placename lookup URL from the clicked coordinates
  var url = 'http://ws.geonames.org/findNearbyPlaceNameJSON?lat=' + 
            clickCoords.lat() + '&lng=' + clickCoords.lng();
  _IG_FetchContent(url, afterGeoname);

  // Prepare for the next click
  timeout = null;
};
