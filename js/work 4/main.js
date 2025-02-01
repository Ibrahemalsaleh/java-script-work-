// Basic

// 1. Print numbers from 1 to 10 (for loop)
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 2. Print numbers from 1 to 10 (while loop)
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  
  // 3. Print array elements
  const arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  
  // 4. Print even numbers from 0 to 10
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  
  // 5. Print sum of numbers from 1 to 10
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(sum); // Output: 55
  
  // 6. Find largest number in array
  const arr2 = [1, 2, 3, 4, 5];
  let largest = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largest) {
      largest = arr2[i];
    }
  }
  console.log(largest); // Output: 5
  
  // 7. Find smallest number in array
  const arr3 = [5, 4, 3, 2, 1];
  let smallest = arr3[0];
  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] < smallest) {
      smallest = arr3[i];
    }
  }
  console.log(smallest); // Output: 1
  
  // 8. Find average of numbers in array
  const arr4 = [1, 2, 3, 4, 5];
  let sum2 = 0;
  for (let i = 0; i < arr4.length; i++) {
    sum2 += arr4[i];
  }
  const average = sum2 / arr4.length;
  console.log(average); // Output: 3
  
  
  // Mid
  
  // 9. Factorial of a number
  const num = 5;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial); // Output: 120
  
  // 10. Fibonacci sequence
  const limit = 10;
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i <= limit; i++) {
    const c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
  
  // 11. Prime numbers
  const limit2 = 20;
  for (let i = 2; i <= limit2; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
  
  // 12. Multiplication table
  const num2 = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${num2} x ${i} = ${num2 * i}`);
  }
  
  
  // Advanced
  
  // 13. 2D array elements
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  
  // 14. Array elements in reverse order
  const arr5 = [1, 2, 3, 4, 5];
  for (let i = arr5.length - 1; i >= 0; i--) {
    console.log(arr5[i]);
  }
  
  // 15. Array elements in a specific range
  const arr6 = [1, 2, 3, 4, 5];
  const start = 2;
  const end = 4;
  for (let i = start; i <= end; i++) {
    console.log(arr6[i]);
  }
  
  // 16. Array elements with a specific step
  const arr7 = [1, 2, 3, 4, 5];
  const step = 2;
  for (let i = 0; i < arr7.length; i += step) {
    console.log(arr7[i]);
  }
  
  // 17. Check if a number is in an array
  const arr8 = [1, 2, 3, 4, 5];
  const target = 4;
  let found = false;
  for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] === target) {
      found = true;
      break;
    }
  }
  console.log(found); // Output: true
  
  // 18. Frequency of a number in an array
  const arr9 = [1, 2, 1, 3, 2, 1];
  const numToFind = 1;
  let frequency = 0;
  for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] === numToFind) {
      frequency++;
    }
  }
  console.log(frequency); // Output: 3