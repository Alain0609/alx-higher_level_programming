#!/usr/bin/node

const count = Math.floor(+process.argv[2]);

if (isNaN(count)) console.log('Missing number of occurrences');
for (let i = 0; i < count; i++) console.log('C is fun');
