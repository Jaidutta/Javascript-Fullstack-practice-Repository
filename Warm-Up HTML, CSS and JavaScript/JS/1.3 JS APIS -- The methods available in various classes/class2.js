// legCount, speak, name
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  // static methods are associated with the class and doe
  static speak() {
    console.log("hi there ");
  }
  
  greet() {
    console.log("Hello, there");
    
  }
}

let dog = new Animal("dog", 4, "bhow bhow"); // create object
let cat = new Animal("cat", 4, "meow");
Animal.speak(); // call function without instantiating an object