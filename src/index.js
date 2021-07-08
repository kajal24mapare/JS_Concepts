const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log("with recursion: ", factorial(5));

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

//-------------------------------

function isLeapYear(num) {
  if (num % 400 === 0) {
    return true;
  } else if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  }
  return false;
}

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
// ----------------------------------
const isInteger = (num) => typeof num === "number";
console.log(isInteger(3));
console.log(isInteger("3"));
// ----------------------------------
const add_all = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
console.log(add_all([1, 2, 3]));
// ----------------------------------
const toCelcius = (fahr) => (((fahr - 32) / 9) * 5).toFixed(2);
console.log("32 Farenheit = ", toCelcius(32), " Celcius");
// ----------------------------------
const getFact = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * getFact(num - 1);
};
console.log(getFact(5));
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
// ----------------------------------
var arr = [10, 32, 65, 2];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Withing timeout let", i);
  }, 3000);
}
// ----------------------------------
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Withing timeout var", i);
  }, 3000);
}
// ----------------------------------
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("kajal"));
// ----------------------------------
var arr2 = [{ radius: 5 }, { radius: 9 }, { radius: 2 }];
const arrComparator = (arr) => arr.sort((a, b) => a.radius - b.radius);
console.log(arrComparator(arr2));
// ----------------------------------
let myArr = [1, 2, 3];
myArr[5] = 6;
console.log(myArr, myArr.length);

// ----------------------------------
var strArray = ["kajal", "mapare", "kaj"];
const largestStr = strArray.reduce((prev, curr) => {
  return prev.length > curr.length ? prev : curr;
}, "");
console.log(largestStr);
// ----------------------------------
let myArr2 = [1, 2, 3];
const sumOfSquares = myArr2.map((num) => num * num).reduce((a, b) => a + b, 0);
console.log(sumOfSquares);
// ----------------------------------
let myArr3 = [1, 2, 3];
const getEvenNumbers = () =>
  // return Array.prototype.slice.call(arguments);
  myArr3.filter((num) => num % 2 === 0);
console.log(getEvenNumbers());
// ----------------------------------
const getOutput = (arr, criteriaFun) =>
  arr.filter((data) => !criteriaFun(data));

const fun = (num) => num % 2 === 0;
console.log(getOutput([1, 2, 3, 4], fun));
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
// ---------------------------
