function addDataPoint(coordinates, name, description, style)
{
  // addDataPoint: display a recent-entry placemark found by the KML processor 

  // Create and initialize the icon from the style in the KML
  var myIcon = new GIcon();
  myIcon.image      = geoXml.styles[style].image;
  myIcon.iconSize   = new GSize(32, 32);
  myIcon.shadow     = geoXml.styles[style].shadow;
  myIcon.shadowSize = new GSize(59, 32);
  myIcon.iconAnchor = new GPoint(16, 28);
  if (myIcon.image.indexOf('bus') > -1)
  myIcon.infoWindowAnchor = getAnchor(myIcon.image);

  // Create a marker for this data point
  var options = {icon: myIcon, title: name};
  var thisMarker = new GMarker(coordinates, options);

  // Attach infowindow to the marker with content from the KML
  options = {maxWidth: 250};
  thisMarker.bindInfoWindowHtml('<div id="infowindow"><h3>' + name + '</h3>' + 
    description + '</div>', options);

  // Add the marker to the recent-entries map 
  recentMap.addOverlay(thisMarker);

  // Also create a list entry (alongside the map) with the icon & name
  var recentRow = document.createElement('li');
  recentRow.innerHTML = 
    '<img width="32" height="32" src="' + myIcon.image + '" />' + name;
  document.getElementById('recent_list').appendChild(recentRow);

  recentRow.onclick = 
    function ()
    {
      // A click on the list entry triggers a click on its associated marker
      GEvent.trigger(thisMarker, 'click')
    };
};

function getAnchor(iconUrl)
{
  if (iconUrl.indexOf('bus') > -1)
    return new GPoint(16, 0);
  else if (iconUrl.indexOf('trailer') > -1)
    return new GPoint(19, 10);
  else
    return new GPoint(16, 6);
};

