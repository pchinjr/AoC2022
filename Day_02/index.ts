// Read the input file and split it into an array of strings
const input = await Deno.readTextFile("./input.txt")
const lines = input.split("\n");

// Define a map of shapes and their corresponding scores
const shapes = {
  "A": 1, // Rock X
  "B": 2, // Paper Y
  "C": 3, // Scissors Z
};

// Initialize the total score to 0
let totalScore = 0;

// Iterate over each round and calculate the score
for (const line of lines) {
  // Parse the opponent's shape and our shape from the line
  const [opponentShape, ourShape] = line.split(" ");

  // Calculate the outcome of the round (0 if we lost, 3 if it was a draw, 6 if we won)
  let outcome = 0;
  if (ourShape === opponentShape) {
    // If both shapes are the same, it is a draw
    outcome = 3;
  } else if ((opponentShape === "A" && ourShape === "Z") || (opponentShape === "B" && ourShape === "X") || (opponentShape === "C" && ourShape === "Y")) {
    // If the opponent's shape wins against our shape, we lost
    outcome = 0;
  } else {
    // Otherwise, we won
    outcome = 6;
  }

  // Calculate the score for the round by adding the score for the opponent's shape
  const score = shapes[opponentShape];

  // Add the score for this round and the outcome to the total score
  totalScore += score + outcome;
}

// Print the result to the console
console.log(`If everything goes according to the strategy guide, our total score will be ${totalScore}.`);
