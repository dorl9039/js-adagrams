export const drawLetters = () => {
  const letterBank = {
    A:9, B:2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1, L:4, M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1, Y:2, Z:1
  };
  
  // Create an array of all available letters
  const drawPile = [];
  for (const letter in letterBank) {
    let letters = Array(letterBank[letter]).fill(letter);
    drawPile.push(...letters);
  }
 
  // Draw letters from the pile
  const hand = [];
  for (let i = 98; i > 88; i--) {
    // Generate a random number as index
    const randIdx = Math.floor(Math.random() * i);
    // Select the letter at randIdx and remove from drawPile
    const randLetter = drawPile.splice(randIdx, 1);
    // Add letter to hand
    hand.push(randLetter[0]);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Ensure function is case insensitive
  const word = input.toUpperCase()
  
  // Loop through each char in word to check presence in hand
  for (const char of word) {
    if (! lettersInHand.includes(char)) {
      return false;
    }
    // Update hand to reflect available letters remaining
    for (const idx in lettersInHand) {
      if (lettersInHand[idx] === char) {
        lettersInHand.splice(idx, 1);
        break;
      }
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8, Y:4, Z:10};
  //Ensure case insensitive
  const input = word.toUpperCase()
  let score = 0;
  
  for (const letter of input) {
    score += scoreChart[letter];
  }

  if (input.length > 6) {
    score += 8;
  }

  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
