// Initialize the recent-entries map object
var options = {backgroundColor: '#D7D5E3', mapTypes: [G_PHYSICAL_MAP]};
recentMap = new GMap2(mapDiv, options);
recentMap.setCenter(new GLatLng(39.8, -98.5), 3, G_PHYSICAL_MAP);
recentMap.enableContinuousZoom();

// Limit the minimum zoom for the terrain map type
G_PHYSICAL_MAP.getMinimumResolution  = function () {return 3};

// Add a couple of standard map controls
recentMap.addControl(new GSmallMapControl());
recentMap.addControl(new GScaleControl());

// Initialize the KML processor
var options = {createmarker: addDataPoint};
geoXml = new EGeoXml(recentMap, '/services/recent_campgrounds.php?type=kml', 
                     options);
geoXml.parse();
