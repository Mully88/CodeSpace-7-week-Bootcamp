// Simon Mulligan
//EC1964474

/* traditional function
function greet(name) {
  return "hello, my name is " + name
}

traditional anonymous function
let greet = function (name) {
  return "hello my name is " + name
}


arrow function
remove the word function, and replace it with an arrow after the parameter
let greet = (name) => {
  return "hello my name is " + name
}

if your function only has one line, you can also remove the "return" and braces.
let greet = (name) => "hello my name is " + name

if you only have one parameter, you can remove the brackets around that too.
if you have zero parameters, or more than one, you will still need the bracket
let greet = name => "hello my name is " + name;

call the function just like any other
console.log(greet("John"));
 */





//Q1 

/* let greet = name => "hello " + name;

console.log(greet("John"));
console.log(greet("James"));
 */




//Q2

/* function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false           
 */

// arrow function version
/* let isEvenArrow = num => num % 2 === 0;
console.log(isEvenArrow(4)); // true
console.log(isEvenArrow(7)); // false */







//Q3

// traditional function
/* function counterFunc(counter) {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }
  
  return counter;
}
console.log(counterFunc(82)); // 83
console.log(counterFunc(101)); // 0 */

// arrow function version
/* let counterArrow = counter => {
  if (counter > 100) {  
    counter = 0;
    } else {
        counter++;

    }
    return counter;
}
console.log(counterArrow(82)); // 83
console.log(counterArrow(101)); // 0
 */





//Q4

// traditional function
/* function nameAge(name, age) {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}
nameAge("Simon", 21); */


// arrow function version
/* let nameAgeArrow = (name, age) => {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
}   
nameAgeArrow("Simon", 29);  */



//Q5

// traditional function
/* function printOnly() {
  console.log("printing");
}
printOnly(); */

// arrow function version
/* let printOnlyArrow = () => console.log("printing");
printOnlyArrow(); */




//Q6

// traditional function
function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(5, 10)); // 15
console.log(sum(200, 300)); // 500


// arrow function version
let sumArrow = (num1, num2) => num1 + num2;
console.log(sumArrow(5, 10)); // 15
console.log(sumArrow(200, 300)); // 500 