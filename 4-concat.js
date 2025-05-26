#!/usr/bin/node
const firstArg = process.argv[2];
const secondArg = process.argv[3];

console.log(`${firstArg || 'undefined'} is ${secondArg || 'undefined'}`);
