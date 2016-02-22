// Check for a starting location in URL
var hash = location.hash.replace('#', '');
if (hash != '')
{
  // Found starting location - parse the coordinates & zoom from it
  var viewport = startLocation.split(',');
  var latitude  = parseFloat(viewport[0]);
  var longitude = parseFloat(viewport[1]);
  var zoom      = parseInt(viewport[2]);
}

// Initialize the core map object
var options = {backgroundColor: '#D7D5E3', 
  mapTypes: [G_NORMAL_MAP, G_SATELLITE_MAP, G_HYBRID_MAP, G_PHYSICAL_MAP]};
map = new GMap2(mapDiv, options);

if (!isNaN(latitude + longitude + zoom))
  // Starting location supplied
  map.setCenter(new GLatLng(latitude, longitude), zoom, G_PHYSICAL_MAP);
else
  // Default starting location
  map.setCenter(new GLatLng(39.8, -98.5), 4, G_PHYSICAL_MAP);
