'use strict';
var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
      city: 'New York',
      country: 'US',
    },
  };
user.age = 30; //pass by value 
user.location.city = 'Los Angeles'; //pass by reference 
user.location.village = 'kadapa';

  console.log(user);