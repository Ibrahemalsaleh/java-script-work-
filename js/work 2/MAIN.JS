function findSmallest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "Input must be a non-empty array."; // Handle invalid input
    }
  
    let smallest = arr[0]; // Assume the first element is the smallest initially
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
  console.log(findSmallest([30, 45, 60, 7])); // Output: 7
  console.log(findSmallest([10,5,20,1,8])); // Output: 1
  console.log(findSmallest([-5, -2, -10, 0])); // Output: -10
  console.log(findSmallest([])); // Output: "Input must be a non-empty array."
  console.log(findSmallest("not an array")); // Output: "Input must be a non-empty array."


  function alphabeticalOrder(str) {
    if (typeof str !== 'string') {
      return "Input must be a string."; // Handle non-string input
    }
  
    return str.split("").sort().join("");
  }
  
  console.log(alphabeticalOrder('hello')); // Output: "ehllo"
  console.log(alphabeticalOrder('orange')); // Output: "aegnor"
  console.log(alphabeticalOrder('CodingAcademy')); // Output: "ACaccdemygino"
  console.log(alphabeticalOrder('12345')); // Output: "12345" (numbers are sorted too)
  console.log(alphabeticalOrder('')); // Output: "" (empty string is handled)
  console.log(alphabeticalOrder(123)); // Output: "Input must be a string."

  function factorialRecursive(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      return "Input must be a non-negative integer."; // Handle invalid input
    }
  
    if (n === 0) {
      return 1; // Base case
    } else {
      return n * factorialRecursive(n - 1); // Recursive step
    }
  }
  
  console.log(factorialRecursive(8));   // Output: 40320
  console.log(factorialRecursive(0));   // Output: 1
  console.log(factorialRecursive(5));   // Output: 120

  function oddOrEven(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
      return "Input must be an integer."; // Handle non-integer input
    }
  
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  console.log(oddOrEven(9));   // Output: Odd
  console.log(oddOrEven(10));  // Output: Even
  console.log(oddOrEven(0));   // Output: Even (0 is considered even)
  console.log(oddOrEven(-7));  // Output: Odd
  console.log(oddOrEven(-10)); // Output: Even
  console.log(oddOrEven(3.14)); // Output: "Input must be an integer."
  console.log(oddOrEven("abc")); // Output: "Input must be an integer."
 
 
 
 
 
  function evenNum(arr) {
    if (!Array.isArray(arr)) {
      return "Input must be an array."; // Handle non-array input
    }
  
    const evenNumbers = []; // Create a new array to store even numbers
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i]) ) {
          return "Array elements must be integers."
      }
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]); // Add even numbers to the new array
      }
    }
  
    return evenNumbers;
  }
  
  console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [2, 4, 6, 8]
  console.log(evenNum([1, 3, 5, 7, 9]));           // Output: [] (empty array if no even numbers)
  console.log(evenNum([2, 4, 6, 8, 10]));          // Output: [2, 4, 6, 8, 10]
  console.log(evenNum([-1, -2, -3, -4]));          // Output: [-2, -4] (handles negative numbers)
  console.log(evenNum([1, 2, "a", 4]));            // Output: "Array elements must be integers."
  console.log(evenNum("not an array"));            // Output: "Input must be an array."
  console.log(evenNum([1,2, 3.5, 4])); // Output: "Array elements must be integers."


  function numbersOnly(arr) {
    if (!Array.isArray(arr)) {
      return "Input must be an array."; // Handle non-array input
    }
  
    const numbers = []; // Create a new array to store only numbers
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        numbers.push(arr[i]);
      }
    }
  
    return numbers;
  }
  
  console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); // Output: [3, 7, 13]
  console.log(numbersOnly([1, 2, 3, 4, 5]));                   // Output: [1, 2, 3, 4, 5]
  console.log(numbersOnly(['a', 'b', 'c', 'd']));                   // Output: []
  console.log(numbersOnly([1, 'a', 2, 'b', 3, 'c']));             // Output: [1, 2, 3]
  console.log(numbersOnly([1, 2, null, undefined, 5]));       // Output: [1, 2, 5] (null and undefined are not numbers)
  console.log(numbersOnly(123));                                  // Output: "Input must be an array."
  console.log(numbersOnly([1,2, 3.5, 4])); // Output: [1, 2, 4] (3.5 is not an integer, but it's still a number)


  function addUp(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
      return "Input must be a non-negative integer.";
    }
  
    let sum = 0;
    for (let i = num; i >= 0; i--) {
      sum += i;
    }
    return sum;
  }
  
  console.log(addUp(8));   // Output: 36
  console.log(addUp(6));   // Output: 21
  console.log(addUp(0));   // Output: 0
  console.log(addUp(1));   // Output: 1
  console.log(addUp(10));  // Output: 55
  console.log(addUp(-3));  // Output: "Input must be a non-negative integer."
  console.log(addUp(4.5)); // Output: "Input must be a non-negative integer."
  console.log(addUp("abc")); // Output: "Input must be a non-negative integer."
  
  
  // Recursive version (alternative)
  
  function addUpRecursive(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
      return "Input must be a non-negative integer.";
    }
  
    if (num === 0) {
      return 0;
    } else {
      return num + addUpRecursive(num - 1);
    }
  }
  
  console.log(addUpRecursive(8));   // Output: 36
  console.log(addUpRecursive(6));   // Output: 21
  console.log(addUpRecursive(0));   // Output: 0
  console.log(addUpRecursive(10));  // Output: 55
  console.log(addUpRecursive(-2)); // Output: "Input must be a non-negative integer."



  function minMaxLengthAverage(arr) {
    if (!Array.isArray(arr)) {
      return "Input must be an array.";
    }
  
    if (arr.length === 0) {
      return "Array cannot be empty."; // Handle empty array case
    }
  
    let lowest = arr[0];
    let highest = arr[0];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
          return "Array elements must be numbers."
      }
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
      if (arr[i] > highest) {
        highest = arr[i];
      }
      sum += arr[i];
    }
  
    const average = sum / arr.length;
  
    return [lowest, highest, arr.length, average];
  }
  
  console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // Output: [3, 100, 5, 40]
  console.log(minMaxLengthAverage([1, 2, 3, 4, 5]));       // Output: [1, 5, 5, 3]
  console.log(minMaxLengthAverage([-10, -5, 0, 5, 10]));    // Output: [-10, 10, 5, 0]
  console.log(minMaxLengthAverage([10, 10, 10, 10]));      // Output: [10, 10, 4, 10]
  console.log(minMaxLengthAverage([]));                   // Output: "Array cannot be empty."
  console.log(minMaxLengthAverage("not an array"));           // Output: "Input must be an array."
  console.log(minMaxLengthAverage([1, 2, "a", 4]));            // Output: "Array elements must be numbers."
  console.log(minMaxLengthAverage([1,2, 3.5, 4])); // Output: [1, 4, 4, 2.625] (floating-point numbers are allowed)



  function romanNumbers(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) {
      return "Input must be a positive integer.";
    }
  
    const romanMap = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'XD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
  
    const sortedKeys = Object.keys(romanMap).sort((a, b) => b - a); // Sort keys in descending order
  
    let result = "";
    for (const key of sortedKeys) {
      const value = parseInt(key); // Parse key back to integer
      while (num >= value) {
        result += romanMap[key];
        num -= value;
      }
    }
    return result;
  }
  
  
  console.log(romanNumbers(1989)); // Output: MCMLXXXIX
  console.log(romanNumbers(3));    // Output: III
  console.log(romanNumbers(4));    // Output: IV
  console.log(romanNumbers(9));    // Output: IX
  console.log(romanNumbers(10));   // Output: X
  console.log(romanNumbers(42));   // Output: XLII
  console.log(romanNumbers(100));  // Output: C
  console.log(romanNumbers(500));  // Output: D
  console.log(romanNumbers(1000)); // Output: M
  console.log(romanNumbers(3999)); // Output: MMMCMXCIX
  console.log(romanNumbers(0));    // Output: "Input must be a positive integer."
  console.log(romanNumbers(-5));   // Output: "Input must be a positive integer."
  console.log(romanNumbers(3.14)); // Output: "Input must be a positive integer."
  console.log(romanNumbers("abc")); // Output: "Input must be a positive integer."


// 10. Count Words
function countWords(str) {
    if (typeof str !== 'string') {
      return "Input must be a string.";
    }
    const words = str.trim().split(/\s+/); // Split by any whitespace
    return words.length;
  }
  
  console.log(countWords('hello from CodingAcademy!')); // Output: 3
  console.log(countWords('  hello   from   CodingAcademy!  ')); // Output: 3 (handles extra spaces)
  console.log(countWords("")); // Output: 0 (handles empty string)
  console.log(countWords(123)); // Output: "Input must be a string."
  
  // 11. Multiply by Length
  function multiplyByLength(arr) {
    if (!Array.isArray(arr)) {
      return "Input must be an array.";
    }
  
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
          return "Array elements must be numbers."
      }
      newArr.push(arr[i] * arr.length);
    }
    return newArr;
  }
  
  console.log(multiplyByLength([4, 2, 5]));    // Output: [12, 6, 15]
  console.log(multiplyByLength([1, 2, 3, 4])); // Output: [4, 8, 12, 16]
  console.log(multiplyByLength([]));           // Output: []
  console.log(multiplyByLength([1,2, "a", 4]));            // Output: "Array elements must be numbers."
  
  
  // 12. Check Ending
  function checkEnding(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return "Inputs must be strings.";
    }
    return str1.endsWith(str2);
  }
  
  console.log(checkEnding("CodingSchool", "Ac")); // Output: false
  console.log(checkEnding("CodingSchool", "ool")); // Output: true
  console.log(checkEnding("hello", ""));       // Output: true (empty string is always a suffix)
  console.log(checkEnding("", "hello"));       // Output: false
  console.log(checkEnding(123, "ool")); // Output: "Inputs must be strings."
  
  
  // 13. Double Char
  function doubleChar(str) {
    if (typeof str !== 'string') {
      return "Input must be a string.";
    }
    let doubledStr = "";
    for (let i = 0; i < str.length; i++) {
      doubledStr += str[i].repeat(2);
    }
    return doubledStr;
  }
  
  console.log(doubleChar('Coding'));    // Output: CCooddiinngg
  console.log(doubleChar('Hello'));    // Output: HHeelllloo
  console.log(doubleChar('123'));      // Output: 112233
  console.log(doubleChar(''));         // Output: ""
  console.log(doubleChar(123)); // Output: "Input must be a string."
  
  
  // 14. Find Index
  function findIndex(arr, element) {
    if (!Array.isArray(arr)) {
      return "First argument must be an array.";
    }
    return arr.indexOf(element);
  }
  
  console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));   // Output: 0 (Corrected)
  console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Murad')); // Output: 3
  console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Sami'));  // Output: -1
  console.log(findIndex([1, 2, 3, 4], 3));                               // Output: 2
  console.log(findIndex(['a', 'b', 'c'], 2)); // Output: -1
  console.log(findIndex("not an array", 'Ali')); // Output: "First argument must be an array."
  
  
  // 15. Absolute Sum
  function getAbsSum(arr) {
    if (!Array.isArray(arr)) {
      return "Input must be an array.";
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
          return "Array elements must be numbers."
      }
      sum += Math.abs(arr[i]);
    }
    return sum;
  }
  
  console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); // Output: 23
  console.log(getAbsSum([1, -2, 3, -4, 5]));      // Output: 15
  console.log(getAbsSum([]));                     // Output: 0
  console.log(getAbsSum([-1, -2, -3]));            // Output: 6
  console.log(getAbsSum([1,2, "a", 4]));            // Output: "Array elements must be numbers."


