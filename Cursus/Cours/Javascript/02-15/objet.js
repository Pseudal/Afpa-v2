const John = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
  const Nico = {
    firstName: "Nico",
    lastName: "Eod",
    age: 200,
    eyeColor: "green",
    marcher:function(){return "je sais marcher"},
    affichage: function(){
        console.log("la marque de cette voiture est " + this.firstName);
    }
  };

  console.log(John.age);
  Nico.affichage();

for (var i in John) {
      console.log(John[i]);
}