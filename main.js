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

// ################################################################
// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

const removeDuplicatesNum = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please Input a valid array";
  }

  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (!numbers.includes(arr[i])) {
      numbers.push(arr[i]);
    }
  }

  return numbers;
};
// console.log(removeDuplicatesNum([1, 2, 2, 3, 4, 4]))

// ################################################################
// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const numbersSum = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please Input a valid array";
  }

  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }

  return totalSum;
};
// console.log(numbersSum([1, 2, 3, 4]))

// ################################################################
// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const evenNumbers = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please Input a valid array";
  }

  let evenArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }

  return evenArray;
};
// console.log(evenNumbers([1, 2, 3, 4, 5, 6]));

// ################################################################
// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

const capitalizeWords = (str) => {
  if (typeof str !== "string") {
    return "Please input a string";
  }

  const words = str.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return "";
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
};

console.log(capitalizeWords("hello world"));
