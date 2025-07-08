// Customer Service Queue with Hash Table Implementation

class CustomerQueue {
  constructor() {
    this.table = {}; // Hash table to store customers
    this.counter = 1; // Counter to assign customer numbers
    this.MAX_CUSTOMERS = 5; // Maximum number of customers allowed in the queue
  }

  // Simple hash function to generate a key based on the customer's name
  hash(name) {
    return Array.from(name.toLowerCase()).reduce(
      (hash, char) => hash + char.charCodeAt(0), 0
    ) % 20; // Hashing to a range of 0-19
  }

  // Method to add a customer to the queue
  add(name) {
    if (this.counter > this.MAX_CUSTOMERS) {
      alert("❗ Sorry, the queue is full right now. Please try again later.");
      return;
    }

    const key = this.hash(name); // Generate hash key for the customer
    if (!this.table[key]) this.table[key] = []; // Initialize bucket if it doesn't exist
    
    // Add customer to the hash table
    this.table[key].push({ name, number: this.counter });
    alert(`✅ Welcome, ${name}! You've been added as customer #${this.counter}.`);
    this.counter++; // Increment the customer counter
  }

  // Method to service a customer based on their position
  service(position) {
    for (const key in this.table) {
      const customerIndex = this.table[key].findIndex(c => c.number === position);
      if (customerIndex !== -1) {
        const customer = this.table[key][customerIndex];
        this.table[key].splice(customerIndex, 1); // Remove the serviced customer
        
        // Clean up empty buckets
        if (this.table[key].length === 0) delete this.table[key];
        
        alert(` Now serving: ${customer.name} (Customer #${position}). Thank you for your patience!`);
        console.log("Updated queue:", this.table);
        return;
      }
    }
    alert(" Oops! That customer number doesn't exist. Please try again.");
  }
}

// Main program
const queue = new CustomerQueue();

// Add initial customers to the queue
console.log("Initializing customer queue...");
["Elaine", "Althea", "Angelo", "Lito", "Engelbert"].forEach(name => {
  queue.add(name);
});

console.log("Initial queue state:", queue.table);

// Main loop to service customers until the queue is empty
while (Object.keys(queue.table).length > 0) {
  const position = parseInt(prompt(
    `👥 Current customers waiting: ${Object.values(queue.table)
      .flat()
      .map(c => c.number)
      .sort((a, b) => a - b)
      .join(', ')}\n\nPlease enter the customer number you would like to service:`
  ));

  if (isNaN(position)) {
    alert(" Please enter a valid number.");
    continue; // Prompt again if input is invalid
  }

  queue.service(position); // Service the customer at the given position
}

alert("🎉 All customers have been served! The queue is now empty. Thank you for your service!");
console.log("Queue processing completed.");
