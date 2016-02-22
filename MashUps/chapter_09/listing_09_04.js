function afterGeocode(coordinates)
{
  if (coordinates == null)
    alert('Address not found. Please try again.');
  else
  {
    // Address was found
    if (marker == null)
    {
      // This is the first time we've geocoded an address, so create the marker
      var iconOptions = {width: 24, height: 24, primaryColor: "#fffc1b"};
      var myIcon = MapIconMaker.createMarkerIcon(iconOptions);
      marker = new GMarker(coordinates, {icon: myIcon, draggable: true});
      map.addOverlay(marker);

      GEvent.addListener(marker, 'dragend',   markerDragEnd);
      GEvent.addListener(marker, 'dragstart', markerDragStart);
    }
    else
    {
      // The marker already exists, just move it to the new coordinates
      marker.setPoint(coordinates);
    }

    map.setCenter(coordinates, 14);

    marker.openInfoWindowHtml('Drag marker to exact location, then click Save.');
    updatesaveCoordinates();
  }
};
