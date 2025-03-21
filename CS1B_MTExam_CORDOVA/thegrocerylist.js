//  it ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    //  it ask for the number of items
    let itemCount = prompt("How many items do you want to add to the grocery list?");
    itemCount = Number(itemCount);

    // validate Input
    if (isNaN(itemCount) || itemCount <= 0) {
        alert("Please enter a valid number of items.");
    } else {
        let groceryList = [];

        //  it loops to collect grocery items
        for (let i = 0; i < itemCount; i++) {
            let item = prompt(`Enter item ${i + 1}:`);
            groceryList.push(item);
        }

        //  it creates sorted and reversed lists
        let groceryList_Sort = [...groceryList].sort(); // Sorted version
        let groceryList_Reverse = [...groceryList].reverse(); 

        // display the lists using alert()
        alert(`Original List: ${groceryList.join(", ")}\nSorted List: ${groceryList_Sort.join(", ")}\nReversed List: ${groceryList_Reverse.join(", ")}`);
    }
} else {
    alert("No grocery list created.");
}
