const animals = {
    name: 'rat',
    age: 20,
    city: 'vizag',
  };
  
  // Convert the object values into an array
  const animalArray = Object.values(animals);
  
  // Use the splice method on the array
  const splicedResult = animalArray.splice(0, 2);
  
  console.log(splicedResult);
  