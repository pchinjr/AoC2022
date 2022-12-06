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

// Sort the array of Elf calories in descending order
elfCalories.sort((a, b) => b - a);

// Find the total calories carried by the top three Elves
const topThreeCalories = elfCalories.slice(0, 3).reduce((sum, calories) => sum + calories, 0);

// Print the result to the console
console.log(`The top three Elves are carrying ${topThreeCalories} calories in total.`);
