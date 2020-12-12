class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(offspring) {
    this.offspring.push(offspring);
    offspring.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
  //  console.log("Method", vampire.numberOfVampiresFromOriginal);
  //  console.log("Method2", this.numberOfVampiresFromOriginal);
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    

  }
}

const original = new Vampire("Original","unknown");
const ansel = new Vampire("Ansel", "1000 AD");
const bart = new Vampire("Bart", "1001 AD");
const elgort = new Vampire("Elgort", "1002 AD");
const sarah = new Vampire("Sarah", "1003 AD");
const andrew = new Vampire("Andrew", "1004 AD");

original.addOffspring(ansel);
original.addOffspring(bart);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);

original.addOffspring(ansel);
original.addOffspring(bart);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);






module.exports = Vampire;

