import { readFileSync } from 'fs';

// Read the input file and split it into lines
const input = readFileSync('input.txt', 'utf8').split('\n');

// Parse the input into an array of numbers
const calories = input.map(str => parseInt(str, 10));

// Filter out any NaN values from the input
calories = calories.filter(num => !isNaN(num));

// Find the Elf with the most calories by finding the maximum value in the array
const mostCalories = Math.max(...calories);

// Print the result
console.log(mostCalories);
