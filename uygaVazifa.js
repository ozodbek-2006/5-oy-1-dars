// // Massivlarga oid masalalar

// // Masala 1: 
// function transformWords(words) {
//     return words
//       .filter( word.length >= 5)
//       .map( word.charAt(0).toUpperCase() + word.slice(1));
//   }
  
//   const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
//   console.log(transformWords(words)); 

//   // Masala 2:
//   function findFirstAdultStudent(students) {
//     const student = students.find(student.age > 20);
//     return student ? student.name.toUpperCase() : "Erorr";
//   }
  
//   const students = [
//     { name: "Ali", age: 19 },
//     { name: "Sara", age: 21 },
//     { name: "John", age: 20 },
//   ];
//   console.log(findFirstAdultStudent(students)); 
  
//   // Masala 3: 
//   function calculateTotal(prices) {
//     return prices
//       .filter( price > 10000)
//       .reduce((sum, price) => sum + price, 0);
//   }
  
//   const prices = [5000, 12000, 15000, 8000, 20000];
//   console.log(calculateTotal(prices)); 
  
//   // Masala 4: 
//     function checkNumbers(numbers) {
//     const allPositive = numbers.every( num > 0);
//     const Number = numbers.some( num > 100);

//     if (allPositive) {
//         console.log("Barcha sonlar musbat");
//     } else {
//         console.log("Musbat bo'lmagan sonlar bor");
//     }

//     if (hasLargeNumber) {
//         console.log("Katta son bor");
//     }
// }

// const numbers = [15, 25, 35, 45, 105];
// checkNumbers(numbers); 

// const numbers2 = [15, -25, 35, 45, 5];
// checkNumbers(numbers2);

  
//   // Masala 5:
  
//   // Masala 6:
//   // Masala 7: `
  
//   // Yozuvlarga oid masalalar
  
//   // Masala 1: 
//   function convertToUpperCase(str) {
//     return str.toUpperCase();
//   }
  
//   console.log(convertToUpperCase("hello world"));
  
//   // Masala 2: 
//   function checkSubstring(str, substring) {
//     return str.includes(substring);
//   }
  
  
//   // Masala 3: 
//   function replace(str) {
//     return str.replace(/JavaScript/g, "JS");
//   }
  
  
//   // Masala 4: 
//   function revers(str) {
//     return str.split(" ").reverse().join(" ");
//   }
  
//   console.log(revers("hello world ")); 
  
//   // Masala 5: 
//   function trimString(str) {
//     return str.trim();
//   }
  
//   console.log(trimString("   Hello World!   "));
  