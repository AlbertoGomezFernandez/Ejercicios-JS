const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

const totalSellCount = products.reduce((total, product) => total + product.sellCount, 0);

const averageSellCount = totalSellCount / products.length;

console.log(averageSellCount);