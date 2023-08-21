function sum(...arr) {
  let sumOfNumbers = 0;
  for (const number of arr) {
    sumOfNumbers += number;
  }
  console.log(sumOfNumbers);
}

const numbers = [49, 1, 52, 67, 33, 200, 120];
sum(...numbers, 46);
