<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
                      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    ...
    <?php
      include 'inc_sf_common.php';
    
      // Initialize variables
      $rows = 1;
      $sites = array();
      $totalRating    = 0;
      $totalLatitude  = 0.0;
      $totalLongitude = 0.0;
    
      // Clean the campground ID parameter
      $parkID = (integer) $_GET['nParkID'];
    
      // Connect to the database
      include 'mod_sf_db_connect.php';
      
      // Execute the database query
      $query = "select date_format(dtmWhen, '%b %e, %Y') sWhen,
                       Campsite.*,
                       sParkName
                  from Campsite
                       natural join Campground
                  where (Campsite.nParkID = $parkID)
                  order by dtmWhen asc";
      $result = mysql_query($query);
      if ($result)
      {
        // Query successful
        $rows = max(1, mysql_num_rows($result));
    
        while ($row = mysql_fetch_array($result))
        {
          // Accumulate data for the campground as a whole
          $totalRating    += $row['nCGRating'];
          $totalLatitude  += $row['fLatitude'];
          $totalLongitude += $row['fLongitude'];
          $maxHookups = max($maxHookups, $row['nHookups']);
          $parkName = htmlentities($row['sParkName']);
    
          // Convert numeric hookup field into a text description
          switch ($row['nHookups']) 
          {
            case -1: $hookups = 'Boondocking Area'; break;
            case  0: $hookups = 'Primitive Campsite'; break;
            case  1: $hookups = 'Electric Hookups'; break;
            case  2: $hookups = 'Full Hookups';
          }
    
          // Generate a JSON map data point for this site
          $icon = fsCGIcon($row['nCGRating'], $row['nHookups']);
          $sites[] = "
              {iconUrl: '$icon', number: '".$row['sSiteNum']."', 
               hookups: '$hookups', date: '$row[sWhen]', satellite: $row[nSatLon], 
               latitude: $row[fLatitude], longitude: $row[fLongitude], 
               rating: '".$GLOBALS['asCGRating'][$row['nCGRating']]."'}";
        }
      }
    
      $parkRating = round($totalRating / $rows);
      switch ($parkRating) 
      {
        case 0:
        case 1:  $color = '#FF0E0E'; break;
        case 2:  $color = '#FFFF0E'; break;
        case 3:  $color = '#0EFF0E'; break;
      }
    
      // Output the final JSON
      echo "
    <script type=\"text/javascript\">
      var campground = {name: '$parkName', 
        iconUrl: '".fsCGIcon($parkRating, $maxHookups)."', color: '$color',
        latitude: {$totalLatitude}, longitude: {$totalLongitude}};
    
      var campsites = [".join($sites, ",")."];
    </script>";
    ?>
  </head>
  <body>
    ...
  </body>
</html>