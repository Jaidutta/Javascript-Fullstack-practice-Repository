// Classes

/* In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).

For example
*/


class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // static methods are only accessible on the class itself, not on instances of the class
  static whoami(){
    return "I am a rectangle";
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.perimeter();
console.log(area);


/*
### Key Concepts

1. **Class Declaration**:
    - You declare a class using the `class` keyword.
    - Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.
2. **Constructor**:
    - A special method inside the class that is called when you create an instance (an object) of the class.
    - It’s used to initialize the properties of the object.
3. **Methods**:
    - Functions that are defined inside the class and can be used by all instances of the class.
4. **Inheritance**:
    - Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.
5. **Static Methods**:
    - Methods that belong to the class itself, not to instances of the class. You call them directly on the class.
6. **Getters and Setters**:
    - Special methods that allow you to define how properties are accessed and modified.
  */

  class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color;
  }

  area() {
    return 3.14 * this.radius * this.radius
  }

  perimeter() {
    return 2 * 3.14 * (this.radius)
  }

  paint() {
    console.log("painting with color " + this.color);
  }
}

class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log("painting with color " + this.color);
  }
}

const r1 = new Rectangle(10, 20, "red");
const c1 = new Circle(20, "yellow");
const s1 = new Square(300, "red");
console.log(r1.area())