<?php
  // Connect to the database.
  include 'database_connect.php';
  
  // Make sure the URL parameters are numbers in the valid range
  $lat = (float) min(90, max(-90, $_GET['lat']));
  $lng = (float) min(180, max(-180, $_GET['lng']));

  // Execute the MySQL query to retrieve the data
  $query = "select *,
                   (6371 * acos(cos(radians($lat)) * cos(radians(latitude)) * 
                     cos(radians(longitude) - radians($lng)) + 
                     sin(radians($lat)) * sin(radians(latitude)))) as distance
              from geoname
              where latitude between ($lat - 1) and ($lat + 1)
                and longitude between ($lng - 1) and ($lng + 1)
              order by distance asc
              limit 1";
  $result = mysql_query($query);
  if (!$result)
    die("Unable to retrieve data");

  // Prepare the JSON header
  $header = '{"geonames": [';

  // Generate JSON for the retrieved data 
  if ($row = mysql_fetch_array($result))
  {
    $json = '{countryCode: "'.$row['country'].'",
             countryName: "'.$row['country'].'",
             adminCode1:  "'.$row['state'].'",
             adminName1:  "'.$row['state'].'",
             name:        "'.addslashes($row['name']).'",
             lat:         '.$row['latitude'].',
             lng:         '.$row['longitude'].',
             population:  '.$row['population'].',
             distance:    '.round($row['distance'], 3).'}';
  }

  // Prepare the JSON footer
  $footer = ']}';

  // Output the final JSON
  header('Content-type: text/plain');
  echo $header;
  echo $json;
  echo $footer;
?>