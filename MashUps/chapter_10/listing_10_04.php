<?php
  // Connect to the database.
  include 'database_connect.php';
  
  // Execute the MySQL query to retrieve the data
  $query = "select * 
              from geoname
              where (country = 'US')
                and (state = 'PA')
                and (population > 25000)";
  $result = mysql_query($query);
  if (!$result)
    die("Unable to retrieve data");

  $now = mktime();

  // Prepare the Atom header
  $header = '<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom"
      xmlns:georss="http://www.georss.org/georss">
  <title>Cities in Pennsylvania</title>
  <subtitle>with population over 25,000</subtitle>
  <updated>'.date('c', $now).'</updated>
  <id>urn:978-1-4302-1620-9:chapter_10</id>
  <author>
    <name>Sterling Udell</name>
  </author>
  <link href="http://sterlingudell.com/bgmm/" rel="related" />
  <link href="http://'.$_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME'].'" 
        rel="self" type="application/atom+xml" />';

  // Generate GeoRSS entries for the retrieved data
  while ($row = mysql_fetch_array($result))
  {
    $urlname = str_replace('_', ' ', $row['name']);
    $entries = $entries.'
  <entry>
    <title>'.htmlentities($row['name']).'</title>
    <link href="http://en.wikipedia.org/wiki/'.$urlname.',_Pennsylvania"/>
    <id>urn:978-1-4302-1620-9:'.$row['country'].$row['state'].'_'.$urlname.'</id>
    <summary>Population '.$row['population'].'</summary>
    <updated>'.date('c', $now--).'</updated>
    <georss:point>'.$row['latitude'].' '.$row['longitude'].'</georss:point>
  </entry>';
  }

  // Prepare the Atom footer
  $footer = '
</feed>';

  // Output the final Atom/GeoRSS
  header('Content-type: application/atom+xml');
  echo $header;
  echo $entries;
  echo $footer;
?>