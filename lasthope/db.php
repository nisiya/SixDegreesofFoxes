<?php

$mysqli = new mysqli('127.0.0.1', 'root', '', 'degrees_db');

echo $mysqli->query('select * from Users;');

 ?>
