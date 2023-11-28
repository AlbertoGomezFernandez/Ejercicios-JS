const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

foodSchedule.forEach(food => {
  if (!food.isVegan) {
    food.name = fruits[fruits.length - 1];
    food.isVegan = true;
    fruits.pop();
  }
});

console.log(foodSchedule);