//Johnrel A. Cordova
//CS1B

let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let age = (prompt("Enter your age:")) || 0;
let classRole = prompt("Enter your class role (Officer, Student, Teacher):").trim().toLowerCase();
let course = prompt("Enter your course (BSCS, BSM, BAEL):");

if (["BSCS", "BSM", "BAEL"].includes(course)) {
    let iterations = Math.floor(age / 4);
    if (!["officer", "student", "teacher"].includes(classRole)) {
        alert("Invalid class role. Defaulting to Student.");
    }
    for (let i = 0; i < iterations; i++) {
        console.log(`${i + 1}: ${name}`);
    }
} else {
    alert("Invalid course. Please enter BSCS, BSM, or BAEL.");
}
