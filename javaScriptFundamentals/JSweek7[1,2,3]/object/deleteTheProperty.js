'use strict';
var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
      city: 'New York',
      country: 'US',
    },
  };
  // Remove the "age" property from the location object
delete user.location.age;
// Use pop to remove the last property of the user object
Object.keys(user).pop();
console.log(user);