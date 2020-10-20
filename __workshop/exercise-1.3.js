// Exercise 1.3
//
// Write a function that accepts a string of words
// and returns the character-count of that string. (include spaces)
//
// Example:
// characterCount("ab c def") should return 6
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function characterCount(string) {
  // complete the function
  let arrayLength = string.length;
  return arrayLength;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(characterCount("wubba lubba dub dub"));

// Create more test examples.
console.log(characterCount("Hello World"));
console.log(characterCount("Beep Beep Boop"));
// This is needed for automated testing (more on that later)
module.exports = characterCount;
