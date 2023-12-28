'use strict';
var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
      city: 'New York',
      country: 'US',
    },
  };
  user.location.gender = 'male'; // Adding gender inside the location object using dot notation
  user['location']['id'] = 'one'; // Adding gender inside the location object using bracket notation
  console.log(user);