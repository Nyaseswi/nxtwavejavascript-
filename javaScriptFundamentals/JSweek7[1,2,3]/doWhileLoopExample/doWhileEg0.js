let m = 0,
  n = 1,
  oddNumbers = [];
  do {
    oddNumbers.push(n);
    n += 2;
  } while (n <= 100);
  console.log(`Odd Numbers (0 - 100): ${oddNumbers.toString()}`);