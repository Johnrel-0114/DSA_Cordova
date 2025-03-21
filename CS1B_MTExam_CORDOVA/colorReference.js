// this is where we storen the colors 
let colors =['black','white','brown']; 

/* we use loop in this part to ask the user the 3colors
*/
for (let i =0; i= 1; i++) {
    let colors =prompt(`Enter a color ${i + 1}:`);
    colors.push(colors);
    console.log(`You added: ${colors}`);
    console.log(`Updated list of colors: ${colors}`);
}