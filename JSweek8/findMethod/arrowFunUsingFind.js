// Sample array of objects
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
  ];
  
  // Define a condition to find a person older than 30
  const condition = person => person.age > 30;
  
  // Use the find() method to search for the first person that matches the condition
  const result = people.find(condition);
  
  if (result) {
    console.log(`Found a person: ${result.name}, age ${result.age}`);
  } else {
    console.log("No person found matching the condition.");
  }
  