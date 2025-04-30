function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negaviteCount = 0;
  let zeroCount = 0;
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negaviteCount++;
    } else {
      zeroCount++;
    }
  }
  const ratioPositive = (positiveCount / n).toFixed(6);
  const ratioNegative = (negaviteCount / n).toFixed(6);
  const ratioZero = (zeroCount / n).toFixed(6);

  console.log(ratioPositive);
  console.log(ratioNegative);
  console.log(ratioZero);
}
//plusMinus([1, 2, 3, -1, -5, 0, 0]);

function miniMaxSum(arr) {
  // Write your code here
  const arrOrder = arr.sort((a, b) => a - b);
  let sumMax = 0;
  let sumMin = 0;
  for (let i = 0; i < 4; i++) {
    sumMin = sumMin + arrOrder[i];
  }
  for (let i = 1; i < 5; i++) {
    sumMax = sumMax + arrOrder[i];
  }

  console.log(`${sumMin} ${sumMax}`);
}
//miniMaxSum([1, 5, 7, 6, 9]);

function timeConversion(s) {
  // Write your code here
  const timeSeparated = s.split("");
  const hour = timeSeparated.slice(0, 2).join("");
  const minutesAndSeconds = timeSeparated.slice(2, 8).join("");
  let hourInt = parseInt(hour);

  let newTime = "";

  if (s[8] === "P" && hourInt !== 12) {
    const newHour = hourInt + 12;
    newTime = newHour + minutesAndSeconds;
  } else if (s[8] === "A" && hourInt === 12) {
    newTime = "00" + minutesAndSeconds;
  } else {
    newTime = hour + minutesAndSeconds;
  }
  return newTime;
}
//timeConversion("07:05:45PM");

function matchingStrings(strings, queries) {
  // Write your code here
  const answer = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}
// matchingStrings(
//   ["nana", "papa", "mama", "gato", "nana"],
//   ["perro", "leon", "papa", "nana"]
// );

function lonelyinteger2(a) {
  // Write your code here
  let lonely = 0;
  const count = {};
  for (let num of a) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (let num in count) {
    if (count[num] === 1) {
      lonely = num;
    }
  }
  return lonely;
}
//lonelyinteger2([1, 2, 3, 4, 3, 2, 1]);

function flippingBits(n) {
  // Write your code here
  let numero = n;
  const residuo = [];
  const newResiduo = [];
  const potencias = [];
  let total = 0;
  while (numero > 0) {
    let residuoNum = numero % 2;
    residuo.unshift(residuoNum);
    numero = Math.floor(numero / 2);
  }

  while (residuo.length < 32) {
    residuo.unshift(0);
  }

  for (let num of residuo) {
    if (num === 1) {
      newResiduo.push(0);
    } else {
      newResiduo.push(1);
    }
  }
  const reversedResiduo = [...newResiduo].reverse();
  for (let i = 0; i < reversedResiduo.length; i++) {
    let potencia = Math.pow(2, i) * reversedResiduo[i];
    potencias.push(potencia);
  }

  for (let num of potencias) {
    total = total + num;
  }
  return total;
}
//flippingBits(13);

function flippingBits2(n) {
  return ~n >>> 0;
}
//flippingBits2(13);

function diagonalDifference(arr) {
  // Write your code here
  let suma1 = 0;
  let suma2 = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    suma1 += arr[i][i];
    suma2 += arr[i][arr.length - 1 - i];
  }
  total = Math.abs(suma1 - suma2);
  return total;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

diagonalDifference(matriz);

function countingSort(arr) {
  const frequency = new Array(100).fill(0); // Paso 1

  for (let i = 0; i < arr.length; i++) {     // Paso 2 y 3
      frequency[arr[i]]++;
  }

  return frequency;                          // Paso 4
}