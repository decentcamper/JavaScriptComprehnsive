function afterGetCenter(coordinates)
{
  if (!coordinates.equals(lastCenter))
  {
    // Map has moved since the last time we checked

    // Save the new coordinates, so we can tell next time if it's moved
    lastCenter = coordinates;

    // Reformat the map center latitude as a more readable string

    var latitude = Math.abs(coordinates.lat());
    latitude = latitude.toFixed(5);
    latitude = latitude + '? ';

    if (coordinates.lat() > 0)
      latitude = latitude + 'N';
    else if (coordinates.lat() < 0)
      latitude = latitude + 'S';

    // Ditto for longitude

    var longitude = Math.abs(coordinates.lng());
    longitude = longitude.toFixed(5);
    longitude = longitude + '? ';

    if (coordinates.lng() > 0)
      longitude = longitude + 'E';
    else if (coordinates.lng() < 0)
      longitude = longitude + 'W';

    var centerDisplay = 'Map center: ' + latitude + ', ' + longitude;

    // Set the mapplet's title to include the formatted center coordinates
    _IG_SetTitle(centerDisplay);
  }

  if (moving)
    // Map is still moving, so carry on updating the center display
    map.getCenterAsync(afterGetCenter);
};
