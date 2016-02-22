function removeDataPoint(m)
{
  // Remove the marker from the map
  map.removeOverlay(markers[m]);

  // Find and remove the sidebar entry  
  var id = markers[m].getPoint().toUrlValue();
  var sidebarRow = document.getElementById(id);
  if (sidebarRow)
    sidebar.removeChild(sidebarRow);

  // Remove the marker from our own array
  markers.splice(m, 1);
};
