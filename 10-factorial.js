#!/usr/bin/env node
// 10-factorial.js
// A fully recursive BigInt factorial with step-by-step clarity.

// ────────────────────────────────────────────────────────────────
// STEP 1: Grab the raw argument string (or undefined if none provided)
const rawArg = process.argv[2];

// STEP 2: Try to parse it as a base-10 integer.
//         parseInt("123", 10) ⇒ 123
//         parseInt("foo", 10) ⇒ NaN
//         parseInt(undefined, 10) ⇒ NaN
const parsedNumber = parseInt(rawArg, 10);

// STEP 3: Decide on the numeric input to factorial.
//         If parseInt gave NaN, we'll treat it as “no valid number” ⇒ use 1.
//         Otherwise we’ll convert that Number into a BigInt.
let nBigInt;
if (isNaN(parsedNumber)) {
  // Non-numeric or missing ⇒ we define factorial = 1
  // so we’ll just set nBigInt = 1n and skip the recursive calls entirely.
  nBigInt = 1n;
} else {
  // Valid integer ⇒ crank it into a BigInt.
  // Note: BigInt(NaN) would throw, so we only call this branch when parsedNumber is a real integer.
  nBigInt = BigInt(parsedNumber);
}

// ────────────────────────────────────────────────────────────────
// STEP 4: Define our recursive factorial function on BigInt.
//         We explicitly handle the “0! = 1” and “1! = 1” base cases.
function factorial(x) {
  // Base case: if x is 0n or 1n or even negative (just in case),
  // we return 1n straight away.
  if (x <= 1n) {
    return 1n;
  }
  // Recursive step: x! = x * (x - 1)!
  return x * factorial(x - 1n);
}

// ────────────────────────────────────────────────────────────────
// STEP 5: Compute and print the result.
//
// If we landed in the “NaN” branch, nBigInt is already 1n,
// so factorial(1n) = 1n and we print “1”.
// Otherwise, we get the true factorial.
const resultBigInt = factorial(nBigInt);

// console.log on a BigInt prints in decimal, but to be explicit we .toString()
console.log(resultBigInt.toString());
