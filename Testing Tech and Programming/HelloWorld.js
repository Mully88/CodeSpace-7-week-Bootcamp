// Simon Mulligan
//EC1964474


// Students array with 5 students
let students = [
    {name: "Alice", grade: 90},
    {name: "Bob", grade: 75},
    {name: "Charlie", grade: 88},
    {name: "Diana", grade: 92},
    {name: "Eve", grade: 78}
];

// Function to print all students
function printAllStudents() {
    for (let i = 0; i < students.length; i++) {
        console.log("Name: " + students[i].name + ", Grade: " + students[i].grade);
    }
}

// Function to calculate average grade
function calculateAverage() {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }
    return total / students.length;
}

console.log("Initial students:");
printAllStudents();
console.log("Average grade:", calculateAverage());

// Add a new student
students.push({ name: "Simon", grade: 90 });

// Change the second student's grade to 85
students[1].grade = 85;

// Print updated results
console.log("\nUpdated students:");
printAllStudents();
console.log("New average grade:", Math.round( calculateAverage()));




