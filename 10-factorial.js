#!/usr/bin/node
function factorial (n) {
  // base case: 0!, 1! and any “invalid” => 1
  if (n <= 1n) return 1n;
  // recursive step
  return n * factorial(n - 1n);
}

const raw = process.argv[2];
const parsed = parseInt(raw);
if (isNaN(parsed)) {
  console.log(1);
} else {
  // turn the positive integer into a BigInt, recurse, then print
  console.log(factorial(BigInt(parsed)).toString());
}
