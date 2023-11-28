const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];


users.forEach(user => {
  if (user.years >= 18) {
    console.log(`${user.name} mayor de edad`);
  } else {
    console.log(`${user.name} menor de edad`);
  }
});