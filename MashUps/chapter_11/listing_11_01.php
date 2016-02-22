<?php
  // Process URL parameter
  $days = min(7, max(1, (integer) $_GET['days']));
  $filter = " and (dtmWhen > date_add(now(), interval -$days day))";
  $limit = 50;

  // Connect to the database
  include 'mod_sf_db_connect.php';

  // Execute the database query
  $query = "select sParkName,
                   Campground.nParkID,
                   Avg(fLatitude) fLatitude,
                   Avg(fLongitude) fLongitude,
                   Round(Avg(nCGRating)) nCGRating,
                   Max(nHookups) nHookups,
                   Max(dtmWhen) dtmWhen,
                   sTownName,
                   sState
              from Campsite
                   natural join Campground 
              where (bSuspect <> 'Y')
                $filter
              group by Campground.nParkID
              order by dtmWhen desc
              limit $limit";
  $result = mysql_query($query);
  if (!$result)
    die("Unable to retrieve data");

  // Build an array holding all the retrieved data to send to the formatting routine 
  $campgrounds = array();
  while ($row = mysql_fetch_array($result))
    $campgrounds[] = array('lat'   => round($row['fLatitude'], 6), 
                           'lon'   => round($row['fLongitude'], 6),
                           'id'    => $row['nParkID'],
                           'data'  => $row);

  if ($_GET['type'] == 'kml')
    // Return the results as KML
    include 'mod_produce_kml.php';
  else
    // Return the results as GeoRSS (actually Atom)
    include 'mod_produce_atom.php';
?>
