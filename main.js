
//Coding Task 1 

//Write a function expression called reverseString that takes a string as an argument and returns the string reversed.

// john 'j' 'o' 'h' 'n' ['n' 'h' 'o' 'j'] => nhoj
const reverseString = str => str.split('').reverse().join('');

console.log(reverseString("John")); // Output: "nhoJ"
console.log(reverseString("James")); // Output: "semaJ"


//Coding Task 2

//Write a function expression called reverseArray(). It should accept an array as a single argument. 
// It should return a reversed array and it should work for any data type.

const reverseArray = arr => arr.slice().reverse();

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['I', 'Like', 'Javascript'])); // Output: ['Javascript', 'Like', 'I']
console.log(reverseArray([true, false, false])); // Output: [false, false, true]      




//Coding Task 3

//Write a function expression called mostExpensiveItem(). It should accept an array of items as a single argument.
//  It should return the item that has the most cost tied up, calculated by the amount in stock * price.
/* [
   { item: "irn bru", price: 3.25, stock: 50 },
   { item: "fanta", price: 3.98, stock: 45 },
   { item: "diet coke", price: 4.40, stock: 38 }, 
   { item: "7up", price: 3.99, stock: 42 }, 
] */

//Array of items
const items = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.40, stock: 38 }, 
  { item: "7up", price: 3.99, stock: 42 }, 
];  

const mostExpensiveItem = array => {
  let mostExpensive = {};

  for (let i = 0; i < array.length; i++) {
    const costTiedUp = array[i].price * array[i].stock;

    if (!mostExpensive.costTiedUp || costTiedUp > mostExpensive.costTiedUp) {
      mostExpensive = {
        item: array[i].item,
        price: array[i].price,
        stock: array[i].stock,
        costTiedUp: costTiedUp
      };
    }
  }

  return mostExpensive;
};

console.log(mostExpensiveItem(items));
