// Masalalar
// Massivlarga oid

// Masala 1: `map` va `filter` metodlari bilan alifbo tartibini o'zgartirish
function transformWords(words) {
    return words
        .filter(word => word.length >= 5)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(transformWords(['apple', 'banana', 'cat', 'dog', 'elephant']));

// Masala 2: `find` va `map` metodlari bilan talabalarni topish
function findStudent(students) {
    let student = students.find(student => student.age > 20);
    return student ? student.name.toUpperCase() : 'Student not found';
}
console.log(findStudent([{ name: 'John', age: 19 }, { name: 'Jane', age: 22 }]));

// Masala 3: `filter` va `reduce` metodlari bilan umumiy summani hisoblash
function calculateTotal(prices) {
    return prices
        .filter(price => price > 100)
        .reduce((total, price) => total + price, 0);
}
console.log(calculateTotal([50, 150, 200, 75, 125]));

// Masala 4: `every` va `some` metodlari bilan aniq shartlarni tekshirish
function checkNumbers(numbers) {
    const allPositive = numbers.every(num => num > 0);
    const anyLarge = numbers.some(num => num > 100);
    if (allPositive) console.log("Barcha sonlar musbat");
    else console.log("Musbat bo'lmagan sonlar bor");
    if (anyLarge) console.log("Katta son bor");
}
checkNumbers([10, 20, 30]);
checkNumbers([-10, 20, 30]);
checkNumbers([10, 20, 130]);

// Masala 5: `forEach` va `map` metodlari bilan massiv elementlarini transformatsiya qilish
function squareElements(arr) {
    const squares = [];
    arr.forEach(num => squares.push(num * num));
    return squares;
}
console.log(squareElements([1, 2, 3, 4]));

// Masala 6: `map`, `filter`, va `reduce` metodlarini birgalikda ishlatish
function calculateNewSalaries(salaries) {
    return salaries
        .filter(salary => salary >= 2000)
        .map(salary => salary * 1.1)
        .reduce((total, salary) => total + salary, 0);
}
console.log(calculateNewSalaries([1500, 2000, 2500, 1800, 3000]));

// Masala 7: `find`, `filter`, va `map` metodlari bilan talabalar ma'lumotlarini qayta ishlash
function processStudents(students) {
    let firstStudent = students.find(student => student.grade >= 80);
    let topStudents = students
        .filter(student => student.grade >= 80)
        .map(student => student.name.toUpperCase());
    return { firstStudent, topStudents };
}
console.log(processStudents([
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 21, grade: 75 },
    { name: 'Charlie', age: 22, grade: 90 }
]));

// Yozuvlarga oid

// Masala 1: `toUpperCase` metodi bilan harflarni katta harfga aylantirish
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase('hello world'));

// Masala 2: `includes` metodi bilan substringni tekshirish
function containsSubstring(str, substring) {
    return str.includes(substring);
}
console.log(containsSubstring('hello world', 'world'));
console.log(containsSubstring('hello world', 'javascript'));

// Masala 3: `replace` metodi bilan substringni almashtirish
function replaceSubstring(str) {
    return str.replace(/JavaScript/g, 'JS');
}
console.log(replaceSubstring('I love JavaScript. JavaScript is the best.'));

// Masala 4: `split` va `join` metodlari bilan so'zlarni teskari tartibda qaytarish
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world this is javascript'));

// Masala 5: `trim` metodi bilan bo'sh joylarni olib tashlash
function trimSpaces(str) {
    return str.trim();
}
console.log(trimSpaces('   hello world   '));
