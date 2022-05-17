<?php 

require_once('./compte.class.php');
$compte1 = new Compte("#123", "Dupond", 150);
$compte2 = new Compte("#456", "Dupond2", 500);
$tab_compte = [];

// unset($compte2);
array_push($tab_compte, $compte1, $compte2);


?>