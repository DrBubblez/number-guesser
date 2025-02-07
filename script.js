let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10); // generates a random number from 0-1, multiplies that by 10, and rounds down the result. Should be a number from 0-9
}; 

const compareGuesses = (humanGuess, compGuess, secretTarget) => {
    secretTarget = generateTarget(); // Generates a random number from 0-9 for the players to guess
    const humanAccuracy = Math.abs(secretTarget - humanGuess); // The accuracy of the humans guess
    const compAccuracy = Math.abs(secretTarget - compGuess); // The accuracy of the computers guess

    if (humanAccuracy === compAccuracy) { // Checks to see if the Computer and Human players guessed the same number
        return 'Both guessed the same. The Human Player Wins!'
    } else if (humanAccuracy > compAccuracy) { // The larger the accurate score, the less accurate the guess was. Checks to see if the human was more accurate.
        return false; // If Computer wins, return false
    } else {
        return true; // If Human wins, return true
    };
};

console.log(compareGuesses(5,5)); // Test call for compareGuesses()

const updateScore = winner => {
    if (winner === 'human') { // If human wins, adds 1 point
        humanScore++;
    } else if (winner === 'computer') { // If computer wins, adds 1 point
        computerScore++;
    } else {
        return 'Error Invalid Winner' // Error handling
    }
};

const advanceRound = () => { // advances the round number
    currentRoundNumber++;
};