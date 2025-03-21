//this part is where you put the user information 
let dsa = [], webDev = [];
// It defines a function to add a student to a subject
function enroll(subject) {
    let name = prompt("Enter student name:");
    if (name) subject.push(name);
}
// Defines the students that have to be remove
function unenroll(subject) {
    let name = prompt("Enter student to remove:");
    let index = subject.indexOf(name);
    index !== -1 ? subject.splice(index, 1) : console.log("Not found.");
}
//this where defines function that which controls program flow
function main() {
// starts a infinite loop
    while (true) {
        let subject = prompt("(A) DSA, (B) WebDev").toUpperCase() === "A" ? dsa : webDev;
        while (true) {
            // it ask the user for an action
            let action = prompt("(A) Enroll, (B) Unenroll, (C) Switch, (D) Exit").toUpperCase();
            
            if (action === "A") enroll(subject);
            else if (action === "B") unenroll(subject);
            else if (action === "C") break;
            else if (action === "D") return console.log("DSA:", dsa, "WebDev:", webDev);
        }
    }
}