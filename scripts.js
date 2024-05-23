// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. ForEach Basics:
console.log("1. Province Name:");
names.forEach((name, index) => console.log(name, provinces[index]));
console.log("");

// 2. Uppercase Transformation:
console.log("2. Province Uppercase:");
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);
console.log("");

// 3. Name Lengths:
console.log("3. Name Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
console.log("");

// 4. Sorting:
console.log("4.Province Sorted:");
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);
console.log("");

// 5. Filtering Cape:
console.log("5. Remove Provinces containing 'Cape':");
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log("Remaining Provinces:", filteredProvinces.length);
console.log("");

// 6. Finding 'S':
console.log("6. Name conatins 'S':");
const containsS = names.map(name => name.includes('S'));
console.log(containsS);
console.log("");

// 7. Creating Object Mapping:
console.log("7. Creating Object Mapping:");
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);
console.log("");

// Advanced Exercises (Single console.log Execution)

console.log("Advanced Exercises:");

// 1. Log Products:
console.log("1. Log Products Name:");
products.forEach(product => console.log(product.product));
console.log("");

// 2. Filter by Name Length:
console.log("2. Filter by Name Length:");
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);
console.log("");

// 3. Price Manipulation:
console.log("3. Products without prices:");
const totalPrice = products
  .filter(product => product.price.trim() !== '')
  .map(product => parseFloat(product.price))
  .reduce((acc, price) => acc + price, 0);
console.log("Total Price:", totalPrice);
console.log("");

// 4. Concatenate Product Names:
console.log("4. Product Names into singlr string:");
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ", ", "").slice(0, -2);
console.log(concatenatedNames);
console.log("");

// 5. Find Extremes in Prices:
console.log("5. Find Highest and lowest in Prices:");
const prices = products.map(product => parseFloat(product.price)).filter(price => !isNaN(price));
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);
console.log("");

// 6. Object Transformation:
console.log("6. Object Transformation:");
const transformedProducts = Object.entries(products).reduce((acc, [index, { product, price }]) => {
  acc[index] = { name: product, cost: price };
  return acc;
}, {});
console.log(transformedProducts);
