const compute = function(length = 100, area, width) {
    return length + width + area;
  };
  
  const user = {
    name: 'jane',
    age: 23,
    job: 'Professor'
  };
  
  console.log(`Jane's profession is ${user.job}`);
  console.log(compute(10, 10, 10));
  