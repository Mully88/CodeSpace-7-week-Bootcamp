/* //task 3

// Superclass: User
class User {
  constructor() {
    this.username = "";
  }

  // Setter for username
  set setUsername(name) {
    this.username = name;
  }
}

// Subclass: Admin inherits User
class Admin extends User {
  expressYourRole() {
    return "Admin";
  }

  sayHello() {
    return `Hello admin, ${this.username}`;
  }
}

// Create admin object
const admin = new Admin();

// Set username to "Balthazar"
admin.setUsername = "Balthazar";

// Output
console.log(admin.expressYourRole());
console.log(admin.sayHello());
 */


//task 4

// Base class: User
/* class User {
  constructor() {
    this.numberOfArticles = 0;
  }

  // Setter
  setNumberOfArticles(num) {
    this.numberOfArticles = num;
  }

  // Getter
  getNumberOfArticles() {
    return this.numberOfArticles;
  }

  // Polymorphic method (to be overridden)
  calcScores() {
    return 0;
  }
}

// Subclass: Author
class Author extends User {
  calcScores() {
    return this.numberOfArticles * 10 + 20;
  }
}

// Subclass: Editor
class Editor extends User {
  calcScores() {
    return this.numberOfArticles * 6 + 15;
  }
}

// Create Author object
const author = new Author();
author.setNumberOfArticles(8);
console.log("Author scores:", author.calcScores());

// Create Editor object
const editor = new Editor();
editor.setNumberOfArticles(15);
console.log("Editor scores:", editor.calcScores());
 */



//task 5

// Abstract class: User
class User {
  constructor() {
    this.username = "";
    if (this.constructor === User) {
      throw new Error("User is an abstract class and cannot be instantiated directly");
    }
  }

  // Setter
  setUsername(name) {
    this.username = name;
  }

  // Getter
  getUsername() {
    return this.username;
  }

  // Abstract method
  stateYourRole() {
    throw new Error("Abstract method 'stateYourRole()' must be implemented in child classes");
  }
}

// Admin class
class Admin extends User {
  stateYourRole() {
    return "admin";
  }
}

// Viewer class
class Viewer extends User {
  stateYourRole() {
    return "viewer";
  }
}

// Create admin object
const admin = new Admin();
admin.setUsername("Balthazar");
console.log(admin.getUsername(), "=>", admin.stateYourRole());

// Create viewer object
const viewer = new Viewer();
viewer.setUsername("Melchior");
console.log(viewer.getUsername(), "=>", viewer.stateYourRole());
