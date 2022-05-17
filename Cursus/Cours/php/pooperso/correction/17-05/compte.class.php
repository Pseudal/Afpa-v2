<?php 

    class Compte{
        private string $numero = "";
        private string $titulaire = ""; 
        private float $solde = 0;
        private static $plafond = 1200;
        const Type_1 = "Compte Courant";
        const Type_2 = "Compte Epargne";
        private static $nb = 0;
        
        public function __construct($n, $t, $s){
            $this->numero = $n;
            $this->titulaire = $t;
            $this->solde = $s;
            self::$nb = self::$nb + 1 ;
        }
        /**
         * Get the value of numero
         */ 
        public function getNumero()
        {
                return $this->numero;
        }

        /**
         * Set the value of numero
         *
         * @return  self
         */ 
        public function setNumero($numero)
        {
                $this->numero = $numero;

                return $this;
        }

        /**
         * Get the value of titulaire
         */ 
        public function getTitulaire()
        {
                return $this->titulaire;
        }

        /**
         * Set the value of titulaire
         *
         * @return  self
         */ 
        public function setTitulaire($titulaire)
        {
                $this->titulaire = $titulaire;

                return $this;
        }

        /**
         * Get the value of solde
         */ 
        public function getSolde()
        {
                return $this->solde;
        }

        /**
         * Set the value of solde
         *
         * @return  self
         */ 
        public function depot($montant){
            $this->solde = $this->solde + $montant;
        }
        public function __destruct(){
            // echo "object destroy";
        }

        /**
         * Get the value of plafond
         */ 
        public static function getPlafond()
        {
                return self::$plafond;
        }

        /**
         * Set the value of plafond
         *
         * @return  self
         */ 
        public static function setPlafond($plafond)
        {
                Compte::$plafond = $plafond;

                return $this;
        }
        public static function getNb()
        {
                return self::$nb;
        }

        /**
         * Set the value of plafond
         *
         * @return  self
         */ 
        public static function setNb($nb)
        {
                Compte::$nb = $nb;

                return $this;
        }
        //////////////////////NEW///////////////////////
        public function Retrait($retraitVal)
        {
                return $this->solde = $this->solde - $retraitVal;
        }

        public function virement($VirVal, &$from, &$to)
        {
                do{
                        if($this->getNumero() != $from->getNumero()){
                                echo "erreur, virement inccorect <br/>";
                                break;
                        } else {
                                $from->Retrait($VirVal);
                                $to->depot($VirVal);
                        }
                }while(0);
        }         
    }

?>
