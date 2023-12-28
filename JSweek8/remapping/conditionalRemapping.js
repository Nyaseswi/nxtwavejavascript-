'use strict';

const citizens = [
  {
    id: 1,
    name: 'John Smith',
    age: 65,
  },
  {
    id: 2,
    name: 'Roger McShane',
    age: 68,
  },
  {
    id: 3,
    name: 'Dolly McShane',
    age: 55,
  },
  {
    id: 4,
    name: 'Joan Mockery',
    age: 61,
  },
  {
    id: 5,
    name: 'Joan Mockery',
    age: 45,
  },
];
const seniorCitizens = citizens.map(
    function (person) { // person argument
    person.isSeniorCitizen = person.age >= 60; //>60 return true if not false 
    return person;
  }
  );
  console.log(seniorCitizens);

