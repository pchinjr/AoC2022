## Prompt
Write and explain the solution for the following advent of code task. Write code in TypeScript that will execute in Deno, and assume that any input you need to process is available in file "input.txt".

--- Day 1: Calorie Counting ---

Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.

To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

For example, suppose the Elves finish writing their items' Calories and end up with the following list:

1000 2000 3000

4000

5000 6000

7000 8000 9000

10000 This list represents the Calories of the food carried by five Elves:

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories. The second Elf is carrying one food item with 4000 Calories. The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories. The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories. The fifth Elf is carrying one food item with 10000 Calories. In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

## Answer
To solve this task, we will first read the input file and store the calories of each Elf in an array. Then, we will find the Elf with the most calories by finding the maximum value in the array. Finally, we will print the result to the console.

```typescript
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";

// Read the input file and split it into an array of strings
const input = await readFileStr("input.txt");
const lines = input.split("\n");

// Create an array to store the calories of each Elf
const elfCalories = [];

// Parse the calories for each Elf from the input strings
let currentElf = 0;
for (const line of lines) {
  if (line === "") {
    // If the line is empty, we have reached the next Elf
    currentElf++;
  } else {
    // Parse the calorie value from the line and add it to the current Elf's calories
    const calories = parseInt(line);
    elfCalories[currentElf] = (elfCalories[currentElf] || 0) + calories;
  }
}

// Find the Elf with the most calories by finding the maximum value in the array
const maxCalories = Math.max(...elfCalories);

// Print the result to the console
console.log(`The Elf with the most calories is carrying ${maxCalories} calories.`);
```

## Prompt 
Nice! You did pretty good, the answer was correct, but the read file API in Deno is different. Now for part 2. 
--- Part Two ---
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

## Answer 
To solve this part of the task, we will first use the solution we developed in part 1 to find the Elf with the most calories. Then, we will sort the array of Elf calories in descending order and take the first three values to find the total calories carried by the top three Elves.
```typescript
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";

// Read the input file and split it into an array of strings
const input = await readFileStr("input.txt");
const lines = input.split("\n");

// Create an array to store the calories of each Elf
const elfCalories = [];

// Parse the calories for each Elf from the input strings
let currentElf = 0;
for (const line of lines) {
  if (line === "") {
    // If the line is empty, we have reached the next Elf
    currentElf++;
  } else {
    // Parse the calorie value from the line and add it to the current Elf's calories
    const calories = parseInt(line);
    elfCalories[currentElf] = (elfCalories[currentElf] || 0) + calories;
  }
}

// Sort the array of Elf calories in descending order
elfCalories.sort((a, b) => b - a);

// Find the total calories carried by the top three Elves
const topThreeCalories = elfCalories.slice(0, 3).reduce((sum, calories) => sum + calories, 0);

// Print the result to the console
console.log(`The top three Elves are carrying ${topThreeCalories} calories in total.`);

```