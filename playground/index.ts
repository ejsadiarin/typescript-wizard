const map = new Map();
const obj = { a: 1, b: 2 };
const newObj = Object.keys(obj);
// map.size

console.log(newObj);
console.log(obj);

// to count the length of an object, you need to manually use a counter then loop through the object
let counter = 0;
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    counter++;
  }
}
console.log(counter);

let numberOfKeys = 0;
for (let [key, value] of Object.entries(obj)) {
  numberOfKeys++;
}
console.log(numberOfKeys);


// or just use Object.keys(obj).length
// --> Object.keys(obj) creates an array of the keys on obj
// --> .length is an array property to count the elements 
console.log(Object.keys(obj).length);
