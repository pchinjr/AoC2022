// Read the input file and split it into an array of strings
const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");

// Create an array to store the calories of each Elf
const elfCalories: number[] = [];

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