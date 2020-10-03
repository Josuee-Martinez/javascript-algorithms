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
