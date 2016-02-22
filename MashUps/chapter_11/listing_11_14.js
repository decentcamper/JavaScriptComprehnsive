function mapMoveEnd()
{
  if (map.getZoom() < optimalZoom - 1)
  {
    // Zoomed far enough out to only show single marker for the campground

    // Hide all the individual campsite markers
    map.closeInfoWindow();
    for (var c = 0; c < campsites.length; c++)
      campsites[c].marker.hide()

    // Show (and track) the campground marker
    campground.marker.show();
    tracker.enable();
  }
  else
  {
    // Zoomed far enough in to see individual campsites

    // Hide the campground marker
    campground.marker.hide();

    // Show all the individual campsite markers
    siteVisible = false;
    var bounds = map.getBounds();
    for (var c = 0; c < campsites.length; c++)
    {
      campsites[c].marker.show()
      if (bounds.contains(campsites[c].coordinates))
        siteVisible = true;
    }

    // Only show the marker tracker if no campsite is visible
    if (siteVisible)
      tracker.disable();
    else
      tracker.enable();
  }
};
