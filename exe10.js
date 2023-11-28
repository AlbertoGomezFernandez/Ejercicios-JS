const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  sum = 0;
  array.forEach(element => {
    sum += element;
  });

  return sum / array.length;
}

console.log(average(numbers));