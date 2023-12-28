const fruits = ['kiwi', 'apple', 'grapes', 'watermelon'];

// Use splice() to remove elements from index 0 up to, but not including, index 1
fruits.splice(0,2);//0 1 delete avthundi last no. doesnt count 


// Display the modified array
console.log(fruits);

const animals = {
    name: 'rat',
    age: 20,
    city: 'vizag',
  };
  
  // Extract the properties you want to splice
  const splicedResult = {
    name: animals.name,
    age: animals.age,
  };
  
  // Remove the properties from the original object
  delete animals.name;
  delete animals.age;
  
  console.log(splicedResult);
  console.log(animals);
  