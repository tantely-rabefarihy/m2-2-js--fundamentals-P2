// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  // code here
  return Math.round((num1 + num2 + num3 + num4 + num5) / 5);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.
console.log(calculateAverage(3, 5, 6, 4, 7));
console.log(calculateAverage(33, 52, 61, 45, 70));
// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
