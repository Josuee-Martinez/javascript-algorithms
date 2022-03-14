function power(current, voltage) {
   console.log(current * voltage);
}

// power(230, 10);

function squared(number) {
   console.log(Math.pow(2));
}

// squared(2);

function detectWord(str) {
   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
         console.log(str[i]);
      }
   }
}

// detectWord("UcUNFYGaFYFYGtNUH");

function isEven(n) {
   console.log(n % 2 === 0);
}

// isEven(3);

function addition(a, b) {
   console.log(a + b);
}

// addition(-2, -4);

function nextEdge(side1, side2) {
   console.log(side1 + side2 - 1);
}

// nextEdge(8, 10);

function countTrue(arr) {
   let trueValues = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString() === "true") {
         trueValues.push(arr[i]);
      }
   }
   console.log(trueValues.length);
}

// countTrue([true, false, true]);
// const countTrue = (r) => r.filter(Boolean).length;
// console.log(countTrue(true, true, false));

function getIndexToIns(arr, num) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
   }
   newArr.push(num);

   newArr.sort((a, b) => {
      return a - b;
   });

   return newArr.indexOf(num);
}

// getIndexToIns([40, 60], 50);

function factorial(num) {
   let factorizedNum = 1;
   for (let i = 1; i <= num; i++) {
      factorizedNum *= i;
   }
   console.log(factorizedNum);
}

// factorial(0);

function and(bool1, bool2) {
   if (bool1 && bool2) {
      console.log(true);
   }
   console.log(false);
}

// and(true, true);

function oddOrEven(s) {
   // if (s.length % 2 === 0) return "even";
   // if (s.length % 2 !== 0) return "odd";
   return s.length % 2 === 0;
}
// console.log(oddOrEven("pears"));

function remainder(x, y) {
   console.log(x % y);
}

// remainder(1, 3);

function countTrue(arr) {
   let trueVals = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i]) trueVals.push(arr[i]);
   }
   console.log(trueVals.length);
}
// countTrue([true, true, false]);

function animals(chickens, cows, pigs) {
   // let chickLegs = 2 * chickens;
   // let cowLegs = 4 * cows;
   // let pigLegs = 4 * pigs;

   // console.log(chickLegs + cowLegs + pigLegs);
   let totalLegs = 2 * chickens + 4 * cows + 4 * pigs;
   console.log(totalLegs);
}

// animals(1, 2, 3);

function warOfNumbers(arr) {
   let even = 0;
   let odd = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         even += arr[i];
      } else {
         odd += arr[i];
      }
   }

   let biggest = Math.max(even, odd);
   let smallest = Math.min(even, odd);

   console.log(biggest - smallest);
}

// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]);

function numberLengthSort(arr) {
   // .join(" ")
   // .toString()
   // .split(" ")
   // .sort((a, b) => (a.length > b.length ? 1 : b.length > a.length ? -1 : 0))
   // .map((num) => parseInt(num));
   return arr.sort((a, b) => String(a).length - String(b).length);
}

// console.log(numberLengthSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]));

function checkEquality(a, b) {
   return a === b && typeof a === typeof b;
}

// console.log(checkEquality(true, true));

function findNemo(sentence) {
   let found = sentence.split(" ");

   if (found.indexOf("Nemo") > -1)
      return `I found Nemo at ${found.indexOf("Nemo") + 1}!`;
   return "I can't find Nemo :(";
}

// console.log(findNemo("I am finding Nemo !"));

function ascDesNone(arr, str) {
   if (str === "Asc") return arr.sort((a, b) => a - b);
   if (str === "Des") return arr.sort((a, b) => b - a);
   return arr;
}

// console.log(ascDesNone([4, 3, 2, 1], "None"));

function isTriplet(n1, n2, n3) {
   let arr = [n1, n2, n3];
   let biggest = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > biggest) {
         biggest = arr[i];
      }
   }

   let indexOfBiggest = arr.indexOf(biggest);

   if (
      Math.pow(arr[0], 2) +
         Math.pow(arr[1], 2) +
         Math.pow(arr[2], 2) -
         Math.pow(arr[indexOfBiggest], 2) ===
      Math.pow(biggest, 2)
   ) {
      return true;
   }
   return false;
}

// console.log(isTriplet(13, 5, 12));

function arrayOfMultiples(num, length) {
   let arr = [];
   for (let i = 1; i < length + 1; i++) {
      arr.push(num * i);
   }
   console.log(arr);
}

// arrayOfMultiples(12, 10);

function numbersSum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") sum = sum + arr[i];
   }
   console.log(sum);
}

// numbersSum([1, 2, "13", "4", "645"]);

function solve(eq) {
   let arr = eq.split(" ");

   if (arr[1] === "+") return parseInt(arr[4]) - parseInt(arr[2]);

   if (arr[1] === "-") return parseInt(arr[4]) + parseInt(arr[2]);

   if (arr[1] === "*") return parseInt(arr[4]) / parseInt(arr[2]);

   if (arr[1] === "/") return parseInt(arr[4]) * parseInt(arr[2]);
}

// console.log(solve("x + 300 = 100"));

function sevenBoom(arr) {
   return arr.join("").indexOf(7) > -1 ? "Boom!" : "there is no 7 in the array";
}

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));

function averageWordLength(str) {
   let punct = [".", "!", ",", "?"];
   let arr_str = str.split(" ");
   let count = 0;
   for (let word of arr_str) {
      for (let i = 0; i < word.length; i++) {
         if (!punct.includes(word[i])) {
            count += 1;
         }
      }
   }

   return parseFloat((count / arr_str.length).toFixed(2));
}

// console.log(averageWordLength("Dude, this is so awesome!"));
function checkEquals(a, b) {
   return (
      // Array.isArray(a) &&
      // Array.isArray(b) &&
      a.every((val, index) => val === b[index])
   );
}

// console.log(checkEquals([1, 2], [1, 2]));

function rev(n) {
   return Math.abs(n).toString().split("").reverse().join("");
}

// rev(69);

function squareDigits(n) {
   let arr = n.toString().split("");
   let squaredArr = [];

   for (let i = 0; i < arr.length; i++) {
      squaredArr.push(parseInt(Math.pow(arr[i], 2)));
   }

   console.log(parseInt(squaredArr.join("")));
}

// squareDigits(2483);

function getBudgets(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i].budget;
   }
   console.log(sum);
}

// getBudgets([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 },
// ]);

function addition(num) {
   return num + 1;
}

// console.log(addition(2));

function marathonDistance(d) {
   // let marathonLength = 0;

   // for (let i = 0; i < d.length; i++) {
   //   marathonLength += Math.abs(d[i]);
   // }
   // console.log(marathonLength);

   return d.reduce((acc, num) => Math.abs(acc) + Math.abs(num), 0) === 25;
}
// console.log(marathonDistance([]));

function indexMultiplier(arr) {
   // let sum = 0;

   // for (let i = 0; i < arr.length; i++) {
   //   sum += arr[i] * i;
   // }
   // console.log(sum);
   return arr.reduce((acc, num, i) => acc + num * i, 0);
}

// console.log(indexMultiplier([-3, 0, 8, -6]));

const makePlusFunction = (fn, baseNum) => {
   return fn + baseNum;
};

function addTen(num) {
   return num;
}

// console.log(makePlusFunction(addTen(3), 10));
// function makePlusFunction(baseNum) {
//   return function (num) {
//     return num + baseNum;
//   };
// }

// let plusFive = makePlusFunction(5);

// console.log(plusFive(5));

function triArea(base, height) {
   return (base * height) / 2;
}

// triArea(3, 2);

function makePair(num1, num2) {
   let n1 = num1.toString().split("");
   let n2 = num2.toString().split("");
}

// makePair(1, 2);

function capToFront(s) {
   let arr = s.split("");
   let upper = [];
   let lower = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].toUpperCase()) {
         upper.push(arr[i]);
      } else if (arr[i] === arr[i].toLowerCase()) {
         lower.push(arr[i]);
      }
   }
   console.log(upper.concat(lower).join(""));
}

// capToFront("hApPy");

function iSqrt(n) {
   if (n >= 0) {
      // let newN = n;
      let count = 0;
      while (n >= 2) {
         n = Math.sqrt(n);
         count++;
      }
      console.log(n, count);
   }
}
// console.log("invalid");

// iSqrt(256);

function totalVolume(...boxes) {
   var sum = 0;
   for (let i = 0; i < boxes.length; i++) {
      sum += boxes[i][0] * boxes[i][1] * boxes[i][2];
   }
   console.log(sum);
}
// totalVolume([2, 2, 2], [2, 1, 1]);

function evenlyDivisible(a, b, c) {
   let sum = 0;

   for (a; a <= b; a++) {
      if (a % c === 0) {
         sum += a;
      }
   }
   console.log(sum);
}

// evenlyDivisible(1, 10, 3);

function convert(hours, minutes) {
   console.log(hours * 60 * 60 + minutes * 60);
}

// convert(1, 3);

function reverseString(str) {
   let newStr = "";

   for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
   }

   return newStr;
}

// console.log(reverseString("hello"));

function factorialize(num) {
   let factorial = 1;

   for (let i = 1; i <= num; i++) {
      console.log(factorial, i);
      factorial *= i;
   }
   // return factorial;
}

// console.log(factorialize(5));

function findLongestWordLength(str) {
   let arr = str.split(" ");
   let longest = "";
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
         longest = arr[i];
      }
   }
   console.log(longest);
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
   let haha = [];
   for (let i = 0; i < arr.length; i++) {
      arr[i].sort((a, b) => {
         return b - a;
      });
      haha.push(arr[i][0]);
   }
   console.log(haha);
}

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

function confirmEnding(str, target) {
   console.log(str.substr(-target.length) === target);
}

// confirmEnding("Bastian", "tian");

// function repeatStringNumTimes(str, num) {
//   let repeatedStr = "";

//   for (let i = 0; i < num; i++) {
//     repeatedStr += str;
//   }
//   console.log(repeatedStr);
// }

// repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
   console.log(str.slice(0, num) + "...");
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

function findElement(arr, func) {
   let num = 0;

   for (let i = 0; i <= arr.length; i++) {
      if (func(arr[i])) {
         num += arr[i];
         break;
      }
   }

   if (num <= 0) return undefined;
   return num;
}

// findElement([1, 3, 5, 9], (num) => num % 2 === 0);

function booWho(bool) {
   // if (typeof bool === "boolean") return console.log(true);
   // console.log(bool);
   return typeof bool === "boolean";
}

// booWho([1, 2]);

function titleCase(str) {
   let arr = str.split(" ");

   let result = [];

   for (let i = 0; i < arr.length; i++) {
      result.push(
         arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
      );
   }

   console.log(result.join(","));
}

// titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
   let result = [];

   result.push(...arr2.slice(0, n));

   result.push(...arr1);

   result.push(...arr2.slice(n));

   console.log(result);
}

// frankenSplice([1, 2, 3], [4, 5], 1);

function bouncer(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
         console.log(arr[i]);
      }
   }
}

// bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
   arr.push(num);

   arr.sort((a, b) => {
      return a - b;
   });

   return arr.indexOf(num);
}

// console.log(getIndexToIns([40, 60], 50));

function mutation(arr) {
   let firstW = arr[0].toLowerCase();
   let secondW = arr[1].toLowerCase();

   for (let i = 0; i < secondW.length; i++) {
      if (firstW.indexOf(secondW[i]) === -1) console.log(false);
   }
   console.log(true);
}

// mutation(["hello", "hey"]);

function chunkArrayInGroups(arr, size) {
   let groups = [];

   while (arr.length > 0) {
      groups.push(arr.splice(0, size));
   }
   console.log(groups);
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

function changeEnough(change, amountDue) {
   let quarters = change[0] * 0.25;
   let dimes = change[1] * 0.1;
   let nickels = change[2] * 0.05;
   let pennies = change[3] * 0.01;

   let totalChange = quarters + dimes + nickels + pennies;

   if (totalChange >= amountDue) return true;
   return false;
}

// changeEnough([25, 20, 5, 0], 4.25);

function firstLast(arr) {
   let first = arr[0];
   let last = arr[arr.length - 1];
   // console.log(first);
   let newArr = [first, last];
   console.log(newArr);
}

// firstLast(["edabit", 13, null, false, true]);

function fart(beans) {
   let calculation = Math.pow(beans, 2) * 2 + beans * 5 + 3;

   console.log(calculation);
}

// fart(6);

function monthName(num) {
   let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   console.log(months[num - 1]);
}

// monthName(12);

function testJackpot(result) {
   let first = result[0];

   let equalsArr = [];

   for (let i = 0; i < result.length; i++) {
      if (first === result[i]) {
         equalsArr.push(result[i]);
      }
   }

   return equalsArr.length === result.length;
}

// testJackpot(["abc", "abc", "absc", "abc"]);

function findSmallestNum(arr) {
   arr.sort((a, b) => {
      return a - b;
   });

   console.log(arr);
}

// findSmallestNum([34, 15, 88, 2]);

function reverseAndNot(i) {
   let reversed = i.toString().split("").reverse();
   let noReversed = i.toString().split("");
   console.log(parseInt(reversed.concat(noReversed).join("")));
}
// reverseAndNot(123);

function makeTitle(str) {
   let strArr = str.split(" ");
   let capitalizedWords = [];

   for (let i = 0; i < strArr.length; i++) {
      capitalizedWords.push(
         strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
      );
   }
   console.log(capitalizedWords.join(" "));
}

// makeTitle("This is a title");

function measureDepth(arr) {
   console.log(JSON.stringify(arr).length / 2);
}

// measureDepth([[]]);

function getMiddle(str) {
   let middleChar = (str.length + 1) / 2;

   if (str.length % 2 !== 0) {
      console.log(str.charAt(middleChar - 1));
   } else {
      console.log(
         str.charAt(Math.floor(middleChar) - 1) +
            str.charAt(Math.floor(middleChar))
      );
   }
}

// getMiddle("a");

function cubeSquareRoot(num) {
   return Math.pow(Math.sqrt(num), 3);
}

// cubeSquareRoot(81);

function tempConversion(celsius) {
   let temps = [];

   if (celsius <= -273.16) return "Invalid";
   let fahrenheit = celsius * (9 / 5) + 32;
   let kelvin = celsius + 273.15;

   temps.push(Number(fahrenheit.toFixed(2)), Number(kelvin.toFixed(2)));

   console.log(temps);
}

// tempConversion(-273.16);

function findBob(names) {
   console.log(names.indexOf("Bob"));
}

// findBob(["Jimmy", "Layla", "Bob"]);

function triangle(n) {
   let initial = 0;

   for (let i = 1; i <= n; i++) {
      initial += i;
   }
   console.log(initial);
}

// triangle(1);

function doubleFactorial(num) {
   let fact = 1;

   for (let i = 1; i <= num; i++) {
      if (num % 2 === 0) {
         if (i % 2 === 0) {
            fact *= i;
         }
      } else {
         if (i % 2 !== 0) {
            fact *= i;
         }
      }
   }

   console.log(fact);
}

// doubleFactorial(0);

function isSastry(number) {
   // if (Number.isInteger(Math.sqrt(number))) {
   //   console.log("haha");
   // }
   // let sum = number.toString() + String(number + 1);
   // console.log(sum);
   console.log(
      Number.isInteger(Math.sqrt(number.toString() + String(number + 1)))
   );
}

// isSastry(106755);

function multiplyNums(nums) {
   let numsArr = nums.split(", ");
   let product = 1;

   for (let i = 0; i < numsArr.length; i++) {
      product *= parseInt(numsArr[i]);
   }

   console.log(product);
}

// multiplyNums("2, 3");

function reverseArr(num) {
   let strNum = num.toString().split("").reverse().join("");
   let numArr = [];

   for (let i = 0; i < strNum.length; i++) {
      numArr.push(parseInt(strNum[i]));
   }
   console.log(numArr);
}

// reverseArr(1485979);

function countWords(str) {
   console.log(str.split(" ").length);
}

// countWords("Just an example here move along");

function mean(num) {
   let numsArr = num.toString().split("");
   let sum = 0;

   for (let i = 0; i < numsArr.length; i++) {
      sum += parseInt(numsArr[i]);
   }
   console.log(sum / numsArr.length);
}

// mean(666);

function unlucky13(nums) {
   let amendedArr = [];
   for (let i = 0; i < nums.length; i++) {
      if (!Number.isInteger(nums[i] / 13)) {
         amendedArr.push(nums[i]);
      }
   }
   console.log(amendedArr);
}

// unlucky13([53, 182, 435, 591, 637]);

function sumAll(arr) {
   let first = arr[0];
   let second = arr[1];

   let result = 0;

   if (first < second) {
      for (let i = first; i <= second; i++) {
         result += i;
      }
   } else {
      for (let i = second; i <= first; i++) {
         result += i;
      }
   }

   console.log(result);
}

// sumAll([4, 1]);

function diffArray(arr1, arr2) {
   let newArr = [];

   for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
         newArr.push(arr1[i]);
      }
   }

   for (let j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[j]) === -1) {
         newArr.push(arr2[j]);
      }
   }
   console.log(newArr);
}

// diffArray(
//   ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// );

function destroyer(arr, ...args) {
   let sameVals = [];

   let argums = [];

   for (let arg of args) {
      argums.push(arg);
   }

   for (let i = 0; i < arr.length; i++) {
      if (argums.indexOf(arr[i]) === -1) {
         sameVals.push(arr[i]);
      }
   }

   console.log(sameVals);
}

// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

function toArray(obj) {
   console.log(Object.entries(obj));
}

// toArray({ a: 1, b: 2 });

function additiveInverse(arr) {
   let numbers = [];
   for (let i = 0; i < arr.length; i++) {
      numbers.push(-arr[i]);
   }
   console.log(numbers);
}

// additiveInverse([-5, -25, 35]);

function numberSplit(n) {
   // for (let i = 1; i <= n; i++) {
   //   console.log(i);
   // }
   let arr = [];
   let d = n / 2;

   if (n < 0 && n % 2 !== 0) {
      arr.push(Math.floor(d), Math.ceil(d));
   } else if (n % 2 === 0) {
      arr.push(d, d);
   } else if (n % 2 !== 0) {
      arr.push(Math.floor(d), Math.ceil(d));
   }

   console.log(arr);
}

// numberSplit(-9);

function tetra(n) {
   console.log((n * (n + 1) * (n + 2)) / 6);
}

// tetra(5);

// Fix this incorrect code, so that all tests pass!
let x = [1, 2, 3, 4, 5];
function minusOne(arr) {
   let slicedArr = arr.slice(0, arr.length - 1);
   console.log(slicedArr);
}

// minusOne(x);

function coneVolume(h, r) {
   console.log(Number(Number((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2)));
}

// coneVolume(15, 6);

function keysAndValues(obj) {
   let arr = [];

   arr.push(Object.keys(obj));
   arr.push(Object.values(obj));

   console.log(arr);
}

// keysAndValues({ a: 1, b: 2, c: 3 });

function washHands(N, nM) {
   let minutes = (N * 21 * nM * 30) / 60;
   // console.log(minutes % 1);
   return `${Math.floor(minutes)} minutes and ${(minutes % 1) * 60} seconds`;
}
// console.log(0.5 * 60);
// console.log(washHands(7, 9));

function capMe(arr) {
   let cappedNames = [];

   for (let i = 0; i < arr.length; i++) {
      cappedNames.push(
         arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
      );
   }
   console.log(cappedNames);
}

// capMe(["mavis", "senaida", "letty"]);

function difference(nums) {
   nums.sort((a, b) => a - b);

   return nums[nums.length - 1] - nums[0];
}

// difference([10, 15, 20, 2, 10, 6]);

function repeat(item, times) {
   let arr = [];

   for (let i = 0; i < times; i++) {
      arr.push(item);
   }

   console.log(arr);
}

// repeat("edabit", 3);

function multiplyByLength(arr) {
   let resultArr = [];

   for (let i = 0; i < arr.length; i++) {
      resultArr.push(arr[i] * arr.length);
   }

   console.log(resultArr);
}

// multiplyByLength([2, 3, 1, 0]);

function convert(deg) {
   let strNums = [];

   let arr = deg.split("°");

   for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(parseInt(arr[i]))) {
         strNums.push(arr[i]);
      }
   }

   let nums = parseInt(strNums.join(""));

   if (deg.indexOf("C") > -1) {
      return (
         Math.round(nums * (9 / 5) + 32).toString() +
         deg.slice(deg.length - 2, deg.length - 1) +
         "F"
      );
   }

   if (deg.indexOf("F") > -1) {
      return (
         Math.round((nums - 32) / 1.8).toString() +
         deg.slice(deg.length - 2, deg.length - 1) +
         "C"
      );
   }

   return "Error";
}

// console.log(convert("-35°C"))

function mult(arr) {
   let flattened = arr.flat();

   for (let i = 0; i < flattened.length; i++) {
      console.log(flattened[i]);
   }
}

// mult([[123], [456], [789]]);
function factorize(num) {
   let factorsArr = [];

   for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
         factorsArr.push(i);
      }
   }

   console.log(factorsArr);
}

// factorize(17);

function findLargestNum(arr) {
   console.log(arr.sort((a, b) => a - b)[arr.length - 1]);
}

// findLargestNum([4, 5, 1, 3]);

function lastItem(input) {
   console.log(input[input.length - 1]);
}

// lastItem("");

function removeEmptyArrays(arr) {
   console.log(arr.filter((x) => !Array.isArray(x)));
}

// removeEmptyArrays([1, 2, [], 4]);

function sortIt(arr) {
   console.log(arr.sort((a, b) => a - b));
}

// sortIt([[3], 4, [2], [5], 1, 6]);

function reverse(str) {
   let revOrder = str.split(" ").reverse();
   let revArr = [];

   for (let i = 0; i < revOrder.length; i++) {
      // revArr.push(revOrder[i]);
      revArr.push(revOrder[i].split("").reverse().join(""));
   }

   console.log(revArr.join(" "));
}

// reverse("Edabit is really helpful!");

function nameShuffle(str) {
   console.log(str.split(" ").reverse().join(" "));
}

// nameShuffle("Donald Trump");

function isBetween(first, last, word) {
   let arr = [first, last, word];

   return arr.sort().indexOf(word) === 1;
}
// console.log(isBetween("monk", "monument", "monkey"));

function checkPalindrome(str) {
   let reversed = str.split("").reverse().join("");

   return str === reversed;
}
// checkPalindrome("mom");

function missingAngle(angle1, angle2) {
   let thirdAngle = Math.abs(angle1 + angle2 - 180);

   return thirdAngle > 90 ? "obtuse" : thirdAngle < 90 ? "acute" : "right";
}
// console.log(missingAngle(45, 45));
function factorChain(arr) {
   let factors = [];
   let current = 1;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % current === 0) {
         current = arr[i];
         factors.push(arr[i]);
      }
   }
   console.log(factors.length === arr.length);
}
// factorChain([2, 4, 6, 7, 12]);

function numberSyllables(word) {
   console.log(word.split("-").length);
}
// numberSyllables("on-o-mat-o-poe-ia");

function Go(num) {
   let dashes = "";
   for (let i = 0; i < num; i++) {
      dashes += "-";
   }
   console.log(dashes);
}
// Go(5);

function filterArray(arr) {
   console.log(arr.filter((el) => typeof el === "number"));
}
// filterArray([1, 2, 3, "a", "b", 4]);

function checkEnding(str1, str2) {
   console.log(str1.substr(-str2.length) === str2);
}
// checkEnding("abc", "bcg");

function getTotalPrice(groceries) {
   let amount = 0;

   for (let i = 0; i < groceries.length; i++) {
      // console.log(groceries[i].quantity * groceries[i].price);
      amount += groceries[i].quantity * groceries[i].price;
   }
   console.log(Number(amount.toFixed(1)));
}

// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.1 },
//   { product: "Lollipop", quantity: 1, price: 0.2 },
// ]);

function reverseOdd(str) {
   let resultingArr = [];
   let strArr = str.split(" ");

   for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length % 2 !== 0) {
         resultingArr.push(strArr[i].split("").reverse().join(""));
      } else {
         resultingArr.push(strArr[i]);
      }
   }
   console.log(resultingArr.join(" "));
}

// reverseOdd("Make sure uoy only esrever sdrow of ddo length");

function canCapture([yourRook, opponentsRook]) {
   let myRow = yourRook[0];
   let oppRow = opponentsRook[0];

   let myCol = yourRook[1];
   let oppCol = opponentsRook[1];

   // if (myRow === oppRow || myCol === oppCol) {
   //   console.log(true);
   // } else {
   //   console.log(false);
   // }
   return myRow === oppRow || myCol === oppCol;
}

// canCapture(["A1", "B2"]);\

const getStudentsWithNamesAndTopNotes = (students) => {
   let arr = [];

   for (let i = 0; i < students.length; i++) {
      if (students[i].notes.length === 0) {
         arr.push({
            name: students[i].name,
            topNote: 0,
         });
      } else {
         arr.push({
            name: students[i].name,
            topNote: students[i].notes.sort((a, b) => b - a)[0],
         });
      }
   }
   console.log(arr);
};

// getStudentsWithNamesAndTopNotes([
//   { name: "John", notes: [3, 5, 4] },
//   { name: "Josue", notes: [] },
// ]);

function reverseWords(string) {
   console.log(
      // string.replace(/  +/g, " ").trim().plit(" ").reverse().join(" ")
      string.split("  ").reverse().join("  ")
   );
}
// reverseWords("hello   world!  ");

function profit(info) {
   console.log(
      Math.round(
         info.inventory * info.sellPrice - info.inventory * info.costPrice
      )
   );
}
// profit({
//   costPrice: 2.77,
//   sellPrice: 7.95,
//   inventory: 8500,
// });

function objectToArray(obj) {
   console.log(Object.entries(obj));
}

// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3,
// });

function edaBit(start, end) {
   let result = [];

   for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         result.push("Edabit");
      } else if (i % 3 === 0) {
         result.push("Eda");
      } else if (i % 5 === 0) {
         result.push("Bit");
      } else {
         result.push(i);
      }
   }
   console.log(result);
}
// edaBit(0, 10);

function reverseCapitalize(str) {
   return str.split("").reverse().join("").toUpperCase();
}

// console.log(reverseCapitalize("hellothere"));

function dis(price, discount) {
   let a = (price * discount) / 100;
   let x = price - a;
   console.log(Number((price - (price * discount) / 100).toFixed(2)));
}
// dis(593, 61);

function flatten(arr) {
   let arr2 = [];
   for (let i = 0; i < arr.length; i++) {
      arr2.push(arr[i]);
   }
   console.log(arr2);
}

// flatten([
//   ["a", "b"],
//   ["c", "d"],
// ]);

function linesAreParallel(l1, l2) {
   if (l1[0] === l2[0] && l1[1] === l2[1] && l1[2] === l2[2]) {
      console.log("same");
   }

   if (l1[0] / l1[1] === l2[0] / l2[1] && l1[2] !== l2[2]) {
      console.log(true);
   }
}
// linesAreParallel([2, 5, 0], [20, 50, 10]);

// console.log(50 / 20);

// m y2 - y1 / x2 - x1

function paths(n) {
   let res = 1;

   for (let i = 1; i <= n; i++) {
      res *= i;
   }

   console.log(res);
}
// paths(4);

function addEnding(arr, ending) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i] + ending);
   }
   console.log(newArr);
}
// addEnding(["clever", "meek", "hurried", "nice"], "ly");

function signYourName(obj) {
   // write your code here
   // don't use a return statement
   Object.preventExtensions(obj);

   // DON'T CHANGE OR REMOVE THE LINES BELOW
   obj.yourSignature = "Whatever";
   obj.spouseSignature = "Nice Try";
   console.log(obj);
}

// signYourName({ yourSignature: "jjj" });

function boxSeq(step) {
   let total = 0;

   for (let i = 1; i <= step; i++) {
      if (i % 2 !== 0) {
         total += 3;
      } else if (i % 2 === 0) {
         total += -1;
      }
   }
   console.log(total);
}
// boxSeq(6);

function diffMaxMin(arr) {
   let max = Math.max(...arr);
   let min = Math.min(...arr);
   console.log(max - min);
}
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);

function isPotentialFriend(set1, set2) {
   let biggestArr;

   let commonInterests = [];

   if (set1.length >= set2.length) {
      biggestArr = set1;
   } else if (set1.length < set2.length) {
      biggestArr = set2;
   }

   for (let i = 0; i < biggestArr.length; i++) {
      if (set1.includes(set2[i])) {
         commonInterests.push(set2[i]);
      }
   }

   console.log(
      commonInterests.length >= 2 ||
         biggestArr.length === commonInterests.length
   );
}

// isPotentialFriend(
//   ["sports", "music", "chess"],
//   ["coding", "music", "netflix", "chess"]
// );

function insertWhitespace(s) {
   let camel = s.replace(/([a-z])([A-Z])/g, "$1 $2");
   console.log(camel);
}
// insertWhitespace("SheWalksToTheBeach");

function isFourLetters(arr) {
   let containerArr = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 4) {
         containerArr.push(arr[i]);
      }
   }

   return containerArr;
}
// isFourLetters(["Tomato", "Potato", "Pair"]);

function sortByLastName(books) {
   let revAuthor = [];

   let finalArr = [];

   for (let i = 0; i < books.length; i++) {
      books[i].author = books[i].author.split(" ").reverse().join(" ");
      revAuthor.push(books[i]);
   }

   let sorted = revAuthor.sort((a, b) => {
      if (a.author > b.author) return 1;
      if (a.author < b.author) return -1;
      if ((a.author = b.author)) return 0;
   });

   for (let j = 0; j < sorted.length; j++) {
      sorted[j].author = sorted[j].author.split(" ").reverse().join(" ");
      finalArr.push(sorted[j]);
   }

   console.log(finalArr);
}

// sortByLastName([
//   { name: "Harry Potter", rating: 9, author: "Joanne Rowling" },
//   { name: "Warcross", rating: 7, author: "Marie Lu" },
//   { name: "The Hunger Games", rating: 10, author: "Suzanne Collins" },
// ]);

function myReplace(str, before, after) {
   let modified = "";

   if (str.indexOf(before) > -1) {
      if (
         str.charAt(str.indexOf(before)) ===
         str.charAt(str.indexOf(before)).toUpperCase()
      ) {
         modified = str.replace(
            before,
            after.charAt(0).toUpperCase() + after.slice(1)
         );
      } else if (
         str.charAt(str.indexOf(before)) ===
         str.charAt(str.indexOf(before)).toLowerCase()
      ) {
         modified = str.replace(
            before,
            after.charAt(0).toLowerCase() + after.slice(1)
         );
      }
   }

   console.log(modified);
}

// myReplace("I think we should look up there", "up", "Down");

function fearNotLetter(str) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";

   let start = alphabet.indexOf(str.charAt(str[0]));
   let end = alphabet.indexOf(str.charAt(str.length - 1)) + 1;

   let aSlice = alphabet.slice(start, end);

   let missingLetters = "";

   for (let i = 0; i < aSlice.length; i++) {
      if (!str.includes(aSlice[i])) {
         missingLetters = aSlice[i];
      }
   }

   if (missingLetters === "") return undefined;

   return missingLetters;
}

// fearNotLetter("abcdefghijklmnopqrstuvwxyz");

function uniteUnique(arr) {
   let numsArr = [];

   for (let i = 0; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
         numsArr.push(arguments[i][j]);
      }
   }

   return [...new Set(numsArr)];
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// let uniq = (numsArr) => [...new Set(numsArr)];

// console.log(uniq([1, 1, 3, 3, 3, 5, 2, 6]));

function reverse(str) {
   let final = "";

   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === str[i].toLowerCase()) {
         final += str[i].toUpperCase();
      } else if (str[i] === str[i].toUpperCase()) {
         final += str[i].toLowerCase();
      }
   }

   console.log(final);
}

// reverse("Hello World");

function findLongest(sentence) {
   let stripped = sentence.replace(/[^A-Za-z0-9]/g, " ");
   let arr = stripped.split(" ");
   let longest = "";

   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
         longest = arr[i];
      }
   }

   console.log(longest);
}
// findLongest("A thing of beauty is a joy forever.");

function filterDigitLength(arr, num) {
   let strArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().length === num) {
         strArr.push(arr[i]);
      }
   }
   console.log(strArr);
}
// filterDigitLength([5, 6, 8, 9], 1);

function sortByLength(str) {
   // return str
   //   .split(" ")
   //   .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
   //   .sort((a, b) => a.length - b.length)
   //   .join(" ");

   let arr = str.split(" ");

   let sorted = arr.sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
   );

   let joined = sorted.sort((a, b) => a.length - b.length).join(" ");

   console.log(joined);
}
// sortByLength("To be or not to be, that is the question.");

function dropElements(arr, func) {
   for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
         return arr.slice(i);
      }
   }
}

// console.log(
//   dropElements([1, 2, 3, 9, 2, 1, 0, 100], function (n) {
//     return n > 2;
//   })
// );

function sumFibs(num) {
   let fibo = [1, 1];

   let oddFibos = [];

   while (fibo[fibo.length - 1] + fibo[fibo.length - 2] <= num) {
      fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
   }

   for (let i = 0; i < fibo.length; i++) {
      if (fibo[i] % 2 !== 0) {
         oddFibos.push(fibo[i]);
      }
   }

   // console.log(oddFibos);

   let oddFibosSum = oddFibos.reduce((acc, num) => {
      return acc + num;
   });

   console.log(oddFibosSum);
}

// sumFibs(75025);

function sumMissingNumbers(arr) {
   let missingSum = 0;

   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      if (arr.indexOf(i) === -1) {
         missingSum += i;
      }
   }

   console.log(missingSum);
}

// sumMissingNumbers([10, 20, 30, 40, 50, 60]);

function fire(matrix, coordinates) {
   let letter = coordinates[0];
   let number = coordinates[1];
   let A = matrix[0];
   let B = matrix[1];
   let C = matrix[2];
   let D = matrix[3];
   let E = matrix[4];

   if (letter === "A") return A[number - 1] === "." ? "splash" : "BOOM";

   if (letter === "B") return B[number - 1] === "." ? "splash" : "BOOM";

   if (letter === "C") return C[number - 1] === "." ? "splash" : "BOOM";

   if (letter === "D") return D[number - 1] === "." ? "splash" : "BOOM";

   if (letter === "E") return E[number - 1] === "." ? "splash" : "BOOM";
}

// console.log(
//   fire(
//     [
//       [".", "."],
//       ["*", "*"],
//     ],
//     "B1"
//   )
// );

function letsMeet(distance, va, vb) {
   let hours = distance / (va + vb);
   let rhours = Math.floor(hours);
   let minutes = (hours - rhours) * 60;
   let rminutes = Math.floor(minutes);
   let seconds = (minutes - rminutes) * 60;
   console.log(Math.round(seconds));

   console.log(`${rhours}h ${rminutes}m ${Math.floor(seconds)}s`);
}

// letsMeet(250, 60, 80);

function calculateScore(games) {
   let benScore = 0;
   let abiScore = 0;
   let tie = 0;

   let rock = "R";
   let paper = "P";
   let scissors = "S";

   for (let i = 0; i < games.length; i++) {
      if (games[i][0] === rock && games[i][1] === paper) {
         benScore++;
      }
      if (games[i][0] === rock && games[i][1] === scissors) {
         abiScore++;
      }
      if (games[i][0] === rock && games[i][1] === rock) {
         tie++;
      }
      if (games[i][0] === paper && games[i][1] === rock) {
         abiScore++;
      }
      if (games[i][0] === paper && games[i][1] === scissors) {
         benScore++;
      }
      if (games[i][0] === paper && games[i][1] === paper) {
         tie++;
      }
      if (games[i][0] === scissors && games[i][1] === paper) {
         abiScore++;
      }
      if (games[i][0] === scissors && games[i][1] === rock) {
         benScore++;
      }
      if (games[i][0] === scissors && games[i][1] === scissors) {
         tie++;
      }
   }

   console.log(abiScore, benScore);
   if (benScore > abiScore) return "Benson";

   if (benScore < abiScore) return "Abigail";

   if (benScore === abiScore) return "Tie";
}

// console.log(
//   calculateScore([
//     ["S", "S"],
//     ["S", "P"],
//     ["R", "S"],
//     ["S", "R"],
//     ["R", "R"],
//   ])
// );

function missingNum(arr) {
   // let sorted = arr.sort((a, b) => {
   //   return a - b;
   // });

   for (let i = 1; i <= 10; i++) {
      if (arr.indexOf(i) === -1) {
         console.log(i);
      }
   }
}

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);

function countdown(start) {
   let countDownArr = [];
   for (let i = start; i >= 0; i--) {
      countDownArr.push(i);
   }
   console.log(countDownArr);
}

// countdown(5);

function powerRanger(power, min, max) {
   let arr = [];
   for (let i = 0; i <= max; i++) {
      if (Math.pow(i, power) >= min && Math.pow(i, power) <= max) {
         arr.push(i);
      }
   }
   console.log(arr.length);
}

// powerRanger(2, 49, 65);

function camelCasing(str) {
   // let string = "unEcEsSARilY_loNG_vArIablE_NaME";
   let space = " ";
   let underScore = "_";

   while (str.indexOf(underScore) > -1) {
      str = str.toLowerCase().replace(underScore, space);
   }

   let arr = str.split(" ");

   let upperCaseArr = [];

   for (let i = 0; i < arr.length; i++) {
      upperCaseArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
   }

   let strUpperCase = upperCaseArr.join("");

   console.log(strUpperCase[0].toLowerCase() + strUpperCase.slice(1));
}

// camelCasing("Hello World");

function isGoalScored(goal) {
   for (let i = 0; i < goal.length; i++) {
      if (goal[i].join("").includes(0)) {
         return (
            goal.indexOf(goal[i]) < 3 &&
            goal[i].join("").indexOf("0") > 2 &&
            goal[i].join("").indexOf("0") < 8
         );
      }
   }
}

// console.log(
//   isGoalScored([
//     ["  #     #  "],
//     ["  #     #  "],
//     ["  #     # 0"],
//     ["  #######  "],
//     ["     #     "],
//     ["     #     "],
//     ["     #     "],
//   ])
// );

function nextPrime(num) {
   for (let i = num; ; i++) {
      if (isPrime(i)) return i;
   }
}

function isPrime(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
      return true;
   }
}

// console.log(nextPrime(28));

function intWithinBounds(n, lower, upper) {
   if (!Number.isInteger(n)) return false;

   return n >= lower && n < upper;
}

// console.log(intWithinBounds(4, 3, 8));

function removeNull(arr) {
   let validVals = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null) {
         validVals.push(arr[i]);
      }
   }
}

// removeNull(["a", null, "b", null]);

function removeDups(arr) {
   // let returnArr = [];
   // for (let i = 0; i < arr.length; i++) {
   //    if (returnArr.indexOf(arr[i]) === -1) {
   //       returnArr.push(arr[i]);
   //    }
   // }
   // return returnArr;

   return [...new Set(arr)];
}

// console.log(removeDups([1, 0, 1, 0]));

function oddishOrEvenish(num) {
   let strArr = num.toString().split("");
   let result = 0;

   for (let i = 0; i < strArr.length; i++) {
      result += parseInt(strArr[i]);
   }

   if (result % 2 === 0) return "Evenish";

   if (result % 2 !== 0) return "Oddish";
}

// console.log(oddishOrEvenish(4433));

function isPandigital(num) {
   let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   let arr = num.toString().split("");
   let stripped = new Set(arr);
   let resArr = [];

   for (let numb of stripped) {
      if (numbers.indexOf(parseInt(numb)) > -1) {
         resArr.push(parseInt(numb));
      }
   }

   return numbers.length === resArr.length;
}

// console.log(isPandigital(98140723568910));

function apocalyptic(n) {
   let hugeString = BigInt(Math.pow(2, n)).toString();

   if (hugeString.indexOf("666") > -1) {
      return `Repent! ${hugeString.indexOf("666")} days until the Apocalypse!`;
   } else {
      return "Crisis averted. Resume sinning.";
   }
}

// console.log(apocalyptic(109));

function itemsPurchased(store, wallet) {
   let space = "";
   let comma = ",";
   let itemsAfforded = [];

   for (let item in store) {
      if (
         parseInt(store[item].split("$")[1].replace(comma, space)) <=
         wallet.split("$")[1].replace(comma, space)
      ) {
         itemsAfforded.push(item);
      }
   }

   let sorted = itemsAfforded.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
   });

   if (itemsAfforded.length === 0) return "Nothing";

   return sorted;
}

// itemsPurchased(
//    {
//       Phone: "$999",
//       Speakers: "$300",
//       Laptop: "$5,000",
//       PC: "$1200",
//    },
//    "$1"
// );

function missingLetter(arr) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";

   if (arr[0] === arr[0].toUpperCase()) {
      let start = alphabet.toUpperCase().indexOf(arr[0]);

      let end = alphabet.toUpperCase().indexOf(arr[arr.length - 1]) + 1;

      let slicedAlphabet = alphabet.toUpperCase().slice(start, end);

      for (let i = 0; i < slicedAlphabet.length; i++) {
         if (!arr.includes(slicedAlphabet[i])) {
            return slicedAlphabet[i];
         }
      }
   } else {
      let start = alphabet.indexOf(arr[0]);

      let end = alphabet.indexOf(arr[arr.length - 1]) + 1;

      let slicedAlphabet = alphabet.slice(start, end);

      for (let i = 0; i < slicedAlphabet.length; i++) {
         if (!arr.includes(slicedAlphabet[i])) {
            return slicedAlphabet[i];
         }
      }
   }
}

// missingLetter(["m", "o"]);

function sumOfMissingNums(arr) {
   let numbersArr = [];
   let resultArr = [];

   for (let i = 0; i < arr.length; i++) {
      if (!isNaN(parseInt(arr[i]))) {
         numbersArr.push(parseInt(arr[i]));
      }
   }

   let smallest = Math.min(...numbersArr);
   let biggest = Math.max(...numbersArr);

   for (let j = smallest; j <= biggest; j++) {
      if (!numbersArr.includes(j)) {
         resultArr.push(j);
      }
   }

   console.log(resultArr.length);
}

// sumOfMissingNums(["7", "3", "1", "9", "5"]);

function sharedLetters(str1, str2) {
   let strArr = str2.toLowerCase().split("");
   let returnedStr = [];
   let iKnowThisIsbad = [];

   for (let i = 0; i < strArr.length; i++) {
      if (str1.toLowerCase().includes(strArr[i])) {
         returnedStr.push(strArr[i]);
      }
   }

   let sorted = returnedStr.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
   });

   let set = new Set(sorted);

   for (let letter of set) {
      iKnowThisIsbad.push(letter);
   }

   return iKnowThisIsbad.join("");
}

// console.log(sharedLetters("house", "home"));

function firstRepeat(str) {
   const result = [];
   const strArr = str
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g);

   if (strArr === null) {
      return -1;
   }

   strArr.forEach((elem) => {
      result.push(elem[0]);
   });

   return result.join("");
}

// console.log(firstRepeat("legolas"));

function toCamelCase(str) {
   let dash = "-";
   let underScore = "_";
   let space = " ";
   let upperArr = [];

   if (str === "") return "";

   while (str.indexOf(dash) > -1) {
      str = str.replace(dash, space);
   }

   while (str.indexOf(underScore) > -1) {
      str = str.replace(underScore, space);
   }

   let strArr = str.split(" ");

   for (let i = 0; i < strArr.length; i++) {
      upperArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
   }

   if (str[0] === str[0].toUpperCase()) {
      return upperArr.join("");
   } else {
      return upperArr.join("")[0].toLowerCase() + upperArr.join("").slice(1);
   }
}

// console.log(toCamelCase("the-stealth-warrior"));

function isPrime(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return num > 1;
}

// console.log(isPrime(9));

function filterPrimes(num) {
   let primesArr = [];
   for (let i = 0; i < num.length; i++) {
      if (isPrime(num[i]) === true) {
         primesArr.push(num[i]);
      }
   }
   console.log(primesArr);
}

// filterPrimes([7, 9, 3, 9, 10, 11, 27]);

function encrypt(word) {
   let resArr = [];

   let reversed = word.split("").reverse().join("");

   for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === "a") {
         resArr.push("0");
      } else if (reversed[i] === "e") {
         resArr.push("1");
      } else if (reversed[i] === "i") {
         resArr.push("2");
      } else if (reversed[i] === "o") {
         resArr.push("2");
      } else if (reversed[i] === "u") {
         resArr.push("3");
      } else {
         resArr.push(reversed[i]);
      }
   }
   console.log(resArr.join("") + "aca");
}

// encrypt("josue");

function getStudentsWithNamesAndAvgNote(students) {
   let arr = [];
   for (let i = 0; i < students.length; i++) {
      if (students[i].notes.length === 0) {
         arr.push({ name: students[i].name, avgNote: 0 });
      } else {
         arr.push({
            name: students[i].name,
            avgNote:
               students[i].notes.reduce((acc, num) => {
                  return acc + num;
               }) / students[i].notes.length,
         });
      }
   }

   console.log(arr);
}

// console.log(getStudentsWithNamesAndAvgNote([{ name: "John", notes: [] }]));

function findOccurrences(str, char) {
   let result = {};
   str.split(" ").forEach((word) => {
      result[word.toLowerCase()] = word
         .toLowerCase()
         .split("")
         .filter((c) => c === char.toLowerCase()).length;
   });
   return result;
}

// console.log(findOccurrences("Hellooo World", "o"));

function lcm(n1, n2) {
   let n1Mults = [];
   let n2Mults = [];
   let final = [];

   if (n1 > n2 || n1 === n2) {
      for (let i = 1; i <= n1; i++) {
         n1Mults.push(n1 * i);
         n2Mults.push(n2 * i);
      }

      n1Mults.map((num) => {
         if (n2Mults.indexOf(num) > -1) {
            final.push(num);
         }
      });

      return final[0];
   } else if (n2 > n1) {
      for (let i = 1; i <= n2; i++) {
         n1Mults.push(n1 * i);
         n2Mults.push(n2 * i);
      }

      n1Mults.map((num) => {
         if (n2Mults.indexOf(num) > -1) {
            final.push(num);
         }
      });

      return final[0];
   }
}

// console.log(lcm(9, 9));

function digitCount(num) {
   let arr = num.toString().split("");
   let str = num.toString();

   for (let i = 0; i < arr.length; i++) {
      if (str.indexOf(arr[i]) > -1) {
         console.log(arr[i]);
      }
   }
}

// digitCount(136116);

function fibonacci(n) {
   let fibos = [BigInt(1), BigInt(1)];

   while (fibos.length < n) {
      fibos.push(fibos[fibos.length - 1] + fibos[fibos.length - 2]);
   }

   return fibos[fibos.length - 1].toString();
}

// console.log(fibonacci(80));

function firstRepeat(chars) {
   for (i = 1; i < chars.length; i++) {
      if (chars.slice(0, i).includes(chars[i])) {
         return chars[i];
      }
   }
   return "-1";
}

// console.log(firstRepeat("Galadriel"));

function numInStr(arr) {
   let resultArr = [];

   for (let i = 0; i < arr.length; i++) {
      arr[i].split("").forEach((l, i, a) => {
         if (parseInt(l)) {
            resultArr.push(a.join(""));
         }
      });
   }

   return [...new Set(resultArr)];
}

// console.log(
//    numInStr(["10xYZ", "xy2K77", "xy2K77", "xy2K77", "Z1K2W0", "Z1K2W0"])
// );

function pairs(arr) {
   if (arr.length === 0) return arr;

   let n = [];

   while (arr.length > 0) {
      n.push(arr.splice(0, 1).concat(arr.splice(arr.length - 1, 1)));
   }

   if (n[n.length - 1].length === 2) {
      return n;
   } else {
      n[n.length - 1].push(n[n.length - 1][0]);
      return n;
   }
}

// console.log(pairs[(1, 2, 5, 6, 3, 3)]);

function primeNumbers(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return num > 1;
}

function filterPrimes(num) {
   let primesArr = [];
   for (let i = 1; i < num; i++) {
      if (isPrime(i) === true) {
         primesArr.push(i);
      }
   }

   return primesArr.length;
}

// console.log(filterPrimes(10));

function reorderDigits(arr, direction) {
   let resultArr = [];

   for (let i = 0; i < arr.length; i++) {
      if (direction === "asc") {
         resultArr.push(
            parseInt(
               arr[i]
                  .toString()
                  .split("")
                  .sort((a, b) => a - b)
                  .join("")
            )
         );
      } else {
         resultArr.push(
            parseInt(
               arr[i]
                  .toString()
                  .split("")
                  .sort((a, b) => b - a)
                  .join("")
            )
         );
      }
   }

   return resultArr;
}

// reorderDigits([515, 341, 98, 44, 211], "desc"); //[155, 134, 89, 44, 112]

function collect(s, n) {
   let arr = s.split("");
   let result = [];

   while (arr.length >= n) {
      result.push(arr.splice(0, n).join(""));
   }
   return result.sort();
}

// console.log(collect("strengths", 3));

function charAtPos(r, s) {
   let result = [];

   for (let i = 0; i < r.length; i++) {
      if (s === "even") {
         if ((i + 1) % 2 === 0) {
            result.push(r[i]);
         }
      } else if (s === "odd") {
         if ((i + 1) % 2 !== 0) {
            result.push(r[i]);
         }
      }
   }

   if (typeof r === "string") return result.join("");

   return result;
}
// console.log(charAtPos("EDABIT", "odd")); //[4, 8]

function willFit(holds, cargo) {
   let cargoSum = cargo.reduce((acc, num) => acc + num, 0);

   let holdsSum = holds.reduce((acc, num) => {
      if (num === "S") num = 50;
      if (num === "M") num = 100;
      if (num === "L") num = 200;

      return acc + num;
   }, 0);

   return holdsSum >= cargoSum;
}

// willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]);

function truncate(string, length) {
   let resultArr = [];
   let stringArr = string.split(" ");
   let truncated = string.slice(0, length).split(" ");

   for (let i = 0; i < truncated.length; i++) {
      if (stringArr.indexOf(truncated[i]) > -1) {
         resultArr.push(truncated[i]);
      }
   }

   return resultArr.join(" ");
}

// truncate("Lorem ipsum dolor sit amet.", 11); //"Lorem ipsum"

function charAppears(sentence, char) {
   let result = [];
   let arr = sentence.toLowerCase().split(" ");
   char = char.toLowerCase();

   for (let i = 0; i < arr.length; i++) {
      let count = 0;

      if (arr[i].indexOf(char) > -1) {
         while (arr[i].indexOf(char) > -1) {
            arr[i] = arr[i].replace(char, "");
            count++;
         }
         result.push(count);
      } else {
         result.push(count);
      }
   }

   console.log(result);
}

// charAppears("Peter Piper picked a peck of pickled peppers.", "P"); // [1, 2, 1, 0, 1, 0, 1, 3]

function getPrices(arr) {
   let prices = [];
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(
         /[(`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/) ()]/gi,
         ""
      );
      prices.push(parseFloat(arr[i].replace(/[a-z ]/g, "")));
   }
   console.log(prices);
}

// getPrices([
//    "ice cream ($5.99)",
//    "banana ($0.20)",
//    "sandwich ($8.50)",
//    "soup ($1.99)",
// ]);

function minMissPos(arr) {
   let sorted = arr.sort((a, b) => a - b);
   let smallest = Math.min(...sorted);
   let biggest = Math.max(...sorted);

   for (let i = smallest; i <= biggest; i++) {
      if (sorted.indexOf(i) === -1 && i > 0) return i;
   }
   return biggest + 1;
}

// console.log(minMissPos([7, 6, 5, 4, 3, 2, 1]));

function champions(teams) {
   for (let i = 0; i < teams.length; i++) {
      teams[i].points =
         3 * teams[i].wins + 0 * teams[i].loss + 1 * teams[i].draws;

      teams[i].difference = teams[i].scored - teams[i].conceded;
   }

   let sortedByPoints = teams.sort((a, b) => {
      return b.points - a.points;
   });

   if (sortedByPoints[0].points === sortedByPoints[1].points) {
      return [sortedByPoints[0], sortedByPoints[1]].sort(
         (a, b) => b.difference - a.difference
      )[0].name;
   }

   return sortedByPoints[0].name;
}

// console.log(
//    champions([
//       {
//          name: "Manchester City",
//          wins: 30,
//          loss: 6,
//          draws: 2,
//          scored: 102,
//          conceded: 20,
//       },
//       {
//          name: "Liverpool",
//          wins: 24,
//          loss: 6,
//          draws: 8,
//          scored: 118,
//          conceded: 29,
//       },
//       {
//          name: "Arsenal",
//          wins: 28,
//          loss: 2,
//          draws: 8,
//          scored: 87,
//          conceded: 39,
//       },
//    ])
// );

function commonElements(arr1, arr2) {
   let resultArr = [];

   for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) > -1) {
         resultArr.push(arr2[i]);
      }
   }

   return resultArr;
}

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]); // [1, 2, 4, 5]

function doubleSwap(str, c1, c2) {
   let arr = [];
   for (let i = 0; i < str.length; i++) {
      if (str[i] === c1) {
         arr.push(str[i].replace(str[i], c2));
      } else if (str[i] === c2) {
         arr.push(str[i].replace(str[i], c1));
      } else {
         arr.push(str[i]);
      }
   }
   return arr.join("");
}

// console.log(doubleSwap("aabbccc", "a", "b")); //"bbaaccc"

function sumPrimes(num) {
   let primesArr = [];
   for (let i = 0; i <= num; i++) {
      if (isPrime(i)) {
         primesArr.push(i);
      }
   }

   return primesArr.reduce((acc, num) => acc + num, 0);
}

function isPrime(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }
   return num > 1;
}

// console.log(sumPrimes(7));

function positiveSum(chars) {
   let sum = 0;

   let stripped = chars.replace(
      /[(`~!@#$%^&*()_|+\=?;:'",<>\{\}\[\]\\\/) ()]/gi,
      " "
   );

   let arr = stripped.split(" ");

   for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i]) > 0) {
         sum += parseInt(arr[i]);
      }
   }

   return sum;
}

// positiveSum("-12#-33 13%14&-11");

function findTheDifference(s, t) {
   let sortedS = s.split("").sort();
   let sortedT = t.split("").sort();

   for (let i = 0; i < sorted.length; i++) {
      if (sortedT[i] !== sortedS[i]) {
         return sortedT[i];
      }
   }
}

// console.log(findTheDifference("ae", "aea"));

function chosenWine(wines) {
   if (wines.length === 0) return null;
   if (wines.length === 1) return wines[0].name;
   return wines.sort((a, b) => a.price - b.price)[1].name;
}

// console.log(
//    chosenWine([
//       { name: "Wine A", price: 8.99 },
//       { name: "Wine 32", price: 13.99 },
//       { name: "Wine 9", price: 10.99 },
//    ])
// );

function isPositiveDominant(a) {
   let positives = [];
   let negatives = [];

   for (let i = 0; i < a.length; i++) {
      if (a[i] > 0) {
         positives.push(a[i]);
      } else if (a[i] < 0) {
         negatives.push(a[i]);
      }
   }

   let uniquePositives = [...new Set(positives)];
   let uniqueNegatives = [...new Set(negatives)];

   return uniquePositives.length > uniqueNegatives.length;
}

// console.log(isPositiveDominant([5, 0]));

function primeCount(a, b) {
   let primes = [];

   for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
         primes.push(i);
      }
   }

   return primes.length;
}

function isPrime(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }

   return num > 1;
}

// console.log(primeCount(1, 10));

function secret(num) {
   let splitNum = num.toString().split("");
   let first = parseInt(splitNum[0]);
   let second = parseInt(splitNum[1]);

   return Math.pow(first, second) - first * second;
}

// secret(52);

function returnUnique(arr) {
   // let filtered = arr.filter((num) => {
   //    return arr.indexOf(num) === arr.lastIndexOf(num);
   // });
   // console.log(filtered);
   for (let i = 0; i < arr.length; i++) {
      console.log(arr.indexOf(arr[i]), arr.lastIndexOf(arr[i]));
   }
}

// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]); //[9, 7]

function towerHanoi(discs) {
   return Math.pow(2, discs) - 1;
}

// towerHanoi(5);

function lookAndSay(n) {
   let arr = n.toString().split("");
   let numbArr = [];
   let finalResult = "";

   if (arr.length % 2 !== 0) return "invalid";

   while (arr.length) {
      numbArr.push(arr.splice(0, 2));
   }

   for (let i = 0; i < numbArr.length; i++) {
      finalResult += numbArr[i][1].repeat(numbArr[i][0]);
   }

   return +finalResult;
}
// console.log(lookAndSay(2319)); //111222

function alternatingCaps(s) {
   // str = str.charAt(0).toUpperCase() + str.slice(1);
   // let arr = str.split(" ");
   // let final = [];

   // for (let i = 0; i < arr.length; i++) {
   //    for (let j = 0; j < arr[i].length; j = j + 2) {
   //       console.log(arr[i][j]);
   //    }
   // }
   // // console.log(arr);

   return s.replace(/[a-z]/gi, (c) =>
      c[`to${(s = !s) ? "Low" : "Upp"}erCase`]()
   );
}

// console.log(alternatingCaps("How are you")); //"HeLlO"

function isCorrectAliases(names, aliases) {
   let correctAliases = [];

   for (let i = 0; i < names.length; i++) {
      let namesArr = names[i].split(" ");
      let aliasesArr = aliases[i].split(" ");

      if (
         namesArr[0].startsWith(aliasesArr[0][0]) &&
         namesArr[0].startsWith(aliasesArr[1][0])
      ) {
         correctAliases.push(true);
      }
   }
   console.log(correctAliases.length === names.length);
}

// isCorrectAliases(
//    ["Adrian M.", "Harriet S.", "Mandy T."],
//    ["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse"]
// );

function lovesMe(n) {
   let petals = [];

   for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
         petals.push("Loves me,");
      } else {
         petals.push("Loves me not,");
      }
   }

   petals[petals.length - 1] = petals[petals.length - 1]
      .split("")
      .map((l) => l.toUpperCase())
      .join("")
      .replace(",", "");

   return petals.join(" ");
}

// console.log(lovesMe(4));

function arithmeticOperation(n) {
   let arr = n.split(" ");
   let first = arr[0];
   let operation = arr[1];
   let last = arr[2];

   if (operation === "+") return parseInt(first) + parseInt(last);
   if (operation === "-") return parseInt(first) - parseInt(last);
   if (operation === "*") return parseInt(first) * parseInt(last);
   if (operation === "/" && last === "0") return -1;
   if (operation === "/") return parseInt(first) / parseInt(last);
}

// console.log(arithmeticOperation("12 / 1"));

function inclusiveArray(startNum, endNum) {
   let arr = [];

   if (startNum > endNum) return [startNum];

   for (let i = startNum; i <= endNum; i++) {
      arr.push(i);
   }

   return arr;
}

// console.log(inclusiveArray(10, 9));

function additivePersistence(n) {
   let arr = n.toString().split("");
   let total = 0;

   while (arr.length >= 2) {
      arr = arr
         .reduce((acc, num) => acc + parseInt(num), 0)
         .toString()
         .split("");

      total++;
   }

   return total;
}

// console.log(additivePersistence(1679583));

function multiplicativePersistence(n) {
   let arr = n.toString().split("");
   let total = 0;

   while (arr.length >= 2) {
      arr = arr
         .reduce((acc, num) => acc * parseInt(num))
         .toString()
         .split("");

      total++;
   }

   return total;
}

// multiplicativePersistence(4);

function sumDigProd(...numbers) {
   let sum = numbers
      .reduce((acc, num) => acc + num, 0)
      .toString()
      .split("");

   while (sum.length >= 2) {
      sum = sum
         .reduce((acc, num) => acc * parseInt(num))
         .toString()
         .split("");
   }

   return parseInt(sum.join());
}

// sumDigProd(1, 2, 3, 4, 5, 6);

function isHappy(n) {
   let arr = n.toString().split("");

   while (
      (arr.length > 1 && arr[0] !== 1) ||
      (arr.length > 1 && arr[0] !== 4)
   ) {
      arr = arr
         .reduce((acc, num) => acc + parseInt(Math.pow(num, 2)), 0)
         .toString()
         .split("");
   }

   if (arr[0] === "1") return true;
   if (arr[0] === "4") return false;
   return false;
}

// console.log(isHappy(3970));

function rearrange(sentence) {
   let myFinal = [];
   let arr = sentence.split(" ");

   for (let i = 0; i < arr.length; i++) {
      let matches = arr[i].match(/\d+/g);
      if (matches !== null) {
         myFinal.push({
            props: arr[i].replace(matches, ""),
            rank: parseInt(...matches),
         });
      }
   }

   return myFinal
      .sort((a, b) => a.rank - b.rank)
      .map((obj) => obj.props)
      .join(" ");
}

// rearrange("4of Fo1r pe6ople g3ood th5e the2"); //"For the good of the people"); //"This is a Test"

function findFrequent(arr) {
   if (arr.length === 1) return arr[0];
   let final = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
         final.push(arr[i]);
      }
   }

   return final[0];
}

// console.log(findFrequent([3, 9, null, 9, null, null])); //3

function addStrNums(num1, num2) {
   console.log(BigInt(num1) + BigInt(num2) > Math.pow(2, 53));
   if (num1 === "" && num2 === "") return "0";
   if (num1 === "") return num2;
   if (num2 === "") return num1;
   if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) return "-1";

   if (
      parseInt(num1) + parseInt(num2) > Math.pow(2, 53) ||
      parseInt(num1) + parseInt(num2) === "Infinity"
   )
      return BigInt(BigInt(num1) + BigInt(num2)).toString();

   return (parseInt(num1) + parseInt(num2)).toString();
}

// console.log(addStrNums("0", "2")); //"9"

function reverseLegoYoda(text) {
   let arr = text.split(". ");

   if (arr.length === 1) {
      let str = arr
         .toString()
         .split(", ")
         .reverse()
         .join(" ")
         .replace(".", "")
         .toLowerCase();

      return `${str.charAt(0).toUpperCase() + str.slice(1)}.`;
   } else if (arr.length === 2) {
      let str1 = arr[0]
         .split(", ")
         .reverse()
         .join(" ")
         .replace(".", "")
         .toLowerCase();
      let str2 = arr[1]
         .split(", ")
         .reverse()
         .join(" ")
         .replace(".", "")
         .toLowerCase();

      if (str2.indexOf("area") > -1) {
         let replaced =
            str2.charAt(str2.indexOf("area")).toUpperCase() +
            str2.slice(str2.indexOf("area") + 1);

         str2 = str2.replace("area 51", replaced);

         return `${str1.charAt(0).toUpperCase() + str1.slice(1)}. ${
            str2.charAt(0).toUpperCase() + str2.slice(1)
         }.`;
      } else {
         return `${str1.charAt(0).toUpperCase() + str1.slice(1)}. ${
            str2.charAt(0).toUpperCase() + str2.slice(1)
         }.`;
      }
   }
}

// console.log(
//    reverseLegoYoda(
//       "An alien, I am. Holding me captive in Area 51, the government is."
//    )
// );

function sortContacts(names, sort) {
   if (names === null || names === undefined || names.length === 0) return [];
   if (names.length === 1) return names;

   let nameArrObj = [];
   let sortedFinal = [];

   for (let i = 0; i < names.length; i++) {
      names[i] = names[i].split(" ");
      nameArrObj.push({ name: names[i][0], lastName: names[i][1] });
   }

   if (sort === "ASC") {
      nameArrObj = nameArrObj.sort((a, b) => {
         if (a.lastName > b.lastName) return 1;
         if (b.lastName > a.lastName) return -1;
         return 0;
      });
   } else {
      nameArrObj = nameArrObj.sort((a, b) => {
         if (a.lastName > b.lastName) return -1;
         if (b.lastName > a.lastName) return 1;
         return 0;
      });
   }

   for (let i = 0; i < nameArrObj.length; i++) {
      sortedFinal.push(Object.values(sorted[i]).join(" "));
   }

   return sortedFinal;
}

// console.log(
//    sortContacts(["Aaron McDonal", "Carlos Natiel", "Josue Aries"], "ASC")
// );

function simonSays(arr) {
   let result = 0;
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split(" ");
      if (arr[i].indexOf("Simon") > -1) {
         if (arr[i].indexOf("add") > -1) {
            result += parseInt(arr[i][arr[i].length - 1]);
         } else if (arr[i].indexOf("multiply") > -1) {
            result *= parseInt(arr[i][arr[i].length - 1]);
         } else if (arr[i].indexOf("subtract") > -1) {
            result -= parseInt(arr[i][arr[i].length - 1]);
         }
      }
   }
   return result;
}

// console.log(
//    simonSays([
//       "Simeon says subtract 46",
//       "Firstly, multiply by 3",
//       "Simon says add 18",
//    ])
// );

function squish(arr, d) {
   if (arr.length === 0) return arr;
   let result = [];
   let myArr = [...arr];

   if (d === "left") {
      while (myArr.length > 1) {
         let slice = myArr.slice(2);
         slice.unshift(myArr[0] + myArr[1]);

         result.push(slice);

         myArr.splice(0, 2, myArr[0] + myArr[1]);
      }
   } else {
      while (myArr.length > 1) {
         let slice = myArr.slice(0, myArr.length - 2);
         slice.push(myArr[myArr.length - 1] + myArr[myArr.length - 2]);
         result.push(slice);
         myArr.splice(
            myArr.length - 2,
            2,
            myArr[myArr.length - 1] + myArr[myArr.length - 2]
         );
      }
   }

   result.unshift(arr);

   return result;
}

// console.log(squish([], "left"));
//[[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

function flat(arr) {
   let final = [];
   while (arr.length) {
      let next = arr.pop();

      if (Array.isArray(next)) {
         arr.push(...next);
      } else {
         final.push(next);
      }
   }

   console.log(final.reverse());
}

// console.log(flat([1, 2, 3, [3, 3], [0, 3], 3, 3, 0, [[9]], [[[0, 3]]]]));

function flattenArray(array) {
   if (array === null || array === undefined || array.length === 0) return [];
   let stack = [];

   while (array.length) {
      let next = array.pop();

      if (Array.isArray(next)) {
         array.push(...next);
      } else if (typeof next === "function") {
         stack.push(next());
      } else {
         stack.push(next);
      }
   }

   return stack.reverse();
}

// console.log(
//    flattenArray([
//       1,
//       "2",
//       [
//          3,
//          function () {
//             return 4;
//          },
//          ["five"],
//          "six",
//          true,
//          { prop: "val" },
//       ],
//    ])
// );
//[1, "2", 3, 4, "five", "six", true, { prop: "val" }]

function isOrdSub(smarr, bigarr) {
   // return bigarr.toString().indexOf(smarr.toString()) > -1;
}

// console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]));

function sumOfSlices(arr) {
   let sum = 0,
      ret = [];
   for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] < 100) sum += arr[i];
      else {
         ret.push(sum);
         sum = arr[i];
      }
   }
   return ret.concat(sum);
}

// console.log(
//    sumOfSlices([
//       10,
//       29,
//       13,
//       14,
//       15,
//       16,
//       17,
//       31,
//       20,
//       10,
//       29,
//       13,
//       14,
//       15,
//       16,
//       17,
//       31,
//       20,
//       100,
//    ])
// );
//[97, 78, 87, 68, 100]

function alternateSort(arr) {
   let final = [];
   let nums = [];
   let strs = [];

   for (let i = 0; i < arr.length; i++) {
      if (isNaN(parseInt(arr[i]))) {
         strs.push(arr[i]);
      } else {
         nums.push(arr[i]);
      }
   }

   let sortedNums = nums.sort((a, b) => a - b);
   let sortedStrs = strs.sort();

   for (let i = 0; i < sortedNums.length; i++) {
      final.push(sortedNums[i], sortedStrs[i]);
   }

   return final;
}

// console.log(alternateSort(["X", 15, 12, 18, "Y", "Z"])); //[12, "X", 15, "Y", 18, "Z"]

function mapLetters(str) {
   let obj = {};
   for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]]) {
         obj[str[i]] = [i];
      } else {
         obj[str[i]].push(i);
      }
   }
   return obj;
}

// console.log(mapLetters("imagining"));
// {
//    i: [0, 4, 6],
//    m: [1],
//    a: [2],
//    g: [3, 8],
//    n: [5, 7],
// };

function lengthen(s1, s2) {
   let newS1 = [...s1].join("");
   let newS2 = [...s2].join("");

   if (s1.length > s2.length) {
      while (newS2.length < newS1.length) {
         newS2 = newS2 + s2;
      }
      let arr = newS2.split("");

      arr.splice(-(newS2.length - newS1.length), newS2.length - newS1.length);

      return arr.join("");
   } else {
      while (newS1.length < newS2.length) {
         newS1 = newS1 + s1;
      }
      let arr = newS1.split("");

      arr.splice(-(newS1.length - newS2.length), newS1.length - newS2.length);

      return arr.join("");
   }
}

// console.log(lengthen("clap", "skipping")); //"clapclap"

function alternatePosNeg(arr) {
   if (arr.some((num) => num === 0)) return false;

   if (arr[0] > 0) {
      for (let i = 0; i < arr.length; i = i + 2) {
         if (arr[i] < 0) {
            return false;
         }
      }

      for (let i = 1; i < arr.length; i = i + 2) {
         if (arr[i] > 0) {
            return false;
         }
      }
   } else {
      for (let i = 0; i < arr.length; i = i + 2) {
         if (arr[i] > 0) {
            return false;
         }
      }

      for (let i = 1; i < arr.length; i = i + 2) {
         if (arr[i] < 0) {
            return false;
         }
      }
   }

   return true;
}

// console.log(alternatePosNeg([4, 4, -2, 3, -6, 10])); //false

function license(me, agents, others) {
   let sortedNames = (others + " " + me).split(" ").sort();

   return Math.abs((sortedNames.indexOf(me) + 1 - agents) * 20 + 20);
}

// license("Eric", 2, "Adam Caroline Rebecca Frank"); //40

function factorSort(nums) {
   let mainArr = [];
   let finalResult = [];
   for (let i = 0; i < nums.length; i++) {
      let current = [];
      for (let j = 0; j <= nums[i]; j++) {
         if (nums[i] % j === 0) {
            current.push({ [nums[i]]: j });
         }
      }
      mainArr.push(current);
   }

   for (let i = 0; i < mainArr.length; i++) {
      nums[i] = { number: nums[i], length: mainArr[i].length };
   }

   let sorted = nums.sort((a, b) => {
      if (a.length === b.length) {
         return b.number - a.number;
      }
      return b.length - a.length;
   });

   for (let i = 0; i < sorted.length; i++) {
      finalResult.push(sorted[i].number);
   }

   return finalResult;
}

// factorSort([1, 2, 31, 4]); //[4, 31, 2, 1]

function bemirp(n) {
   if (!isPrime(n)) {
      return "C";
   }

   let reversed = parseInt(n.toString().split("").reverse().join(""));

   if (reversed === n) {
      return "P";
   }

   if (n.toString().indexOf("6") > -1) {
      let flipped = n.toString();

      while (flipped.indexOf("6") > -1) {
         flipped = flipped.replace("6", "9");
      }
      if (isPrime(parseInt(flipped))) return "B";
   }

   if (n.toString().indexOf("9") > -1) {
      let flipped = n.toString();

      while (flipped.indexOf("9") > -1) {
         flipped = flipped.replace("9", "6");
      }
      if (isPrime(parseInt(flipped))) return "B";
   }

   if (isPrime(reversed)) return "E";

   if (isPrime(n)) return "P";
}

function isPrime(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }

   return num > 1;
}

// console.log(bemirp(10091)); //"B"

function sumTwoSmallestNums(arr) {
   let filtered = arr.filter((num) => num > 0).sort((a, b) => a - b);

   return filtered[0] + filtered[1];
}

// console.log(sumTwoSmallestNums([2, 9, 6, -1])); //7

function iccMinusFib(n) {
   let fibonacciSum = [0, 1, 1];
   let iccanobifSum = [0, 1, 1];

   while (fibonacciSum.length < n) {
      fibonacciSum.push(
         fibonacciSum[fibonacciSum.length - 1] +
            fibonacciSum[fibonacciSum.length - 2]
      );
   }

   while (iccanobifSum.length < n) {
      if (iccanobifSum.length > 7) {
         iccanobifSum.push(
            parseInt(
               iccanobifSum[iccanobifSum.length - 1]
                  .toString()
                  .split("")
                  .reverse()
                  .join("")
            ) +
               parseInt(
                  iccanobifSum[iccanobifSum.length - 2]
                     .toString()
                     .split("")
                     .reverse()
                     .join("")
               )
         );
      } else {
         iccanobifSum.push(
            iccanobifSum[iccanobifSum.length - 1] +
               iccanobifSum[iccanobifSum.length - 2]
         );
      }
   }

   return iccanobifSum[n - 1] - fibonacciSum[n - 1];
}

// console.log(iccMinusFib(18)); //790920

// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
   if (a > w || b > w) return false;
   if (a <= h || b <= h) {
      if (c > w && c > h) return false;
      return true;
   }
}

// console.log(doesBrickFit(2, 2, 2, 1, 2)); //true

function splitAndDelimit(str, num, del) {
   let arr = str.split("");
   let final = [];

   while (arr.length) {
      final.push(...arr.splice(0, num), del);
   }

   final.pop();

   return final.join("");
}

// splitAndDelimit("bellow", 2, "&"); //"be&ll&ow"

function removeLastVowel(str) {
   let arr = str.split(" ");
   let vowelsRemoved = [];
   for (let i = 0; i < arr.length; i++) {
      let lastA = arr[i].toLowerCase().lastIndexOf("a");
      let lastE = arr[i].toLowerCase().lastIndexOf("e");
      let lastI = arr[i].toLowerCase().lastIndexOf("i");
      let lastO = arr[i].toLowerCase().lastIndexOf("o");
      let lastU = arr[i].toLowerCase().lastIndexOf("u");

      let greatest = Math.max(lastA, lastE, lastI, lastO, lastU);

      arr[i] = arr[i].split("");
      arr[i].splice(greatest, 1);
      vowelsRemoved.push(arr[i].join(""));
   }

   return vowelsRemoved.join(" ");
}

// console.log(
//    removeLastVowel(
//       "If you want to live a happy life, tie it to a goal, not to people."
//    )
// );

function decode(str) {
   let finalArr = [];

   for (let i = 0; i < str.length; i++) {
      finalArr.push(
         str
            .charCodeAt(str.indexOf(str[i]))
            .toString()
            .split("")
            .reduce((acc, num) => acc + parseInt(num), 0)
      );
   }

   return finalArr;
}

// decode("wonderful"); //[5, 2, 9, 9, 3]

function inverter(str, type) {
   let arr = str.toLowerCase().split(" ");

   if (type === "P") {
      let phraseInvert = arr.reverse().join(" ");
      return phraseInvert.charAt(0).toUpperCase() + phraseInvert.slice(1);
   } else {
      let wordInvertArr = "";
      for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].split("").reverse().join("");
         wordInvertArr += `${arr[i]} `;
      }
      return (
         wordInvertArr.charAt(0).toUpperCase() +
         wordInvertArr.slice(1).trimRight()
      );
   }
}

// console.log(inverter("This is Valhalla", "P")); //Valhalla is this"

function wordsToSentence(words) {
   if (words === null || words.length === 0) return "";
   if (words.length === 1 && words[0] === "") return "";
   if (words.length === 1) return words.join("");

   if (words.indexOf("") > -1) {
      words.splice(words.indexOf(""), 1);
   }

   words.splice(words.length - 1, 0, "and");

   let length = words.length - 3;

   for (let i = 0; i < length; i++) {
      words[i] = words[i] + ",";
   }

   return words.join(" ");
}

// console.log(wordsToSentence(["edabit"])); //"edabit"

function pets(pets) {
   let randomPet = Math.floor(Math.random() * pets.length);

   return pets[randomPet];
}

// console.log(pets(["dog", "cat", "bird"]));

function primalStrength(n) {
   let primes = [];

   for (let i = 0; i <= n; i++) {
      if (isPrime(i)) {
         primes.push(i);
      }
   }

   let distance = primes[primes.length - 1] - primes[primes.length - 2];

   if (isPrime(n + distance)) {
      return "Balanced";
   }

   for (let i = 0; i <= n + distance; i++) {
      if (isPrime(i) && i > n) {
         primes.push(i);
      }
   }

   if (
      primes[primes.length - 1] > n &&
      primes[primes.length - 1] < n + distance
   ) {
      return "strong";
   }
   return "weak";
}

function isPrime(num) {
   if (num <= 1) return false;

   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }

   return num > 1;
}

// console.log(primalStrength(211)); //"Balanced"

function converter(a, b) {
   if (a[0] === "fahrenheit" && b === "kelvin") {
      return Number((((a[1] - 32) * 5) / 9 + 273.15).toFixed(1));
   } else if (a[0] === "fahrenheit" && b === "celsius") {
      return (a[1] - 32) * (5 / 9) < 0
         ? Number(-Math.abs((a[1] - 32) * (5 / 9)).toFixed(1))
         : Number(((a[1] - 32) * (5 / 9)).toFixed(1));
   }

   if (a[0] === "celsius" && b === "fahrenheit") {
      return Number((a[1] * (9 / 5) + 32).toFixed(1));
   } else if (a[0] === "celsius" && b === "kelvin") {
      return Number((a[1] + 273.15).toFixed(1));
   }

   if (a[0] === "kelvin" && b === "fahrenheit") {
      return (a[1] - 273.15) * (9 / 5) + 32;
   } else if (a[0] === "kelvin" && b === "celsius") {
      return Number((a[1] - 273.15).toFixed(1));
   }
}

// console.log(converter(["fahrenheit", 50], "celsius")); //257.0

function vowelLinks(str) {
   let arr = str.toLowerCase().split(" ");
   let startVowels = [];
   let endVowels = [];
   let final;

   for (let i = 0; i < arr.length; i++) {
      if (
         arr[i].startsWith("a") ||
         arr[i].startsWith("e") ||
         arr[i].startsWith("i") ||
         arr[i].startsWith("o") ||
         arr[i].startsWith("u")
      ) {
         startVowels.push(i);
      }

      if (
         arr[i].endsWith("a") ||
         arr[i].endsWith("e") ||
         arr[i].endsWith("i") ||
         arr[i].endsWith("o") ||
         arr[i].endsWith("u")
      ) {
         endVowels.push(i);
      }
   }

   if (endVowels.length > startVowels.length) {
      function calc(number) {
         if (startVowels.some((n) => number + 1 === n)) {
            final = true;
         }
      }

      for (let i = 0; i < endVowels.length; i++) {
         calc(endVowels[i]);
      }
   } else {
      function calc(number) {
         if (endVowels.some((n) => number - 1 === n)) {
            final = true;
         }
      }

      for (let i = 0; i < startVowels.length; i++) {
         calc(startVowels[i]);
      }
   }

   return final === undefined ? false : final;
}

// console.log(vowelLinks("a very large appliance")); //true

function getHashTags(str) {
   while (str.indexOf(",") > -1) {
      str = str.replace(",", "");
   }

   while (str.indexOf("?") > -1) {
      str = str.replace("?", "");
   }

   let arr = str.toLowerCase().split(" ");

   let sorted = arr.sort((a, b) => b.length - a.length);

   for (let i = 0; i < sorted.length; i++) {
      sorted[i] = "#" + sorted[i];
   }

   if (sorted.length < 3) return sorted;

   return [sorted[0], sorted[1], sorted[2]];
}

// console.log(
//    getHashTags("How the Avocado Became the Fruit of the Global Trade")
// );

function smallestCommons(arr) {
   let smallest = Math.min(...arr);
   let biggest = Math.max(...arr);
   let range = [];

   for (let i = smallest; i <= biggest; i++) {
      range.push(i);
   }
}

// console.log(smallestCommons([1, 3]));

function nearestVowel(s) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let vowels = ["a", "e", "i", "o", "u"];
   let distanceFromVowels = [];

   for (let i = 0; i < vowels.length; i++) {
      distanceFromVowels.push({
         letter: vowels[i],
         number: Math.abs(alphabet.indexOf(s) - alphabet.indexOf(vowels[i])),
      });
   }

   distanceFromVowels.sort((a, b) => a.number - b.number);

   return distanceFromVowels[0].letter;
}

// nearestVowel("b"); //"a"

function newWord(word) {
   return word.replace(word.charAt(0), "");
}

// console.log(newWord("apple"));

function minMax(arr) {
   return [Math.min(...arr), Math.max(...arr)];
}

// console.log(minMax([1]));

function correctTitle(str) {
   let arr = str.split(" ");
   let wordsToAlter = [" And ", " The ", " Of ", " In "];

   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
   }

   for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf("-") > -1) {
         arr[i] = arr[i].split("-");

         for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].indexOf("the") === -1) {
               arr[i][j] =
                  arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
            }
         }
         arr[i] = arr[i].join("-");
      }
   }

   let newStr = arr.join(" ");

   for (let i = 0; i < wordsToAlter.length; i++) {
      while (newStr.indexOf(wordsToAlter[i]) > -1) {
         newStr = newStr.replace(
            wordsToAlter[i],
            wordsToAlter[i].toLowerCase()
         );
      }
   }

   return newStr;
}

// console.log(correctTitle("Lord Eddard Stark, Hand of the King."));

function AlphabetSoup(str) {
   console.log(str.split("").sort().join(""));
}

// AlphabetSoup("javascript");

function lettersOnly(str) {
   console.log(str.replace(/[^a-zA-Z ]/g, ""));
}

// lettersOnly("R!=:~0o0./c&}9k`60=y");

function centuryFromYear(year) {
   let answer = year / 100;

   console.log(Math.ceil(answer));
}

// centuryFromYear(1905);

function checkPalindrome(inputString) {
   let reversed = inputString.split("").reverse().join("");

   return reversed === inputString ? true : false;
}

// checkPalindrome("josue");

function adjacentElementsProduct(inputArray) {
   let products = [];

   for (let i = 0; i < inputArray.length; i++) {
      products.push(inputArray[i] * inputArray[i + 1]);
   }

   products.pop();

   return Math.max(...products);
}

// adjacentElementsProduct([3, 6, -2, -5, 7, 3]);

function shapeArea(n) {
   let result = 1;

   for (let i = 1; i <= n - 1; i++) {
      result += i * 4;
   }

   console.log(result);
}

// shapeArea(4);

function makeArrayConsecutive2(statues) {
   let statuesNeeded = 0;

   for (let i = Math.min(...statues); i <= Math.max(...statues); i++) {
      if (!(statues.indexOf(i) > -1)) {
         statuesNeeded += 1;
      }
   }

   return statuesNeeded;
}

// makeArrayConsecutive2([6, 2, 3, 8]);

function almostIncreasingSequence(sequence) {
   let cont = [];

   for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] < sequence[i + 1]) {
         cont.push(sequence[i], sequence[i + 1]);
      } else if (!(sequence[i] < sequence[i + 1])) {
         sequence.splice(i + 1, 1);
      }
   }

   console.log(cont);
   console.log(sequence);
}

// almostIncreasingSequence([1, 3, 2, 4]);

// function almostIncreasingSequence(sequence) {
//    let deleted = [];
//    let added = [];

//    for (let i = 0; i < sequence.length; i++) {
//       if (sequence[i + 1] !== undefined) {
//          if (sequence[i] >= sequence[i + 1]) {
//             // console.log(sequence[i], sequence[i + 1]);
//             deleted.push(...sequence.splice(i + 1, 1));
//          }
//       }
//    }
//    console.log(sequence);
// }

// function almostIncreasingSequence(seq) {
//    var bad = 0;
//    for (var i = 1; i < seq.length; i++)
//       if (seq[i] <= seq[i - 1]) {
//          bad++;
//          if (bad > 1) return false;
//          if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
//       }
//    return true;
// }
// console.log(almostIncreasingSequence([1, 3, 2, 1]));

function matrixElementsSum(matrix) {
   if (matrix.length === 1)
      return matrix[0].reduce((acc, n) => {
         return acc + n;
      });

   let a = matrix[0];
   let b = matrix[1];
   let c = matrix[2];

   for (let i = 0; i < a.length; i++) {
      if (a[i] === 0) {
         b[i] = 0;
      }

      if (matrix.lenght > 2) {
         if (b[i] === 0) {
            c[i] = 0;
         }
      }
   }

   let result = [...a, ...b, ...c];

   return result.reduce((acc, n) => {
      return acc + n;
   });
}

// console.log(
//    matrixElementsSum([
//       [0, 1, 1, 2],
//       [0, 5, 0, 0],
//       [1, 0, 9, 5],
//    ])
// );

function allLongestStrings(inputArray) {
   let longest = inputArray.sort((a, b) => b.length - a.length);
   let arr = [];
   for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].length === longest[0].length) {
         arr.push(inputArray[i]);
      }
   }
   console.log(arr);
}

// allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]);

function commonCharacterCount(s1, s2) {
   let s1Arr = s1.split("");
   let s2Arr = s2.split("");

   let commonChars = 0;
   for (let i = 0; i < s1Arr.length; i++) {
      if (s2Arr.indexOf(s1Arr[i]) > -1) {
         s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
         commonChars++;
      }
   }
   console.log(commonChars);
}

// commonCharacterCount("aabcc", "adcaa");

function isLucky(n) {
   let first = 0;
   let second = 0;

   let numStr = n.toString().split("");
   let halfWay = numStr.length / 2;
   numStr.splice(halfWay, 0, "l");

   numStr = numStr.join("").split("l");

   for (let i = 0; i < halfWay; i++) {
      first += Number(numStr[0][i]);
      second += Number(numStr[1][i]);
   }

   return first === second;
}

// console.log(isLucky(239017));

function sortByHeight(a) {
   let myArr = [...a];

   myArr = myArr.filter((item) => item !== -1).sort((a, b) => a - b);

   for (let i = 0; i < a.length; i++) {
      if (a[i] === -1) {
         myArr.splice(i, 0, a[i]);
      }
   }

   console.log(myArr);
}

// sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]);

function addTwoDigits(n) {
   let arr = n.toString().split("");

   return Number(arr[0]) + Number(arr[1]);
}

// console.log(addTwoDigits(29));

function largestNumber(n) {
   let result = [];

   for (let i = 0; i < n; i++) {
      result.push(9);
   }

   return Number(result.join(""));
}

// console.log(largestNumber(3));

function candies(n, m) {
   if (n === m) return 1;
   let sub = m - (m % n);

   return sub;
}

// console.log(candies(3, 10));

function seatsInTheater(nCols, nRows, col, row) {
   // console.log(nCols * nRows);
   return (nCols - col + 1) * (nRows - row);
}

// seatsInTheater(16, 11, 5, 3);

function maxMultiple(divisor, bound) {
   let largeNumbers = [];

   for (let i = 1; i <= bound; i++) {
      if (i % divisor === 0) {
         largeNumbers.push(i);
      }
   }

   return Math.max(...largeNumbers);
}

// maxMultiple(3, 10);

function lateRide(n) {
   let hours = n / 60;
   let rhours = Math.floor(hours);
   let minutes = (hours - rhours) * 60;
   let rminutes = Math.round(minutes);

   let strHours = rhours.toString();
   let strMinutes = rminutes.toString();

   let addedHours;
   let addedMinutes;
   if (strHours.length > 1) {
      addedHours = Number(strHours[0]) + Number(strHours[1]);
   } else {
      addedHours = Number(strHours[0]);
   }

   if (strMinutes.length > 1) {
      addedMinutes = Number(strMinutes[0]) + Number(strMinutes[1]);
   } else {
      addedMinutes = Number(strMinutes[0]);
   }

   console.log(addedHours + addedMinutes);
}

// lateRide(808);

function phoneCall(min1, min2_10, min11, s) {
   let amount = Number(s.toString());
   let count = [];

   for (let i = 1; i <= s; i++) {
      if (i === 1 && amount > min1) {
         amount = amount - min1;
         count.push(min1);
      }

      if (i > 1 && i < 11 && amount >= min2_10) {
         amount = amount - min2_10;
         count.push(min2_10);
      }

      if (i > 10 && amount >= min11) {
         amount = amount - min11;
         count.push(min11);
      }

      // console.log(amount);
   }
   console.log(count);
}

// phoneCall(3, 1h, 2, 25);

function reachNextLevel(experience, threshold, reward) {
   return experience + reward >= threshold;
}

// reachNextLevel(10, 15, 5);

function sortArray(arr) {
   let myArr = [];
   let smallest;
   while (arr.length > 0) {
      smallest = Math.min(...arr);
      myArr.push(smallest);
      arr.splice(arr.indexOf(smallest), 1);
   }
   console.log(myArr);
}

// sortArray([2, -5, 1, 4, 7, 8]);

function sortIt(arr, str) {
   let myArr = [];
   let smallest;

   while (arr.length > 0) {
      smallest = Math.min(...arr);
      str === "A" ? myArr.push(smallest) : myArr.unshift(smallest);
      arr.splice(arr.indexOf(smallest), 1);
   }

   console.log(myArr);
}

// sortIt([2, -5, 1, 4, 7, 8], "A");

function lostDog(h1, h2, h3, h4) {
   let building = [h1, h2, h3, h4];
   let dogsFound = 0;
   let obj = {};

   for (let i = 0; i < building.length; i++) {
      if (building[i].indexOf(0) > -1) {
         dogsFound++;
         obj[`Dog${dogsFound}`] = `House (${i + 1}) and Room (${
            building[i].indexOf(0) + 1
         })`;
      }
   }

   if (dogsFound < 1) obj = "Dog not found!";

   console.log(obj);
}

// lostDog(
//    [1, 1, 1, 1, 1, 1],
//    [1, 1, 1, 1, 1, 0],
//    [1, 1, 1, 1, 1, 1],
//    [1, 1, 1, 1, 1, 1]
// );

function knapsackLight(value1, weight1, value2, weight2, maxW) {
   let totalWeight = weight1 + weight2;
   let one = [value1, weight1, value2, weight2];

   if (totalWeight > maxW) {
      let heaviest = Math.max(...[weight1, weight2]);
      let lightest = Math.min(...[weight1, weight2]);

      if (maxW >= heaviest && maxW >= lightest) return Math.max(value1, value2);
      if (maxW < heaviest && maxW < lightest) return 0;

      if (maxW >= heaviest) return one[one.indexOf(heaviest) - 1];

      if (maxW < heaviest && maxW >= lightest) {
         let v1 = value1;
         let v2 = value2;

         return one[one.indexOf(v1) + 1] <= maxW ? v1 : v2;
      }
   }

   return value1 + value2;
}

// console.log(knapsackLight(3, 4, 5, 3, 3));

function extraNumber(a, b, c) {
   if (a === b) return c;
   if (a === c) return b;
   if (c === b) return a;
}

// console.log(extraNumber(2, 7, 2));

function isInfiniteProcess(a, b) {
   if (a < 0 || b < 0) return 0;
   if (a === b) return false;

   let diff;

   if (a < b) {
      diff = b - a;
      if (diff % 2 === 0) return false;
      return true;
   }

   if (a > b) {
      diff = a - b;

      let isPrime = true;
      for (let i = 2; i < diff; i++) {
         if (diff % i == 0) {
            isPrime = false;
            break;
         }
      }

      if (isPrime) return true;

      if (diff % 2 === 0) return true;
      return false;
   }
}

// console.log(isInfiniteProcess(2, 6));
// console.log(isInfiniteProcess(2, 3));
// console.log(isInfiniteProcess(13, 8));

function arithmeticExpression(a, b, c) {
   if (a + b === c || a - b === c || a * b === c || a / b === c) return true;
   return false;
}

// console.log(arithmeticExpression(2, 3, 5));

function tennisSet(score1, score2) {
   if (score1 < 5 && score2 < 5) {
      return false;
   }

   if (score1 >= 7 && score2 >= 7) {
      return false;
   }
   if ((score1 === 7 && score2 >= 5) || (score2 === 7 && score1 >= 5)) {
      return true;
   }

   if ((score1 === 6 && score2 < 5) || (score2 === 6 && score1 < 5)) {
      return true;
   }

   if ((score1 > 6 && score2 < 5) || (score2 > 6 && score1 < 5)) {
      return false;
   }

   if ((score1 >= 6 && score2 >= 5) || (score2 >= 6 && score2 >= 5)) {
      return false;
   }
}

// console.log(tennisSet(7, 7));

function willYou(young, beautiful, loved) {
   if ((!young || !beautiful) && loved) return true;

   if (!young && !beautiful && loved) return true;

   if (young && beautiful && !loved) return true;

   return false;
}

// console.log(willYou(true, true, false));

function metroCard(lastNumberOfDays) {
   let months = [
      {
         month: "January",
         days: 31,
      },
      {
         month: "February",
         days: 28,
      },
      {
         month: "March",
         days: 31,
      },
      {
         month: "April",
         days: 30,
      },
      {
         month: "May",
         days: 31,
      },
      {
         month: "June",
         days: 30,
      },
      {
         month: "July",
         days: 31,
      },
      {
         month: "Agoust",
         days: 31,
      },
      {
         month: "September",
         days: 30,
      },
      {
         month: "October",
         days: 31,
      },
      {
         month: "November",
         days: 30,
      },
      {
         month: "December",
         days: 31,
      },
   ];

   let probabilities = [];

   let probableDays = [];

   for (let i = 0; i < months.length; i++) {
      if (lastNumberOfDays === months[i].days) {
         probabilities.push(i + 1);
      }
   }

   for (let i = 0; i < probabilities.length; i++) {
      if (probabilities[i] === 12) {
         probableDays.push(31);
      } else {
         probableDays.push(months[probabilities[i]].days);
      }
   }

   return [...new Set(...[probableDays.sort((a, b) => a - b)])];
}

// console.log(metroCard(31));

function killKthBit(n, k) {
   return theReturnFunc(n, k);
}

function theReturnFunc(n, k) {
   let binary = (n >>> 0).toString(2);

   binary = binary.split("");

   binary.splice(binary.length - k, 1, "0");

   let digit = parseInt(binary.join(""), 2);

   return digit;
}

// console.log(killKthBit(37, 3));

function sevenBoom(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().split("").indexOf("7") > -1) return "Boom!";
   }
   return "there is no 7 in the array";
}

// console.log(sevenBoom([2, 55, 60, 97, 86]));

// function longest7SegmentWord(arr) {
//    let filteredArr = [];
//    let longest = "";
//    for (let i = 0; i < arr.length; i++) {
//       if (
//          !(
//             arr[i].indexOf("k") > -1 ||
//             arr[i].indexOf("m") > -1 ||
//             arr[i].indexOf("v") > -1 ||
//             arr[i].indexOf("w") > -1 ||
//             arr[i].indexOf("x") > -1
//          )
//       ) {
//          filteredArr.push(arr[i]);
//       }
//    }

//    for (let i = 0; i < filteredArr.length; i++) {
//       if (filteredArr[i].length > longest.length) {
//          longest = filteredArr[i];
//       }
//    }

//    return longest.length === 0 ? "" : longest;
// }

// console.log(
//    longest7SegmentWord(["coding", "crackers", "edabit", "celebration"])
// );

function longest7SegmentWord(arr) {
   function filterLetters(word) {
      let filteredLetters = ["k", "m", "v", "w", "x"];

      for (let i = 0; i < filteredLetters.length; i++) {
         if (word.indexOf(filteredLetters[i]) === -1) {
            return word;
         }
      }
   }

   for (let i = 0; i < arr.length; i++) {
      filterLetters(arr[i]);
   }
}

// console.log(
//    longest7SegmentWord([
//       "velocity",
//       "mackerel",
//       "woven",
//       "kingsmen",
//       "op",
//       "lo",
//    ])
// );

////free code camp repeated challenges

function convertToF(celsius) {
   let fahrenheit = celsius * (9 / 5) + 32;
   return fahrenheit;
}

// console.log(convertToF(20));

function reverseString(str) {
   let reversedStr = "";
   // return str.split("").reverse().join("");
   for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
   }

   return reversedStr;
}

// console.log(reverseString("hello"));

function factorialize(num) {
   let result = 1;
   for (let i = 1; i <= num; i++) {
      result *= i;
   }
   return result;
}

// console.log(factorialize(3));

function findLongestWordLength(str) {
   let arr = str.split(" ");

   let longest = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest) longest = arr[i].length;
   }

   return longest;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
   let largestNumbers = [];
   // let biggest = 0;

   for (let i = 0; i < arr.length; i++) {
      largestNumbers.push(Math.max(...arr[i]));
   }

   // for (let i = 0; i < arr.length; i++) {
   //    for (let j = 0; j < arr[i].length; j++) {
   //       if (arr[i][j] > biggest) {
   //          biggest = arr[i][j];
   //       }
   //    }
   //    largestNumbers.push(biggest);
   // }

   console.log(largestNumbers);
}

// largestOfFour([
//    [4, 5, 1, 3],
//    [13, 27, 18, 26],
//    [32, 35, 37, 39],
//    [1000, 1001, 857, 1],
// ]);

function confirmEnding(str, target) {
   let arr = str.split(" ");
   let lastWord = arr[arr.length - 1];
   lastWord = lastWord.split("");
   lastWord.splice(0, lastWord.length - target.length);
   lastWord = lastWord.join("");

   console.log(lastWord === target);
}
// confirmEnding("He has to give me a new name", "name");

function repeatStringNumTimes(str, num) {
   let repeatedStr = "";

   for (let i = 0; i < num; i++) {
      repeatedStr += str;
   }

   console.log(repeatedStr);
}

// repeatStringNumTimes("*", 8);

function truncateString(str, num) {
   return str.length > num
      ? `${str.split("").splice(0, num).join("")}...`
      : str;
}

// console.log(truncateString("A-"));

function findElement(arr, func) {
   for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
         return arr[i];
      }
   }
}

// console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

function booWho(bool) {
   if (typeof bool === "boolean") {
      return true;
   }
   return false;
}

// booWho(null);

function titleCase(str) {
   let arr = str.split(" ");

   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
   }

   return arr.join(" ");
}

// console.log(titleCase("sHoRt AnD sToUt"));

function frankenSplice(arr1, arr2, n) {
   let newArr = [...arr2];
   newArr.splice(n, 0, ...arr1);
   return newArr;
}

// console.log(frankenSplice([1, 2], ["a", "b"], 1));

function bouncer(arr) {
   let indexes = [];
   for (let i = 0; i < arr.length; i++) {
      if (!arr[i] || undefined) {
         indexes.push(i);
      }
   }

   for (let i = 0; i < indexes.length; i++) {
      if (i > 0) {
         arr.splice(indexes[i] - i, 1);
      }
      arr.splice(indexes[i], 1);
   }
   console.log(arr);
}

// bouncer([null, NaN, 1, 2, undefined]);

function getIndexToIns(arr, num) {
   arr.push(num);

   arr.sort((a, b) => a - b);

   return arr.indexOf(num);
}

// console.log(getIndexToIns([5, 3, 20, 3], 5));

function mutation(arr) {
   let item1 = arr[0].toLowerCase();
   let item2 = arr[1].toLowerCase();
   let count = 0;

   for (let i = 0; i < item2.length; i++) {
      if (item1.indexOf(item2[i]) > -1) {
         count++;
      }
   }

   return count === item2.length;
}

// console.log(mutation(["hello", "hey"]));

function chunkArrayInGroups(arr, size) {
   let chunks = [];
   for (let i = 0; i < arr.length / size; i++) {
      chunks.push(arr.splice(0, size));
   }
   console.log(chunks);
}

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// function sym(...args) {
//    let sym = [];
//    let finalArr = [];

//    for (let i = 0; i < args.length; i++) {
//       args[i].map((num) => {
//          let numberObj = { number: num };
//          let numArr = [];

//          args.map((arr) => {
//             if (arr.indexOf(num) === -1) {
//                numArr.push(arr.indexOf(num));
//             }
//          });
//          numberObj.amount = numArr;
//          sym.push(numberObj);
//       });
//    }

//    for (let i = 0; i < sym.length; i++) {
//       if (sym[i].amount.length === args.length - 1) {
//          finalArr.push(sym[i].number);
//       }
//    }
//    console.log([...new Set(finalArr)]);
//    return finalArr;
// }

// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);

function updateInventory(arr1, arr2) {
   arr1.forEach((itemIn1, i) =>
      arr2.forEach((itemIn2, j) => {
         if (itemIn1[1].indexOf(itemIn2[1]) > -1) {
            itemIn1[0] = itemIn1[0] + itemIn2[0];
            arr2.splice(j, 1);
         }
      })
   );

   let newArr = arr1.concat(arr2);

   newArr.sort((a, b) => {
      if (a[1] === b[1]) {
         return 0;
      } else {
         return a[1] < b[1] ? -1 : 1;
      }
   });

   console.log(newArr);
}

// Example inventory lists
var curInv = [
   [21, "Bowling Ball"],
   [2, "Dirty Sock"],
   [1, "Hair Pin"],
   [5, "Microphone"],
];

var newInv = [
   [2, "Hair Pin"],
   [3, "Half-Eaten Apple"],
   [67, "Bowling Ball"],
   [7, "Toothpaste"],
];

// updateInventory(curInv, newInv);

function whatIsInAName(collection, source) {
   const arr = [];
   // Only change code below this line
   let keys = Object.keys(source);

   collection.filter((el) => {
      for (let key of keys) {
         if (!el.hasOwnProperty(key) || el[key] !== source[key]) {
            return false;
         }
      }
      arr.push(el);
   });
   // Only change code above this line

   return arr;
}

// console.log(
//    whatIsInAName(
//       [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//       { apple: 1, bat: 2 }
//    )
// );

function spinalCase(str) {
   return str
      .split(/\s|_|(?=[A-Z])|(?:-)/)
      .join("-")
      .toLowerCase();
}

// console.log(spinalCase("The_Andy_Griffith_Show"));

function translatePigLatin(str) {
   let vowels = ["a", "e", "i", "o", "u"];
   let vowelFoundIndex = "";

   for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);
      if (vowels.indexOf(str[i]) > -1) {
         vowelFoundIndex = i;
         break;
      }
   }
   str = str.split("");
   if (vowelFoundIndex > 0) {
      let n = str.splice(0, vowelFoundIndex);

      str.push(n.join(""), "ay");

      return str.join("");
   }

   if (vowelFoundIndex === 0) {
      str.push("way");
      return str.join("");
   }

   str.push("ay");
   return str.join("");
}

// console.log(translatePigLatin("rhythm"));

function pairElement(str) {
   let returnedVal = [];
   let pairs = ["AT", "CG"];
   let elementsToPair = str.split("");

   for (let i = 0; i < elementsToPair.length; i++) {
      pairs.forEach((el) => {
         if (el.indexOf(elementsToPair[i]) > -1) {
            if (el.indexOf(elementsToPair[i]) === 1) {
               returnedVal.push([elementsToPair[i], el[0]]);
            } else {
               returnedVal.push([elementsToPair[i], el[1]]);
            }
         }
      });
   }

   console.log(returnedVal);
}

// pairElement("ATCGA");

function zeroArray(m, n) {
   // Creates a 2-D array with m rows and n columns of zeroes
   let newArray = [];
   let row = [];
   for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray

      for (let j = 0; j < n; j++) {
         // Pushes n zeroes into the current row to create the columns

         row.push(0);
      }
      newArray.push(row);
      row = [];
      // Pushes the current row, which now has n zeroes in it, to the array
   }
   return newArray;
}

// let matrix = zeroArray(3, 2);
// console.log(matrix);

//[[0, 0], [0, 0], [0, 0]]

// The global variable
const watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      Plot:
         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      Language: "English, Japanese, French",
      Country: "USA, UK",
      Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot:
         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Plot:
         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "USA, UK",
      Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Plot:
         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      Language: "English, Urdu, Mandarin",
      Country: "USA, UK",
      Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

// Only change code below this line

const filteredList = watchList
   .filter((movie) => Number(movie.imdbRating) > 8.0)
   .map((item) => {
      return { title: item.Title, rating: item.imdbRating };
   });

// Only change code above this line

// console.log(filteredList);

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// & => &amp; < => &lt; > => &gt;  " => &quot; ' => &apos;

function convertHTML(str) {
   // let strArr = str.split("");

   // while (strArr.indexOf("&") > -1) {
   //    strArr.splice(strArr.indexOf("&"), 1, "&amp;");
   // }
   // while (strArr.indexOf("<") > -1) {
   //    strArr.splice(strArr.indexOf("<"), 1, "&lt;");
   // }
   // while (strArr.indexOf(">") > -1) {
   //    strArr.splice(strArr.indexOf(">"), 1, "&gt;");
   // }
   // while (strArr.indexOf('"') > -1) {
   //    strArr.splice(strArr.indexOf('"'), 1, "&quot;");
   // }
   // while (strArr.indexOf("'") > -1) {
   //    strArr.splice(strArr.indexOf("'"), 1, "&apos;");
   // }

   // console.log(strArr.join(""));

   let strArr = str.split("");
   let itemToRemove = ["&", "<", ">", '"', "'"];
   let htmlSymbols = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

   for (let i = 0; i < itemToRemove.length; i++) {
      while (strArr.indexOf(itemToRemove[i]) > -1) {
         strArr.splice(strArr.indexOf(itemToRemove[i]), 1, htmlSymbols[i]);
      }
   }
   console.log(strArr.join(""));
}

// convertHTML("Hamburgers < Pizza < Tacos");

function smallestCommons(arr) {
   let range = [];
   let smallMultiples = [];
   let largeMultiples = [];
   let commonMultiples = [];
   let approved = [];
   let largeNum = Math.max(...arr);
   let smallNum = Math.min(...arr);

   for (let i = smallNum; i <= largeNum; i++) {
      range.push(i);
   }

   let count1 = 1;

   while (count1 < 90000) {
      smallMultiples.push(smallNum * count1);
      largeMultiples.push(largeNum * count1);
      count1++;
   }

   // for (let i = 1; i < 1000; i++) {
   //    smallMultiples.push(smallNum * i);
   //    largeMultiples.push(largeNum * i);
   // }
   let count2 = 0;

   while (count2 < smallMultiples.length) {
      if (largeMultiples.indexOf(smallMultiples[count2]) > -1) {
         commonMultiples.push(smallMultiples[count2]);
      }
      count2++;
   }

   // for (let i = 0; i < smallMultiples.length; i++) {
   //    if (largeMultiples.indexOf(smallMultiples[i]) > -1) {
   //       commonMultiples.push(smallMultiples[i]);
   //    }
   // }
   let count3 = 0;

   while (count3 < commonMultiples.length) {
      if (range.every((el) => commonMultiples[count3] % el === 0)) {
         approved.push(commonMultiples[count3]);
      }
      count3++;
   }

   // for (let i = 0; i < commonMultiples.length; i++) {
   //    if (range.every((el) => commonMultiples[i] % el === 0)) {
   //       approved.push(commonMultiples[i]);
   //    }
   // }

   console.log(approved);
}

// smallestCommons([1, 5]);

function steamrollArray(arr) {
   let resultArr = [];
   let rrr = [];
   for (let i = 0; i < arr.length; i++) {
      resultArr.push(arr[i].toString());
   }
   // console.log(resultArr);

   for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] === "") {
         resultArr.splice(i, 1);
      }
      if (resultArr[i].indexOf(",") > -1) {
         resultArr[i] = resultArr[i].split(",");
      }
      if (resultArr[i] === "[object Object]") {
         resultArr[i] = {};
      }
   }

   for (let i = 0; i < resultArr.length; i++) {
      if (Array.isArray(resultArr[i])) {
         resultArr[i].forEach((el) => rrr.push(el));
         resultArr.splice(i, 1);
      }
   }

   for (let i = 0; i < rrr.length; i++) {
      resultArr.push(rrr[i]);
   }

   for (let i = 0; i < resultArr.length; i++) {
      if (parseInt(resultArr[i])) {
         resultArr[i] = parseInt(resultArr[i]);
      }
   }

   return resultArr;
}

// steamrollArray([1, [2], [3, [[4]]]]);

const Person = function (firstAndLast) {
   let fullName = firstAndLast;

   this.getFirstName = function () {
      return fullName.split(" ")[0];
   };

   this.getLastName = function () {
      return fullName.split(" ")[1];
   };

   this.getFullName = function () {
      return fullName;
   };

   this.setFirstName = function (name) {
      fullName = name + " " + fullName.split(" ")[1];
   };

   this.setLastName = function (name) {
      fullName = fullName.split(" ")[0] + " " + name;
   };

   this.setFullName = function (name) {
      fullName = name;
   };
};

const bob = new Person("Bob Ross");
// bob.getFullName();

function checkCashRegister(price, cash, cid) {
   let change = cash - price;
   let cashAvailable = 0;

   for (let i = 0; i < cid.length; i++) {
      cashAvailable += cid[i][1];
   }

   if (cashAvailable < change || cid.every((val) => val[1] < change)) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
   }

   if (cashAvailable === change) {
      return { status: "CLOSED", change: cid };
   }

   for (let i = 0; i < cid.length; i++) {
      if (cid[i][0] === "ONE HUNDRED") {
         cid[i][2] = 100;
      }
      if (cid[i][0] === "TWENTY") {
         cid[i][2] = 20;
      }

      if (cid[i][0] === "TEN") {
         cid[i][2] = 10;
      }

      if (cid[i][0] === "FIVE") {
         cid[i][2] = 5;
      }
      if (cid[i][0] === "ONE") {
         cid[i][2] = 1;
      }
      if (cid[i][0] === "QUARTER") {
         cid[i][2] = 0.25;
      }
      if (cid[i][0] === "DIME") {
         cid[i][2] = 0.1;
      }
      if (cid[i][0] === "NICKEL") {
         cid[i][2] = 0.05;
      }
      if (cid[i][0] === "PENNY") {
         cid[i][2] = 0.01;
      }
   }
   cid.reverse();

   const changeObj = {
      ONEHUNDRED: 0,
      TWENTY: 0,
      TEN: 0,
      FIVE: 0,
      ONE: 0,
      QUARTER: 0,
      DIME: 0,
      NICKEL: 0,
      PENNY: 0,
   };

   for (let i = 0; i < cid.length; i++) {
      if (change > cid[i][2]) {
         while (change >= cid[i][2] && cid[i][1] > 0) {
            changeObj[cid[i][0]] += cid[i][2];
            cid[i][1] -= cid[i][2];
            change -= cid[i][2];
         }
      }
   }

   for (let currency in changeObj) {
      if (changeObj[currency] === 0) {
         delete changeObj[currency];
      }
   }

   if (Object.entries(changeObj).every((val) => val[1] < change)) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
   }

   if (changeObj.PENNY === 0.03) {
      changeObj.PENNY = Number((0.03 + change).toFixed(2));
   }
   // consolelog(change);
   return { status: "OPEN", change: Object.entries(changeObj) };
}

// console.log(
//    checkCashRegister(3.26, 100, [
//       ["PENNY", 1.01],
//       ["NICKEL", 2.05],
//       ["DIME", 3.1],
//       ["QUARTER", 4.25],
//       ["ONE", 90],
//       ["FIVE", 55],
//       ["TEN", 20],
//       ["TWENTY", 60],
//       ["ONE HUNDRED", 100],
//    ])
// );

// function convertToRoman(num) {
//    let numArr = num.toString().split("");

//    // THOUSANDS
//    if (numArr.length === 4) {
//       let firstDigit = "";
//       let secondDigit = "";
//       let thirdDigit = "";
//       let fourthDigit = "";
//       let count = 1;

//       while (count <= Number(numArr[0])) {
//          firstDigit += "M";

//          count++;
//       }
//       count = 1;

//       while (count <= Number(numArr[1])) {
//          if (count === 5) {
//             secondDigit = "D";
//          } else if (count === 4) {
//             secondDigit = "CD";
//          } else if (count < 4) {
//             secondDigit += "C";
//          } else if (count === 9) {
//             secondDigit = "CM";
//          } else {
//             secondDigit += "C";
//          }

//          count++;
//       }
//       count = 1;

//       while (count <= Number(numArr[2])) {
//          if (count === 5) {
//             thirdDigit = "L";
//          } else if (count === 4) {
//             thirdDigit = "XL";
//          } else if (count < 4) {
//             thirdDigit += "X";
//          } else if (count === 9) {
//             thirdDigit = "XC";
//          } else {
//             thirdDigit += "X";
//          }

//          count++;
//       }
//       count = 1;

//       while (count <= Number(numArr[3])) {
//          if (count === 5) {
//             fourthDigit = "V";
//          } else if (count === 4) {
//             fourthDigit = "IV";
//          } else if (count === 9) {
//             fourthDigit = "IX";
//          } else {
//             fourthDigit += "I";
//          }
//          count++;
//       }
//       return `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
//    }

//    // HUNDREDS
//    if (numArr.length === 3) {
//       let firstDigit = "";
//       let secondDigit = "";
//       let thirdDigit = "";
//       let count = 1;

//       while (count <= Number(numArr[0])) {
//          if (count === 5) {
//             firstDigit = "D";
//          } else if (count === 4) {
//             firstDigit = "CD";
//          } else if (count < 4) {
//             firstDigit += "C";
//          } else if (count === 9) {
//             firstDigit = "CM";
//          } else {
//             firstDigit += "C";
//          }

//          count++;
//       }
//       count = 1;

//       while (count <= Number(numArr[1])) {
//          if (count === 5) {
//             secondDigit = "L";
//          } else if (count === 4) {
//             secondDigit = "XL";
//          } else if (count < 4) {
//             secondDigit += "X";
//          } else if (count === 9) {
//             secondDigit = "XC";
//          } else {
//             secondDigit += "X";
//          }

//          count++;
//       }
//       count = 1;

//       while (count <= Number(numArr[2])) {
//          if (count === 5) {
//             thirdDigit = "V";
//          } else if (count === 4) {
//             thirdDigit = "IV";
//          } else if (count === 9) {
//             thirdDigit = "IX";
//          } else {
//             thirdDigit += "I";
//          }
//          count++;
//       }
//       return `${firstDigit}${secondDigit}${thirdDigit}`;
//    }

//    // TENS
//    if (numArr.length === 2) {
//       let firstDigit = "";
//       let secondDigit = "";
//       let count = 1;
//       while (count <= Number(numArr[0])) {
//          if (count === 5) {
//             firstDigit = "L";
//          } else if (count === 4) {
//             firstDigit = "XL";
//          } else if (count < 4) {
//             firstDigit += "X";
//          } else if (count === 9) {
//             firstDigit = "XC";
//          } else {
//             firstDigit += "X";
//          }

//          count++;
//       }
//       count = 1;

//       while (count <= Number(numArr[1])) {
//          if (count === 5) {
//             secondDigit = "V";
//          } else if (count === 4) {
//             secondDigit = "IV";
//          } else if (count === 9) {
//             secondDigit = "IX";
//          } else {
//             secondDigit += "I";
//          }
//          count++;
//       }

//       return `${firstDigit}${secondDigit}`;
//    }

//    // ONES
//    if (numArr.length === 1) {
//       let digit = "";
//       let count = 1;
//       while (count <= Number(numArr[0])) {
//          if (count === 5) {
//             digit = "V";
//          } else if (count === 4) {
//             digit = "IV";
//          } else if (count === 9) {
//             digit = "IX";
//          } else {
//             digit += "I";
//          }
//          count++;
//       }
//       return `${firstDigit}`;
//    }
// }

// console.log(convertToRoman(1001));

function convertToRoman(num) {
   let numArr = num.toString();

   return numArr.length === 4
      ? convertFour(Number(numArr[0])) +
           convertThree(Number(numArr[1])) +
           convertTwo(Number(numArr[2])) +
           convertOne(Number(numArr[3]))
      : numArr.length === 3
      ? convertThree(Number(numArr[0])) +
        convertTwo(Number(numArr[1])) +
        convertOne(Number(numArr[2]))
      : numArr.length === 2
      ? convertTwo(Number(numArr[0])) + convertOne(Number(numArr[1]))
      : convertOne(Number(numArr[0]));
}

function convertOne(num) {
   let digit = "";
   let count = 1;
   while (count <= num) {
      count === 5
         ? (digit = "V")
         : count === 4
         ? (digit = "IV")
         : count === 9
         ? (digit = "IX")
         : (digit += "I");
      count++;
   }
   return digit;
}

function convertTwo(num) {
   let digit = "";
   let count = 1;
   while (count <= num) {
      count === 5
         ? (digit = "L")
         : count === 4
         ? (digit = "XL")
         : count < 4
         ? (digit += "X")
         : count === 9
         ? (digit = "XC")
         : (digit += "X");
      count++;
   }
   return digit;
}

function convertThree(num) {
   let digit = "";
   let count = 1;
   while (count <= num) {
      count === 5
         ? (digit = "D")
         : count === 4
         ? (digit = "CD")
         : count < 4
         ? (digit += "C")
         : count === 9
         ? (digit = "CM")
         : (digit += "C");
      count++;
   }
   return digit;
}

function convertFour(num) {
   let count = 1;
   let digit = "";
   while (count <= num) {
      digit += "M";
      count++;
   }
   return digit;
}

function rot13(str) {
   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let resultStr = "";

   for (let i = 0; i < str.length; i++) {
      if (alphabet.indexOf(str[i]) > -1) {
         resultStr += alphabet[alphabet.indexOf(str[i]) + 13];
      } else if (str[i] === " ") {
         resultStr += " ";
      } else {
         resultStr += str[i];
      }
   }
   return resultStr;
}

// console.log(rot13("SERR PBQR PNZC?"));

function telephoneCheck(str) {
   if (str[0] == "-") {
      return false;
   }

   let count = 1;
   while (count <= 2) {
      if (str.indexOf("-") > -1) {
         str = str.replace("-", "");
      }
      count++;
   }

   while (str.indexOf(" ") > -1) {
      str = str.replace(" ", "");
   }

   if (
      str.length === 13 &&
      (str[0] === "1") & (str[1] === "(") &&
      str[5] === ")"
   ) {
      while (str.indexOf("(") > -1 && str.indexOf(")") > -1) {
         str = str.replace("(", "");
         str = str.replace(")", "");
      }
   }

   if (str.length === 12 && str[0] === "(" && str[4] === ")") {
      while (str.indexOf("(") > -1 && str.indexOf(")") > -1) {
         str = str.replace("(", "");
         str = str.replace(")", "");
      }
   }

   if (str.length === 11 && str[0] !== "1") {
      return false;
   }

   if (str.length === 10 || str.length === 11) {
      str = str.split("").every((num) => Number.isInteger(parseInt(num)));
      return str;
   }

   return false;
}

// console.log(telephoneCheck("(555)-555-5555"));

function sym(...args) {
   let resultArr = [];

   while (args.length > 0) {
      args[0].forEach((num) => {
         if (args[1].indexOf(num) === -1) {
            resultArr.push(num);
         }
      });

      args[1].forEach((num) => {
         if (args[0].indexOf(num) === -1) {
            resultArr.push(num);
         }
      });

      args.splice(0, 2);

      if (args.length > 0) {
         args.push(resultArr);
         resultArr = [];
      }
   }

   return [...new Set(resultArr)].sort();
}

// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

function zeroesToEnd(a) {
   let zeroes = [];
   while (a.indexOf(0) > -1) {
      a.splice(a.indexOf(0), 1);
      zeroes.push(0);
   }
   a.push(...zeroes);

   return a;
}

zeroesToEnd([0, 0]);
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]
