#!/usr/bin/env node
// factorial: compute n! using BigInt and an iterative loop

// Compute n! in O(n) time, all in BigInt
function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Grab the argument (or empty string if none)
const raw = process.argv[2] || '';

// If it's not purely digits, bail out with 1
if (!/^[0-9]+$/.test(raw)) {
  console.log('1');
  process.exit(0);
}

// Convert straight to BigInt and compute
const n = BigInt(raw);
console.log(factorial(n).toString());
