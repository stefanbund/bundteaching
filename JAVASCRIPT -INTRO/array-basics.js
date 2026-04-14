// 1. Creation
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial array:", fruits);

// 2. Accessing (Arrays are zero-indexed!)
console.log("First fruit:", fruits[0]); // Apple
console.log("Number of fruits:", fruits.length); // 3

// 3. Adding/Removing (at the end)
fruits.push("Date"); // Adds to end
console.log("After push:", fruits);
const lastFruit = fruits.pop(); // Removes from end
console.log("After pop:", fruits, "(Removed:", lastFruit, ")");

// 4. Iteration (Looping)
console.log("Looping through fruits:");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 5. Transformation (Map) - already in your other file
const loudFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Loud fruits:", loudFruits);

// 6. Searching (Find)
const found = fruits.find(fruit => fruit.startsWith("B"));
console.log("Fruit starting with B:", found);

// 7. Filtering
const filtered = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 letters:", filtered);
