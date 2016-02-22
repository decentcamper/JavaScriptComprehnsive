<?php
  $lat1 = $_GET['lat1'];
  $lon1 = $_GET['lon1'];
  $lat2 = $_GET['lat2'];
  $lon2 = $_GET['lon2'];

  $distance =  (6371008 * acos(cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * 
                            cos(deg2rad($lon2) - deg2rad($lon1)) + 
                            sin(deg2rad($lat1)) * sin(deg2rad($lat2))));

  echo 'Distance is '.round($distance).' meters, '.
       round($distance / 1609, 3).' miles.';  
?>
