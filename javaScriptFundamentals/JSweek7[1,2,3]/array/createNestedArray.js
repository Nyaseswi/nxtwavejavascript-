var bestsellers = [
    'Contact',
    'Deception Point',
    'Digital Fortress',
    'Jurassic Park',
    'Shantaram',
    ['Author 1', 'Author 2', 'Author 3'], // Nested array with authors
  ];
  
  // Accessing elements in the nested array
  console.log(bestsellers[5]); // Output: ['Author 1', 'Author 2', 'Author 3']
  console.log(bestsellers[5][0]); // Output: 'Author 1'
  console.log(bestsellers[5][2]); // Output: 'Author 3'
  