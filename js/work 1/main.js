// Data Types and Operators

// Cash flow ratio
function cashFlowRatio(cash, currentLiabilities) {
    return cash / currentLiabilities;
  }
  
  // Net income
  function netIncome(revenues, expenses) {
    return revenues - expenses;
  }
  
  // Total assets
  function totalAssets(liabilities, equity) {
    return liabilities + equity;
  }
  
  // Net income (using profit margin and sales)
  function netIncomeFromMargin(profit, sales) {
    return (profit / sales) * sales; // Or simply profit, as profit is already net income
  }
  
  // Average
  function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
  // Discount
  function discount(price, discountPercent) {
    return price * (1 - discountPercent / 100);
  }
  
  // Age limit
  function ageLimit(age) {
    return age > 18 && age < 30;
  }
  
  // Exponential
  function exponential(number1, number2) {
    return Math.pow(number1, number2);
  }
  
  // Remainder
  function remainder(number1, number2) {
    return number1 % number2;
  }
  
  
  // Typeof and other expressions
  console.log(typeof(100)); // number
  console.log(typeof(73.9)); // number
  console.log(typeof(NaN)); // number
  console.log(typeof("Water")); // string
  console.log(typeof(false)); // boolean
  console.log(typeof(9 != 11)); // boolean
  console.log("Orang" + "e"); // Orange
  console.log("Orange" - "s"); // NaN
  console.log("4" + "8"); // 48
  console.log("4" - "8"); // -4
  console.log("name" + 3); // name3
  console.log("name" - 3); // NaN
  console.log(82 * "word"); // NaN
  console.log(1 + "hello"); // 1hello
  console.log("hello" + 1); // hello1
  console.log(1 + true); // 2
  console.log("hello" + true); // hellotrue
  console.log(typeof (Infinity)); // number
  console.log(1 == '1'); // true
  console.log(1 === '1'); // false
  
  
  
  // Strings
  let str = "Welcome to Orange";
  
  console.log(str.toUpperCase()); // WELCOME TO ORANGE
  console.log(str.substring(8, 10)); // TO
  console.log("Hello from " + str.substring(8)); // Hello from Orange
  console.log(str.toLowerCase()); // welcome to orange
  console.log(str.length); // 17
  console.log("Welcome to “Orange”"); // Welcome to “Orange”
  console.log("Welcome to Orange Jordan"); // Welcome to Orange Jordan
  
  function replaceFirstLetter(str) {
    if (str.length > 0) {
        return str[0] + str.substring(1).replace(new RegExp(str[0], 'g'), '*');
    } else {
        return "";
    }
  }
  
  console.log(replaceFirstLetter("cactus")); // ca*tus
  
  
  // Arrays
  let arr = ["Coding", "Academy", "By", "Orange"];
  
  console.log([...arr, "Jordan"]); // [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]
  console.log(arr.slice(0, 2)); // [“Coding”, “Academy”]
  console.log(["Welcome", "To", ...arr]); // [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]
  console.log(arr.slice(1)); // [“Academy”, “By”, “Orange”]
  console.log(arr.join(" ")); // “Coding Academy By Orange”
  console.log(arr); // [“Coding”, “Academy”, “By”, “Orange”]
  console.log([arr[0], arr[3]]); // [“Coding”, “Orange”]
  
  var fruit = ["banana", "apple", "orange", "watermelon"];
  var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
  
  vegetables.pop(); // Remove last item
  fruit.shift(); // Remove first item
  let orangeIndex = fruit.indexOf("orange");
  fruit.push(orangeIndex);
  let vegetablesLength = vegetables.length;
  vegetables.push(vegetablesLength);
  let food = fruit.concat(vegetables);
  food.splice(4, 2);
  food.reverse();
  let foodString = food.toString();
  
  console.log(food);
  console.log(foodString);
  
  
  
  // Functions
  
  function stringToArray(str) {
    return str.split(" ");
  }
  
  function hideMobileNumber(phoneNumber) {
    return "*******" + phoneNumber.slice(7);
  }
  
  function hideEmail(email) {
    let parts = email.split("@");
    return parts[0].substring(0, Math.min(5, parts[0].length)) + "...@" + parts[1];
  }
  
  function capitalizeFirstLetter(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }
  
  function capitalizeEveryWord(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }
  
  function flipNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
  }
  
  function swapVariables(a, b) {
    // Method 1: Using a temporary variable
    let temp = a;
    a = b;
    b = temp;
  
    // Method 2: Using array destructuring
    [a, b] = [b, a];
  
    // Method 3: Using arithmetic operations (only works for numbers)
    a = a + b;
    b = a - b;
    a = a - b;
  
    return { a, b };
  }
  
  function removeCharacter(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
  }
  
  function mergeStrings(str1, str2) {
    return str1.slice(1) + str2.slice(1);
  }
  
  function checkCharPosition(char, str) {
    return str.startsWith(char) || str.endsWith(char);
  }
  
  function stringToArray2(str) {
    return str.split(" ");
  }
  
  function sortStringAlphabetically(str) {
    return str.split("").sort().join("");
  }
  
  
  // Conditionals
  
  function checkEligibility(birthYear) {
    let age = new Date().getFullYear() - birthYear;
  
    if (age > 30) {
      console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18 && age <= 30) {
      console.log("You are eligible. Start your application.");
    } else if (age < 18) {
      console.log("You may join the kids' program.");
    } else if (age > 60) {
      console.log("You may join the seniors’ program.");
    }
  }
  
  function switchCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
    }
    return result;
  }
  
  function camelCase(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join("");
  }
  
  function removeElementFromArray(arr, element) {
    return arr.filter(item => item !== element);
  }
  
  function isOddOrEven(num) {
    return num % 2 === 0 ? "even" : "odd";
  }
  
  function isNumber(variable) {
    return typeof variable === "number";
  }
  
  function findLargest(num1, num2) {
    return Math.max(num1, num2);
  }
  
  function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return "equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  
  function isInRange(num, min, max) {
    return num >= min && num <= max;
  }
  
  function isLeapYear(year) {
    return