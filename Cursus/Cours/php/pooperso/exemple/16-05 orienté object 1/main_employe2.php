<?php

require_once('Adresse.class.php');
require_once('Employe2.class.php');

$tab_employes = [];

$adresse1 = new Maison();
$adresse2 = new Maison();
$adresse3 = new Maison();
$empl1 = new Employe2();
$empl2 = new Employe2();
$empl3 = new Employe2();

$adresse1->setNumero(05)
         ->setRue("Henry")
         ->setCode_postal(78000)
         ->setVille("St-Cloud");
$adresse2->setNumero(06)
         ->setRue("Henry2")
         ->setCode_postal(78002)
         ->setVille("St-Cloud2");
$adresse3->setNumero(07)
         ->setRue("Henry3")
         ->setCode_postal(78003)
         ->setVille("St-Cloud3");


$empl1->setNom("Dupond")
         ->setPrenom("Thomas")
         ->setPoste("Developpeur web")
         ->setIsCadre(true)
         ->setAdresse($adresse1)
         ->setSecret(md5($empl1->getNom()));
$empl2->setNom("Dupond2")
         ->setPrenom("Thomas2")
         ->setPoste("Developpeur web2")
         ->setIsCadre(false)
         ->setAdresse($adresse2)
         ->setSecret(md5($empl2->getNom())); 
$empl3->setNom("Dupond3")
         ->setPrenom("Thomas3")
         ->setPoste("Developpeur web3")
         ->setIsCadre(true)
         ->setAdresse($adresse3)
         ->setSecret(md5($empl3->getNom()));  
         
$tab_employes = [$empl1, $empl2, $empl3];
echo "<pre>";
var_dump($tab_employes);
echo "</pre>";

?>
<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <title>Document</title>
</head>

<body>
        <div class="container">
                <h1>Liste des employés</h1>
                <table class="table table-striped">
                        <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Poste</th>
                                <th>Cadre</th>
                                <th>Adresse</th>
                        </tr>
                        <?php foreach ($tab_employes as $empl) { ?>
                                <tr>
                                        <td><?= $empl->getNom(); ?></td>
                                        <td><?= $empl->getPrenom(); ?></td>
                                        <td><?= $empl->getPoste(); ?></td>
                                        <td><?= ($empl->getIsCadre()) ? "Cadre" : "Employé"; ?></td>
                                        <td><?= $empl->getAdresse()->getNumero()." ".$empl->getAdresse()->getRue()." ".$empl->getAdresse()->getVille()." ".$empl->getAdresse()->getcode_postal(); ?></td>
                                </tr>
                        <?php } ?>
                </table>
        </div>
</body>

</html>