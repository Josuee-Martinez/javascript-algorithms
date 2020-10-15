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
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
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
