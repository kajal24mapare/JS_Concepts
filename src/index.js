/*
  Recursion
*/

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log("with recursion: ", factorial(5));
/*
  Output: with recursion:  120
*/

const factorial2 = (num) => {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num = num - 1;
    result = result * num;
    console.log(result);
  }
  return result;
};

console.log("without recursion", factorial2(5));

/*
  Output: without recursion 120
*/

//-------------------------------------

const numbers = [0, 3, 5, 8, 4, 6, 1, 9, 7];

const findMissingNumbers = (numArray) => {
  let ans = [];
  numArray.sort((a, b) => a - b);
  const minNum = numArray.length > 0 ? numArray[0] : -1;
  console.log("minNum: ", minNum);

  const revArray = numArray.reverse();
  const maxNum = revArray.length > 0 ? revArray[0] : -1;
  console.log("maxNum: ", maxNum);

  for (let i = minNum; i <= maxNum; i++) {
    if (!numArray.includes(i)) {
      ans.push(i);
    }
  }
  return ans;
};

console.log("Answer: ", findMissingNumbers(numbers));

/*
  Output: 
    minNum:  0
    maxNum:  9
    Answer:  [2]
*/

//-------------------------------

function isLeapYear(num) {
  if (num % 400 === 0) {
    return true;
  } else if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  }
  return false;
}

console.log("2000: ", isLeapYear(2000));
console.log("2002: ", isLeapYear(2002));
console.log("2100: ", isLeapYear(2100));

/*
  Output: 
    2000:  true
    2002:  false
    2100:  false
*/

// ----------------------------------

function getDayString(date) {
  let day = "";
  switch (date) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day of week!";
  }
}

console.log("Day: ", getDayString(3));

/*
  Output: Day:  Tuesday
*/

// ----------------------------------
const isInteger = (num) => typeof num === "number";
console.log("3:", isInteger(3));
console.log('"3":', isInteger("3"));

/*
  Output: 
    3: true
    "3": false
*/

// ----------------------------------
const add_all = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(add_all([1, 2, 3]));

/*
  Output: 6
*/

// ----------------------------------
const toCelcius = (fahr) => (((fahr - 32) / 9) * 5).toFixed(2);

console.log("32 Farenheit = ", toCelcius(32), " Celcius");

/*
  Output: 
    32 Farenheit =  0.00  Celcius
*/

// ----------------------------------
const denominations = [1, 2, 5, 10, 25].sort((a, b) => b - a);
const convert_to_coins = (amt, coins) => {
  if (amt === 0) {
    return [];
  } else {
    if (amt >= coins[0]) {
      let left = amt - coins[0];
      return [coins[0]].concat(convert_to_coins(left, coins));
    } else {
      coins.shift();
      return convert_to_coins(amt, coins);
    }
  }
};

console.log(convert_to_coins(87, denominations));

/*
  Output: [25, 25, 25, 10, 2]
*/

// ----------------------------------
var arr = [10, 32, 65, 2];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Withing timeout let", i);
  }, 3000);
}

/*
  Output: 
    Withing timeout let 0
    Withing timeout let 1
    Withing timeout let 2
    Withing timeout let 3
*/

// ----------------------------------
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Withing timeout var", i);
  }, 3000);
}

/*
  Output: Withing timeout var 4 (4 times)
*/

var arrX = [10, 32, 65, 2];
for (var i = 0; i < arrX.length; i++) {
  ((i) => {
    setTimeout(function () {
      console.log("Withing timeout var but used block scoped", i);
    }, 3000);
  })(i);
}

/*
  Output: 
    Withing timeout var but used block scoped 0
    Withing timeout var but used block scoped 1
    Withing timeout var but used block scoped 2
    Withing timeout var but used block scoped 3
*/

// ----------------------------------
const reverseStr = (str) => str.split("").reverse().join("");

console.log(reverseStr("kajal"));

/*
  Output: lajak
*/

// ----------------------------------
var arr2 = [{ radius: 5 }, { radius: 9 }, { radius: 2 }];
const arrComparator = (arr) => arr.sort((a, b) => a.radius - b.radius);

console.log(arrComparator(arr2));

/*
  Output: [
    0: {radius: 2}
    1: {radius: 5}
    2: {radius: 9}
  ]
*/
// ----------------------------------
let myArr = [1, 2, 3];
myArr[5] = 6;

console.log(myArr, myArr.length);

/*
  Output: [1, 2, 3, empty × 2, 6] 6
*/

// ----------------------------------
var strArray = ["kajal", "mapare", "kaj"];
const largestStr = strArray.reduce((prev, curr) => {
  return prev.length > curr.length ? prev : curr;
}, "");

console.log(largestStr);

/*
  Output: mapare
*/

// ----------------------------------
let myArr2 = [1, 2, 3];
const sumOfSquares = myArr2.map((num) => num * num).reduce((a, b) => a + b, 0);

console.log(sumOfSquares);

/*
  Output: 14
*/

// ----------------------------------
let myArr3 = [1, 2, 3];
const getEvenNumbers = () =>
  // return Array.prototype.slice.call(arguments);
  myArr3.filter((num) => num % 2 === 0);

console.log(getEvenNumbers());

/*
  Output: [2]
*/

// ----------------------------------
const getOutput = (arr, criteriaFun) =>
  arr.filter((data) => !criteriaFun(data));

const fun = (num) => num % 2 === 0;

console.log(getOutput([1, 2, 3, 4], fun));

/*
  Output: [1, 3]
*/

// ----------------------------------
function CircleX(r) {
  this.radius = r;
}
var c = new CircleX(2);
console.log(c, c.radius);

CircleX.prototype.perimeter = function () {
  return Math.PI * 2 * this.radius;
};

console.log(c.perimeter());

/*
  Output: 
    CircleX {radius: 2}
    12.566370614359172
*/

// ----------------------------------
function Shape() {
  this.area = function () {
    return "You need to implement this!";
  };
}
function Square(length) {
  this.length = length;
  this.area = function () {
    return this.length * this.length;
  };
}
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}
Square.prototype = new Shape();
Rectangle.prototype = new Shape();

console.log(new Square(2).area());
console.log(new Rectangle(2, 3).area());

/*
  Output: 
    4
    You need to implement this!
*/

// ---------------------------

// function C(r) {
//   this.rX = r;
// }
// var y = C(2);
// console.log("y with no new keyword: ", y);
// in browser => undefined
// console.log(rX);
// in browser => 2
//The area property gets defined in the
// window object, because the new
// keyword was not used with the function constructor.

// ---------------------------

// "xyx".isPalindrome() should return true.
String.prototype.isPalindrome = function () {
  const reverseStr = this.split("").reverse().join("");
  return this === reverseStr;
};

console.log("Is palindrome:", "xyx".isPalindrome());

/*
  Output: true
*/

// ---------------------------

// Error handling

function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce((acc, b) => acc + b, 0);
}

console.log("sum of 1,2,3: ", sum(1, 2, 3));
console.log("sum of 1,2,s: ", sum(1, 2, "s"));

function sumWithErrHandling() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce((acc, b) => {
    if (!isNaN(b)) {
      return acc + b;
    } else {
      throw Error("Non-numeric argument");
      // result of above line in browser:
      console.log("Uncaught Error: Non-numeric argument", b);
      // above line will not execute need try catch block
      // throwing err will stop executyion and we cannot proceed
      // hence catch that err
    }
  }, 0);
}

// console.log("sumWithErrHandling of 1,2,s: ", sumWithErrHandling(1, 2, "s"));

function test() {
  try {
    sumWithErrHandling(1, 2, "s");
  } catch (error) {
    console.log("Catched error", error);
  }
  console.log("doing smthng else");
}

test();

/*
 * Output:
 *  sum of 1,2,3: 6
 *  sum of 1,2,"s":  3s
 *  Uncaught Error: Non-numeric argument s // will not get consoled
 *  Catched error Error: Non-numeric argument
 *  doing smthng else
 */

//------------------------------------------------------
console.log(document);
console.log(document.documentElement);
console.log(document.head);

// getElementById, name, tag, attribute

/*
 * Output: #document with all nodes
 * <html> .... </html>
 * <head> ... </head>
 */

//------------------------------------------------------
/*

var globalVar = 4;

window.globalVar;
// 4
function testX() {
  var localVar = 5;
  console.log(localVar);
}
testX();
// 5
window.localVar;
// undefined
function test2() {
  localWithoutVar = 5;
}

window.localWithoutVar;
// undefined
test2();
// undefined
window.localWithoutVar;
// 5

*/

//--------------------------------------------

var age = 21;
var guessTheAge = function () {
  console.log("age in inner fun before", age); // undefined
  var age = 20;
  console.log("age in inner fun after", age); // 20
};
console.log("age outer after", age); //21

//--------------------------------------------

// call, apply, bind

var obj = { num: 2 };
var addToThis = function add(a, b) {
  return this.num + a + b;
};

console.log(addToThis.call(obj, 3, 1)); // 6
// not giving all func args results NaN on addition

console.log(addToThis.apply(obj, [3, 1])); // 6

console.log(addToThis.bind(obj, [3, 1]));
/*
  ƒ add(a, b) {
    return this.num + a + b;
  } 
*/
var bound = addToThis.bind(obj);
console.log(bound(3, 1)); //6

//--------------------------------------------
