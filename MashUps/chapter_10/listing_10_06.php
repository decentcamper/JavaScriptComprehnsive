<?php
  // Connect to the database.
  include 'database_connect.php';
  
  // Make sure the URL parameters are numbers in the valid range

  $viewport = split(',', $_GET['BBOX']);
  
  while ($viewport[0] > $viewport[2])
    $viewport[0] -= 360;
  
  $north = min(90,   (float) $viewport[3]);
  $south = max(-90,  (float) $viewport[1]);
  $east  = min(180,  (float) $viewport[2]);
  $west  = max(-180, (float) $viewport[0]);

  // Execute the MySQL query to retrieve the data
  $query = "select * 
              from geoname
              where (latitude between $south and $north)
                and (longitude between $west and $east)
              order by population desc
              limit 10";
  $result = mysql_query($query);
  if (!$result)
    die("Unable to retrieve data");

  // Prepare the KML header
  $header = '<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://earth.google.com/kml/2.2">
<Document>
  <name>Largest Cities</name>
  <Style id="city_style">
    <IconStyle>
      <Icon>
        <href>http://maps.google.com/mapfiles/kml/pal4/icon56.png</href>
      </Icon>
    </IconStyle>
  </Style>';

  // Generate KML placemarks for the retrieved data
  while ($row = mysql_fetch_array($result))
  {
    $placemarks = $placemarks.'
  <Placemark id="'.$row['country'].'_'.$row['state'].'_'.urlencode($row['name']).'">
    <name>'.htmlentities($row['name']).'</name>
    <description><![CDATA[
      Population '.$row['population'].'
    ]]></description>
    <styleUrl>#city_style</styleUrl>
    <Point>
      <coordinates>'.$row['longitude'].','.$row['latitude'].',0</coordinates>
    </Point>
  </Placemark>';
  }

  // Prepare the KML footer
  $footer = '
</Document>
</kml>';

  // Output the final KML
  header('Content-type: application/vnd.google-earth.kml+xml');
  echo $header;
  echo $placemarks;
  echo $footer;
?>