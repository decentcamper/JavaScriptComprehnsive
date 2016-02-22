<?php
  include 'mod_sf_db_connect.php';
  
  $query = "select min(fLatitude) south,
                   max(fLatitude) north,
                   min(fLongitude) west,
                   max(fLongitude) east
              from Campsite";
  $result = mysql_query($query);
  $row = mysql_fetch_assoc($result);

  // Boundaries for sitemap grid
  $north = ceil($row['north']);
  $south = floor($row['south']);
  $east  = floor($row['east']);
  $west  = ceil($row['west']);
  
  // Grid size, in degrees, with separate sizes for latitude and longitude
  $lat_grid = 1;
  $lon_grid = 1;
  
  // Prepare the sitemap XML header
  $header = '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0">';

  // Create a sitemap url element for each grid cell
  for ($lat = $south; $lat < $north; $lat += $lat_grid) 
    for ($lon = $west; $lon < $east; $lon += $lon_grid) 
    {
      $query = "select 1
                  from Campsite
                  where (fLatitude between $lat and ".($lat + $lat_grid).")
                    and (fLongitude between $lon and ".($lon + $lon_grid).")";
      $result = mysql_query($query);
      if (!mysql_num_rows($result))
        continue;

      $urls = $urls.'
  <url>
    <loc>
     http://www.satellitefriendly.com/services/top_campgrounds.php?BBOX='.
          $lon.','.$lat.','.($lon + $lon_grid).','.($lat + $lat_grid).'
    </loc>
    <geo:geo>
      <geo:format>kml</geo:format>
    </geo:geo>
  </url>';
    }

  // Prepare the sitemap XML footer
  $footer = '
</urlset>';

  // Output the final sitemap XML
  header('Content-type: application/xml');
  echo $header;
  echo $urls;
  echo $footer;
?>
