#!/usr/bin/env node
// 10-factorial.js

// recursive factorial in BigInt
function factorial(n) {
  if (n <= 1n) return 1n;
  return n * factorial(n - 1n);
}

const raw = process.argv[2];
const parsed = parseInt(raw, 10);

// if missing or not a number, factorial is defined as 1
if (isNaN(parsed)) {
  console.log('1');
} else {
  // compute factorial in BigInt and print as decimal string
  const n = BigInt(parsed);
  console.log(factorial(n).toString());
}
