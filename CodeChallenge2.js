/* //task 1 

// Create the User class
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that says hello
  hello() {
    console.log(`hello, ${this.firstName} ${this.lastName}`);
  }
}

// Create the first instance
const user1 = new User('John', 'Doe');

// Print user1's full name
console.log(user1.firstName, user1.lastName);

// Say hello
user1.hello();

// Create the second instance
const user2 = new User('Jane', 'Doe');

// Say hello
user2.hello();
 */



/* //task 2

 class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for firstName
  get firstNameValue() {
    return this.firstName;
  }

  // Setter for firstName
  set firstNameValue(name) {
    this.firstName = name;
  }

  // Getter for lastName
  get lastNameValue() {
    return this.lastName;
  }

  // Setter for lastName
  set lastNameValue(name) {
    this.lastName = name;
  }

  // Updated hello() method
  hello() {
    return "Hello World!";
  }
}

// Create the user object
const user = new User("", "");

// Use setters to assign values
user.firstNameValue = "John";
user.lastNameValue = "Doe";

// Output
console.log(user.hello());
console.log(`My name is ${user.firstNameValue} ${user.lastNameValue}`); */
 



