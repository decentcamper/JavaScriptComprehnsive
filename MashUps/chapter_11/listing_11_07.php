<?php
  // Bounding box from URL parameter

  $viewport = explode(',', $_GET['BBOX']);
  
  while ($viewport[0] > $viewport[2])
    $viewport[0] -= 360;
  
  $north = min(90,   (float) $viewport[3]);
  $south = max(-90,  (float) $viewport[1]);
  $east  = min(180,  (float) $viewport[2]);
  $west  = max(-180, (float) $viewport[0]);

  // Sort order, also from URL parameter
  if ($_GET['sort'] == 'coverage')
    $order_by = 'nCGRating desc, dtmWhen desc';
  else if ($_GET['sort'] == 'hookups')
    $order_by = 'nHookups desc, dtmWhen desc';
  else
    $order_by = 'nCount desc, dtmWhen desc';

  // Filter, from cookies
  $filter = '';
  if (is_numeric($_COOKIE['nCGRating']))
    $filter .= " and (nCGRating >= $_COOKIE[nCGRating])";
  if (is_numeric($_COOKIE['nHookups']))
    $filter .= " and (nHookups >= $_COOKIE[nHookups])";
  if (is_numeric($_COOKIE['nSatLon']))
    $filter .= " and (nSatLon = $_COOKIE[nSatLon])";

  // Connect to the database
  include 'mod_sf_db_connect.php';

  // Execute the database query
  $query = "select sParkName,
                   Campground.nParkID,
                   Avg(fLatitude) fLatitude,
                   Avg(fLongitude) fLongitude,
                   Round(Avg(nCGRating)) nCGRating,
                   Max(nHookups) nHookups,
                   Count(*) nCount,
                   sTownName,
                   sState,
                   date_format(dtExpire, '%Y-%m-%d') sExpire,
                   sResultsBlurb
              from Campsite
                   natural join Campground
                   left join Sponsor using (nParkID)
              where (fLatitude between $south and $north)
                and (fLongitude between $west and $east)
                and (bSuspect <> 'Y')
                $filter
            group by Campground.nParkID
              order by $order_by
              limit 20";
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

  // Return the results as KML
  include 'mod_produce_kml.php';
?>
