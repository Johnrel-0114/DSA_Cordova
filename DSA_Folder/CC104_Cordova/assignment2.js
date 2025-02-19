// Variable initialization

let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

// 1. Display combined sum
const sum = a + b + c + Number(d) + e;
console.log("Combined Sum:", sum);

// 2. Comparison operations
console.log("\nComparisons between d and e:");
console.log("d > e:", d > e);
console.log("d < e:", d < e);
console.log("d <= e:", d <= e);
console.log("d >= e:", d >= e);
console.log("d === e:", d === e);

// 3. Mathematical operations
// Subtract all values
const subtraction = a - b - c - Number(d) - e;
console.log("\nSubtraction Result:", subtraction);

// Multiply and divide
const multiplyDivide = (a * c) / e;
console.log("Multiplication/Division Result:", multiplyDivide);

// Exponent
const exponent = e ** c;
console.log("Exponent Result:", exponent);

// 4. Reassignment attempt
try {
    console.log("\nReassignment Attempt:");
    c = 3; // Reassigning c's value
    e = c; // This will throw an error
    console.log("New e value:", e);
} catch (error) {
    console.log("Error:", error.message);
}
<span class="x1e558r4">300</span>