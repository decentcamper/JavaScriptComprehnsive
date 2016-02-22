function mapMoveEnd()
{
  // Get the map boundary coordinates
  var mapBounds = map.getBounds();

  // Parameterize the geodata URL based on those boundaries 
  geoXml.urls = [kmlUrl + 'BBOX=' + 
                 mapBounds.getSouthWest().lng().toFixed(6) + ',' +
                 mapBounds.getSouthWest().lat().toFixed(6) + ',' +
                 mapBounds.getNorthEast().lng().toFixed(6) + ',' +
                 mapBounds.getNorthEast().lat().toFixed(6)];

  // Load the KML - new markers will be added when it returns
  geoXml.parse();

  // Remove markers from display that are no longer visible
  for (var m = markers.length - 1; m >= 0; m--)
    if (!mapBounds.contains(markers[m].getPoint()))
      removeDataPoint(m);

  // Also clear starting location out of the URL
  location.hash = '#';
};
