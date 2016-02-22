function addDataPoint(coordinates, name, description, style)
{
  // Check to see if this placemark is already displayed, and stop if it is
  for (var m = markers.length - 1; m >= 0; m--)
  {
    if (markers[m].getPoint().equals(coordinates))
      return;
  }
  
  // Create and initialize the icon from the style in the KML
  var myIcon = new GIcon();
  myIcon.image      = geoXml.styles[style].image;
  myIcon.iconSize   = new GSize(32, 32);
  if (myIcon.image.indexOf('circle') > -1)
  {
    // It's a cluster placemark
    myIcon.shadow     = '/images/icons/circle_shadow.png';
    myIcon.shadowSize = new GSize(40, 40);
    myIcon.iconAnchor = new GPoint(13, 13);
    myIcon.infoWindowAnchor = new GPoint(13, 0);
  }
  else
  {
    // Not a cluster => an individual campground
    myIcon.shadow     = geoXml.styles[style].shadow;
    myIcon.shadowSize = geoXml.styles[style].shadowSize;
    myIcon.iconAnchor = new GPoint(16, 28);
    myIcon.infoWindowAnchor = getAnchor(myIcon.image);
  }

  // Create a marker for this data point
  var options = {icon: myIcon, title: name};
  var thisMarker = new GMarker(coordinates, options);
  markers.push(thisMarker);

  // Some different handling for clusters and campgrounds
  if (myIcon.image.indexOf('circle') > -1)
  {
    // Cluster
    thisMarker.isCluster = true;

    GEvent.addListener(thisMarker, 'click', 
      function ()
      {
        // Clicking on a cluster zooms the map on its location
        map.setCenter(coordinates, map.getZoom() + 2);
      });
  }
  else
  {
    // Individual campground
    thisMarker.isCluster = false;

    // Attach infowindow to the marker with content from the KML
    options = {maxWidth: 350};
    thisMarker.bindInfoWindowHtml('<div id="infowindow"><h3>' + name + '</h3>' + 
      description + '</div>', options);

    // Also create a sidebar entry (alongside the map) with the icon, name, & descr
    var sidebarRow = document.createElement('div');
    sidebarRow.id = coordinates.toUrlValue();
    sidebarRow.className = 'sidebar_row';
    sidebarRow.innerHTML = 
      '<img width="32" height="32" src="' + myIcon.image + '" /><h3>' + name + 
      '</h3>' + description;
    sidebar.appendChild(sidebarRow);

    sidebarRow.onclick = 
      function ()
      {
        // A click on the sidebar entry triggers a click on its associated marker
        GEvent.trigger(thisMarker, 'click')
      };
  }

  // Add the marker to the map 
  map.addOverlay(thisMarker);
};
