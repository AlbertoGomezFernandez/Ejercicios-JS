const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
  sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
}

console.log(sumAll(numbers));