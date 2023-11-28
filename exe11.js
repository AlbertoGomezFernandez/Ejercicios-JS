const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  sum = 0;
  array.forEach(element => {
    if (typeof (element) === "number") {
      sum += element;
    } else {
      sum += element.length;
    }
  });

  return sum / array.length;
}

console.log(averageWord(mixedElements));