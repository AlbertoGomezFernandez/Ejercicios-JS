const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {

  let longestWord = "";
  array.forEach(element => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });
  return longestWord;
}

console.log(findLongestWord(avengers));