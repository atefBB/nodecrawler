<?php

$keywords = join(' ', array_slice($argv, 1));

$command = "node index.js {$keywords}";

exec($command, $output, $return);

var_dump($output, $return);die;
