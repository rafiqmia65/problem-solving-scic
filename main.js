// ################################################################
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

// console.log(reverseString("hello"));

// ################################################################
// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

const vowelsCount = (string) => {
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
