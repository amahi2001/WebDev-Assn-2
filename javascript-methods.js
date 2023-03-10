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
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i])) {
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  // Place your code here.

  //assuming the first element is the accumulator
  let accumulator = this[0];
  for (let i = 1; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i]);
  }
  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  // Place your code here.
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
  let result = [];
  for (const [key] of Object.entries(object)) {
    result.push(key);
  }
  return result;
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
  let result = [];
  for (const [, value] of Object.entries(object)) {
    result.push(value);
  }
  return result;
};

// test array
const arr = [1, 2, 3, 4, 5];
const arr2 = ["hello", "world", "how", "are", "you"];

//test object
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

//testing myMap
console.log("Testing myMap");
const map1 = arr.myMap((x) => x * 2);
const map2 = arr2.myMap((x) => x.toUpperCase());
console.log(map1);
console.log(map2);
console.log("\n");

//testing myFilter
console.log("Testing myFilter");
const filter1 = arr.myFilter((x) => x > 3);
const filter2 = arr2.myFilter((x) => x.length > 3);
console.log(filter1);
console.log(filter2);
console.log("\n");

//testing mySome
console.log("Testing mySome");
const some1 = arr.mySome((x) => x > 3);
const some2 = arr2.mySome((x) => x.length > 20);
console.log(some1);
console.log(some2);
console.log("\n");

//testing myEvery
console.log("Testing myEvery");
const every1 = arr.myEvery((x) => x > 0);
const every2 = arr2.myEvery((x) => x.length > 0);
console.log(every1);
console.log(every2);
console.log("\n");

//testing myReduce
console.log("Testing myReduce");
const reduce1 = arr.myReduce((x, y) => x + y);
const reduce2 = arr2.myReduce((x, y) => x + "//" + y);
console.log(reduce1);
console.log(reduce2);
console.log("\n");

//testing myIncludes
console.log("Testing myIncludes");
const includes1 = arr.myIncludes(3);
const includes2 = arr2.myIncludes("bruh");
console.log(includes1);
console.log(includes2);
console.log("\n");

//testing myIndexOf
console.log("Testing myIndexOf");
const indexOf1 = arr.myIndexOf(3);
const indexOf2 = arr2.myIndexOf("world");
console.log(indexOf1);
console.log(indexOf2);
console.log("\n");

//testing myLastIndexOf
console.log("Testing myLastIndexOf");
const lastIndexOf1 = [...arr, ...arr].myLastIndexOf(3);
const lastIndexOf2 = [...arr2, ...arr2].myLastIndexOf("world");
console.log(lastIndexOf1);
console.log(lastIndexOf2);
console.log("\n");

//testing myKeys
console.log("Testing myKeys");
const keys1 = Object.myKeys(obj);
console.log(keys1);
console.log("\n");

//testing myValues
console.log("Testing myValues");
const values1 = Object.myValues(obj);
console.log(values1);
