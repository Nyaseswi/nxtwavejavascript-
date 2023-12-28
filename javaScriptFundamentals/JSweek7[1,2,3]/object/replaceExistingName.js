'use strict';
var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
        city: 'Goa',
        country:'Thailand',
        
    }
}

// Replacing the "name" property using dot notation
user.name = 'Yaseswi';
// Replacing the "age" property using bracket notation
user['age'] = '26';
user.location['city'] = 'UK';
user.location.country="Abroad";
console.log(user);
