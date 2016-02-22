function afterGeoname(responseText)
{
  // Evaluate the JSON response to extract the data from it
  var responseData = json_parse(responseText);

  if (responseData.geonames.length == 0)
  {
    // No place name found; let the user know with a simple message
    var content = 'No nearby place name found.';
  }
  else
  {
    // Place name found succesfully; build it into an infowindow
    var place = responseData.geonames[0];
    var miles = parseFloat(place.distance) / 1.61;
    var content = miles.toFixed(2) + ' miles from ' + place.name + ',<br />' + 
                  place.adminName1 + ', ' + place.countryName;
  }

  // Attach the infowindow content to the marker, and also show it now
  marker.openInfoWindow(content);
  marker.bindInfoWindow(content);
};
