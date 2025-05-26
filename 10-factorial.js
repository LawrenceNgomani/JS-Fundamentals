function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  // Recursive case: n * factorial(n-1)
  return n * factorial(n - 1);
}

// Get command line argument
const raw = process.argv[2];
const parsed = parseInt(raw, 10);

// Handle NaN case (missing argument or non-numeric)
if (isNaN(parsed)) {
  console.log(1);
} else {
  console.log(factorial(parsed));
}