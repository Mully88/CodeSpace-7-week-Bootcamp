//task 1 

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
