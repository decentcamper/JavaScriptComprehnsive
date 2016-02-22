<?php
  $db = mysql_connect('localhost', 'root', '')
    or die('Could not connect: ' . mysql_error());

  mysql_select_db('gmaps_book') 
    or die('Could not select database');
?>
