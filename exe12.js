const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


function removeDuplicates(array) {
  const noDuplicates = [];

  array.forEach(element => {
    if (!noDuplicates.includes(element)) {
      noDuplicates.push(element);
    }
  });
  return noDuplicates;
}

console.log(removeDuplicates(duplicates));