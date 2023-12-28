'use strict';
var bestsellers = [
    'Contact',
    'Deception Point',
    'Digital Fortress',
    'Jurassic Park',
    'Shantaram',
  ];
  console.log(bestsellers[0]); //index
  console.log(typeof(bestsellers)); //type
  console.log(bestsellers.length); //length
  console.log(bestsellers[bestsellers.length - 1]);//access last item in array using length 
bestsellers.push('Freakonomics'); //added new item at the end with push 
bestsellers.pop()//removes last item Freakonomics deleted 
  bestsellers[0] = 'Replaced contacts to connect'; //replaced with index number 
  console.log('Bestsellers:',bestsellers.toString());
  console.log(bestsellers[10]);//access unexisiting property check typeof

