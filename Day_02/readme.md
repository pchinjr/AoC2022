## Prompt
--- Day 2: Rock Paper Scissors ---
The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?

## Answer

To solve this task, we will read the input file and parse the strategy guide. Then, we will iterate over each round and calculate the score based on the opponent's shape, our shape, and the outcome of the round. Finally, we will print the total score to the console.

```typescript
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";

// Read the input file and split it into an array of strings
const input = await readFileStr("input.txt");
const lines = input.split("\n");

// Define a map of shapes and their corresponding scores
const shapes = {
  "A": 1, // Rock
  "B": 2, // Paper
  "C": 3, // Scissors
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
  } else if ((opponentShape === "A" && ourShape === "C") || (opponentShape === "B" && ourShape === "A") || (opponentShape === "C" && ourShape === "B")) {
    // If the opponent's shape wins against our shape, we lost
    outcome = 0;
  } else {
    // Otherwise, we won
    outcome = 6;
  }

  // Calculate the score for the round by adding the score for our shape and the outcome
  const score = shapes[ourShape] + outcome;

  // Add the score for this round to the total score
  totalScore += score;
}

// Print the result to the console
console.log(`If everything goes according to the strategy guide, our total score will be ${totalScore}.`);

```

## Prompt
That's not the right answer; your answer is too high.

## Answer
The problem is that we are using the map shapes to determine the score of our shape, but we should be using the map to determine the score of the opponent's shape instead. We can fix this by changing the line const score = shapes[ourShape] + outcome; to const score = shapes[opponentShape] + outcome;.

```typescript

import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";

// Read the input file and split it into an array of strings
const input = await readFileStr("input.txt");
const lines = input.split("\n");

// Define a map of shapes and their corresponding scores
const shapes = {
  "A": 1, // Rock
  "B": 2, // Paper
  "C": 3, // Scissors
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
  } else if ((opponentShape === "A" && ourShape === "C") || (opponentShape === "B" && ourShape === "A") || (opponentShape === "C" && ourShape === "B")) {
    // If the opponent's shape wins against our shape, we lost
    outcome = 0;
  } else {
    // Otherwise, we won
    outcome = 6;
  }

  // Calculate the score for the round by adding the score for the opponent's shape and the outcome
  const score = shapes[opponentShape] + outcome;

  // Add the score for this round to the total score
  totalScore += score;
}

// Print the result to the console
console.log(`If everything goes according to the strategy guide, our total score will be ${totalScore}.`);

```

## Prompt 
The answer is incorrect, the value is too high.

## Answer
The problem is that we are counting the score for the outcome twice, once in the outcome variable and once in the score variable. We can fix this by only adding the outcome to the total score, and not adding it to the score variable.
```typescript
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";

// Read the input file and split it into an array of strings
const input = await readFileStr("input.txt");
const lines = input.split("\n");

// Define a map of shapes and their corresponding scores
const shapes = {
  "A": 1, // Rock
  "B": 2, // Paper
  "C": 3, // Scissors
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
  } else if ((opponentShape === "A" && ourShape === "C") || (opponentShape === "B" && ourShape === "A") || (opponentShape === "C" && ourShape === "B")) {
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

```