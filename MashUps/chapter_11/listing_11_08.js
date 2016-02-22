function afterGeocode(response)
{
  if (response && 
      (response.Status.code == 200))
  {
    // Address was found - extract the map coordinates from the response
    var place = response.Placemark[0];
    var coordinates = new GLatLng(place.Point.coordinates[1], 
                                  place.Point.coordinates[0]);

    // Move the map there, zooming further in for more accurate results
    map.setCenter(coordinates, place.AddressDetails.Accuracy + 5);
  }
  else
    alert('Address not found. Please try again.');
};
