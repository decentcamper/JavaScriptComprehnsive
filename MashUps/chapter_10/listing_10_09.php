<?php
  // Boundaries for sitemap grid
  $north = 50;
  $south = 25;
  $east  = -60;
  $west  = -130;
  
  // Grid size, in degrees, with separate sizes for latitude and longitude
  $lat_grid = 5;
  $lon_grid = 10;
  
  // Prepare the sitemap XML header
  $header = '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0">';

  // Create a sitemap url element for each grid cell
  for ($lat = $south; $lat < $north; $lat += $lat_grid) 
    for ($lon = $west; $lon < $east; $lon += $lon_grid) 
    {
      $urls = $urls.'
  <url>
    <loc>
     http://sterlingudell.com/bgmm/chapter_10/listing_10_06.php?BBOX='.
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
