// We'll need the campground boundaries for use in zooming
campground.bounds = new GLatLngBounds();

// Create a map marker for each campsite to use when zoomed in
for (var c = 0; c < campsites.length; c++)
{
  // Extract the coordinates from JSON and add it to the campground boundaries
  campsites[c].coordinates = new GLatLng(campsites[c].latitude, 
                                         campsites[c].longitude);
  campground.bounds.extend(campsites[c].coordinates);

  // Create campsite icon & marker
  campsites[c].title = 'Site number ' + campsites[c].number;
  options = {icon: createIcon(campsites[c].iconUrl), title: campsites[c].title};
  campsites[c].marker = new GMarker(campsites[c].coordinates, options);
  map.addOverlay(campsites[c].marker);

  // Immediately hide the marker (our initial zoom is too far out to show it)
  campsites[c].marker.hide();

  // Attach infowindow to the marker with content from JSON
  campsites[c].marker.bindInfoWindowHtml(
    '<div id="infowindow">' +
      '<h4>' + campsites[c].title + '</h4>' +
      '<ul>' +
        '<li>' + campsites[c].rating + ' view of satellite at ' + 
           campsites[c].satellite + '&deg;</li>' +
        '<li>' + campsites[c].hookups + '</li>' +
      '</ul>' +
      '<p>Reported on ' + campsites[c].date + '</p>' +
    '</div>');
}

// Calculate optimal campground-wide zoom level
optimalZoom = Math.min(15, map.getBoundsZoomLevel(campground.bounds) - 1);
