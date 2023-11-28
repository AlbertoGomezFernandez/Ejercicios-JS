const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];


function repeatedCounter(array) {

  let count = 0;
  const repeated = [];

  for (let i = 0; i < array.length; i++) {

    for (let j = 1; j < array.length; j++) {
      if (array[i] === array[j]) count++;
    }

    !repeated.includes(array[i]) && repeated.push(array[i], count);

    count = 0;
  }

  return repeated;
};

console.log(repeatedCounter(counterWords));