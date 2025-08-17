// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

const reverseString = (string) => {

  const stringSplit = string.split("");

  const stringReverse = stringSplit.reverse();

  const stringJoin = stringReverse.join("");

  return stringJoin;
};

console.log(reverseString("hello"));
