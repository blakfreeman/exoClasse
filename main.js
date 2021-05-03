// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.


class Personnage {
    constructor(age, nom,ville) {
      this.age = age;
      this.nom = nom;
      this.ville = ville;
      this.sePresenter = () => {
        return console.log(` bonjour, je m'appelle ${this.nom}`);
    }
    }
  }




// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1

let anthony = new Personnage(32, "Anthony", "Bxl");

let meghie = new Personnage(30, "Meghie", "Rod");


console.log(anthony, meghie,);
anthony.sePresenter();
meghie.sePresenter();