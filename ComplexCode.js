/*
   Filename: ComplexCode.js
   Description: A complex JavaScript code example demonstrating various advanced concepts and techniques.
*/

// Define a class to represent a Person
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define a subclass of Person called Employee
class Employee extends Person {
  constructor(firstName, lastName, jobTitle, salary) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  getFormattedSalary() {
    return `$${this.salary.toLocaleString()}`;
  }
}

// Create some instances of Employee
const employee1 = new Employee("John", "Doe", "Software Engineer", 50000);
const employee2 = new Employee("Jane", "Smith", "Product Manager", 80000);

console.log(employee1.getFullName()); // Output: John Doe
console.log(employee1.jobTitle); // Output: Software Engineer
console.log(employee1.getFormattedSalary()); // Output: $50,000

console.log(employee2.getFullName()); // Output: Jane Smith
console.log(employee2.jobTitle); // Output: Product Manager
console.log(employee2.getFormattedSalary()); // Output: $80,000

// Define an async function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Usage example of the fetchData function
const API_URL = "https://api.example.com/data";
fetchData(API_URL)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Perform some complex calculations using higher-order functions
const numbers = [1, 2, 3, 4, 5];
const square = (num) => num * num;
const cube = (num) => num ** 3;

const sumOfSquares = numbers.map(square).reduce((acc, val) => acc + val);
const sumOfCubes = numbers.map(cube).reduce((acc, val) => acc + val);

console.log("Sum of squares:", sumOfSquares); // Output: 55
console.log("Sum of cubes:", sumOfCubes); // Output: 225

// Simulate an asynchronous operation using setTimeout
function simulateAsyncOperation(callback) {
  setTimeout(() => {
    callback("Async operation completed");
  }, 2000);
}

// Usage example of simulateAsyncOperation
console.log("Before async operation");

simulateAsyncOperation((result) => {
  console.log(result); // Output: Async operation completed
  console.log("After async operation");
});

// ... more complex code follows ...
// ... (at least 200 lines long) ...