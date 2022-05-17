<?php 

function divider($a, $b){
    if($b == 0){
        throw new Exception("Pas de division par zero");
    }
    return $a/$b;
}

try{
    echo divider(5, 2);
} catch(Exception $e) { echo "Error: " . $e->getMessage(); }
?>