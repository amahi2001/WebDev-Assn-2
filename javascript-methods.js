/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (callbackFn) {
  // Place your code here.
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callbackFn(this[i]));
  }
  return arr;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};

// test array
const arr = [1, 2, 3, 4, 5];
const arr2 = ["hello", "world", "how", "are", "you"];

//testing myMap
const map1 = arr.myMap((x) => x * 2);
const map2 = arr2.myMap((x) => x.toUpperCase())
console.log(map1);
console.log(map2);