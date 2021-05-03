// ## EXO1
// ## Traduire le code suivant en class et en instances

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };

class Lieux {
  constructor (nom,contenue,ingredients) {
    this.nom = nom
    this.contenue = contenue;
    this.ingredients = ingredients;
  } 
 };

  
let maison = new Lieux("Maison",[]," ")
let epicerie = new Lieux("epicerie",[]," ",)

class ingredients {
  constructor (nom,etat,prix) {
    this.nom = nom;
    this.etat = etat;
    this.prix = prix;
  }
}

let poivron = new ingredients('poivron',"entier",1);

let oignon = new ingredients('oignon',"entier",2);

let oeuf = new ingredients('oeuf',"entier",4);

let epice = new ingredients('epice',"moulu",3.25);

let paprika = new ingredients('paprika',"moulu",1,25);

let fromage = new ingredients('fromage',"coupé",1,06);




class Personne {
  constructor (nom,
lieu,
argent,
panier,) {
    this.nom = nom;
    this.lieu = lieu;
    this.argent = argent;
    this.panier = panier;
  }
  
  se_deplacer(x){
   
  }
  payer(x){
   
  }


  couper(x,y){
   
  }
}

let personnage = new Personne('maxime',"néant",100,[])

// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

// ### ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };

// ### Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }