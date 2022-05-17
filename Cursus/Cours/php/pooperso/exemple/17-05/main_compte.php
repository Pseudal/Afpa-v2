<?php 

require_once('./compte.class.php');
$compte1 = new Compte("#123", "Dupond", 150);
$compte2 = new Compte("#456", "Dupond2", 500);
$tab_compte = [];

// unset($compte2);
array_push($tab_compte, $compte1, $compte2);
var_dump($tab_compte);

echo "<ol>";
    foreach($tab_compte as $compte){
        echo "<li>".$compte->getNumero()."-".$compte->getTitulaire()." ".Compte::Type_2."</li>";
    }
echo "</ol>";

echo Compte::Type_1;
echo "<br/>";
echo compte::getPlafond();
echo "<br/>";
echo compte::getNb();
?> 