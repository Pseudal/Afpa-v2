<?php require_once('./main_compte.php');
echo "<br/>";
echo "compte 1: ".$compte1->getSolde()."<br/>";
echo "compte 2: ".$compte2->getSolde()."<br/>";
$compte1->depot(800);
echo "compte 1 après dépot de 800€: ".$compte1->getSolde()."<br/>";
$compte1->Retrait(50);
echo "compte 1 après Retrait de 50: ".$compte1->getSolde()."<br/>";
$compte1->virement(50, $compte1, $compte2);
echo "compte 1 après virement: ".$compte1->getSolde()."<br/>";
echo "compte 2 après virement: ".$compte2->getSolde()."<br/>";


?>