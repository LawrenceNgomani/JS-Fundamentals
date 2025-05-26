#!/usr/bin/env node

// Linear, iterative factorial in BigInt
function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

const raw = process.argv[2] || '';
// only accept strings of digits
if (!/^[0-9]+$/.test(raw)) {
  console.log('1');
  process.exit(0);
}

const n = BigInt(raw);
console.log(factorial(n).toString());
