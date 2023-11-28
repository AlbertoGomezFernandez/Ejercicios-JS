const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array, name) {
  if (array.includes(name)) {
    let index = array.indexOf(name);
    return (`${name}, ${index}`);
  } else {
    return false;
  }
}

console.log(finderName(nameFinder, "Alberto"));