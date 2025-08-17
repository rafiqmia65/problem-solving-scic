// ################################################################
// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

const reverseString = (string) => {
  if (typeof string !== "string") {
    return "Please input a string";
  }

  const stringSplit = string.split("");

  const stringReverse = stringSplit.reverse();

  const stringJoin = stringReverse.join("");

  return stringJoin;
};

// console.log(reverseString("hello"));

// ################################################################
// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

const vowelsCount = (string) => {
  if (typeof string !== "string") {
    return "Please input a string";
  }

  let totalCount = 0;

  const vowels = "aeiou";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();

    if (vowels.includes(letter)) {
      let count = totalCount + 1;
      totalCount = count;
    }
  }

  return totalCount;
};

// console.log(vowelsCount("programming"));

// ################################################################
// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const palindromeCheck = (string) => {
  if (typeof string !== "string") {
    return "Please input a string";
  }
  let backwardPalindrome = "";

  for (let i = string.length - 1; i >= 0; i--) {
    backwardPalindrome = backwardPalindrome + string[i];
  }

  if (backwardPalindrome === string) {
    return true;
  } else {
    return false;
  }
};
// console.log(palindromeCheck("madam"));

// ################################################################
// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

const findMaxNum = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please Input a valid array";
  }

  let number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (number < arr[i]) {
      number = arr[i];
    }
  }

  return number;
};
// console.log(findMaxNum([5, 1, 9, 3]));
