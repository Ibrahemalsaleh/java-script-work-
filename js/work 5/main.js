// 1. Create and print object properties
const person1 = { name: "Adam", age: 25, gender: "male" };
console.log(person1.name, person1.age, person1.gender); // Output: Adam 25 male

// 2. Add property using dot notation
const person2 = { name: "Adam", age: 25 };
person2.gender = "male";
console.log(person2); // Output: { name: "Adam", age: 25, gender: "male" }

// 3. Add property using bracket notation
const person3 = { name: "Adam", age: 25 };
person3["gender"] = "male";
console.log(person3); // Output: { name: "Adam", age: 25, gender: "male" }

// 4. Access property value using dot notation
const person4 = { name: "Adam", age: 25 };
console.log(person4.name); // Output: Adam

// 5. Access property value using bracket notation
const person5 = { name: "Adam", age: 25 };
console.log(person5["name"]); // Output: Adam

// 6. Iterate with for-in loop
const person6 = { name: "Adam", age: 25, gender: "male" };
for (const key in person6) {
  console.log(`${key}: ${person6[key]}`); // Output: name: Adam, age: 25, gender: male
}

// 7. Object.keys()
const person7 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.keys(person7)); // Output: ["name", "age", "gender"]

// 8. Object.values()
const person8 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.values(person8)); // Output: ["Adam", 25, "male"]

// 9. Object.entries()
const person9 = { name: "Adam", age: 25, gender: "male" };
console.log(Object.entries(person9)); // Output: [["name", "Adam"], ["age", 25], ["gender", "male"]]

// 10. Object.assign() - Merging objects
const person10a = { name: "Adam", age: 25 };
const person10b = { gender: "male" };
const person10 = Object.assign({}, person10a, person10b); //Important: Create a new object to avoid modifying original objects.
console.log(person10); // Output: { name: "Adam", age: 25, gender: "male" }

// 11. Object.freeze() - Prevent changes
const person11 = { name: "Adam", age: 25 };
Object.freeze(person11);
// person11.age = 30;  // This will have no effect in strict mode, and will throw an error in non-strict mode.
// person11.newProperty = "test"; // This will have no effect in strict mode, and will throw an error in non-strict mode.
console.log(person11); // Output: { name: "Adam", age: 25 }

// 12. Object.seal() - Prevent adding/deleting properties, but allow modifying values
const person12 = { name: "Adam", age: 25 };
Object.seal(person12);
person12.age = 30; // Allowed
// person12.newProperty = "test"; // Not allowed, will have no effect in strict mode and will throw an error in non-strict mode.
console.log(person12); // Output: { name: "Adam", age: 30 }