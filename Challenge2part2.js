//task 3

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
