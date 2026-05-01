class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }

  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

// Example usage:
const dog = new Animal("Dog", 4);
console.log(dog.describe()); // Output: "Dog has 4 legs"



const dogObj = {
  name: "doggie",
  legCount: 2,
  speaks: "bhow bhow"
}
const cat = {
  name: "cat",
  legCount: 2,
  speaks: "meow",
};

// animal x bhow bhows with 2 legs
console.log("animal " + dogObj["name"] + " " + dogObj["speaks"]);
console.log("animal " + cat["name"] + " " + cat["speaks"]);

function printStr(animal) {
    console.log("animal " + animal["name"] + " " + animal["speaks"]);
}

// Example usage with the dog object we discussed:
const dogObj1 = {
  name: "doggie",
  speaks: "bhow bhow"
};

printStr(dogObj1); // Output: "animal doggie bhow bhow"
// a repeating code was extracted into a function


// The Class Definition (The Blueprint)
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
}

// 1. Creating an Object Literal (Direct creation). If the body remains mostly same but only the properties/value changes, then create a class, a blueprint
let dog1 = {
  name: "dog",
  legCount: 4,
  speaks: "bow bow"
};

// 2. Creating a Class Instance (Using the blueprint)
let dogObj2 = new Animal("dog", 4, "bhow bhow");
