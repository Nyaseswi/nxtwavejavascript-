const person = {
    name: 'John',
    age: 30,
    profession: 'Engineer'
  };
  
  for (let property in person) {
    console.log(property + ': ' + person[property]);
  }
  