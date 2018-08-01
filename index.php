<?php
$command = "node index.js";
exec($command, $output, $return);

var_dump($output, $return);die;
