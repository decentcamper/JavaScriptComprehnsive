function markerDragStart()
{
  map.closeInfoWindow();
};

function markerDragEnd()
{
  saveCoordinates();

  var content = '<a href="#" onclick="map.zoomIn(); return false">Zoom in</a>' +
                ' if needed to place marker<br />exactly, or click Save when done.';
  marker.openInfoWindow(content);
};
