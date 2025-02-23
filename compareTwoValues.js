// step 1: two args, check equality. SDUI - different schemas, datadog
// step 2: compare arrays: [1,2,3], [1,2,3], [3,2,1];
// step 3: deeply nested arrays: [[1,23],[2,3]], [[1,23],[2,3]], [1,23,2,3];
// step 4: deeply nested arrays: [[1,23],[2,3],{test: 123}], [[1,23],[2,3,{test: 123, test2: 234}] ,{test: 123}], [1,23,2,3];
function checkEquality(arg1, arg2) {
  if (Array.isArray(arg1) && Array.isArray(arg2)) {
    let len1 = arg1.length,
      len2 = arg2.length;
    if (len1 === len2) {
      for (let i = 0; i < len1; i++) {
        if (!checkEquality(arg1[i], arg2[i])) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else if (
    (Array.isArray(arg1) && Object.getPrototypeOf(arg2) === Object.prototype) ||
    (Array.isArray(arg2) && Object.getPrototypeOf(arg1) === Object.prototype)
  ) {
    return false;
  } else if (
    arg1 !== null &&
    arg2 !== null &&
    typeof arg1 === "object" &&
    typeof arg2 === "object"
  ) {
    if (!checkEquality(Object.keys(arg1).sort(), Object.keys(arg2).sort())) {
      return false;
    } else {
      for (let key in arg1) {
        if (!checkEquality(arg1[key], arg2[key])) {
          return false;
        }
      }
      return true;
    }
  }
  return arg1 === arg2;
}

console.log(checkEquality(1, 1));
console.log(checkEquality(1, 2));
console.log(checkEquality([1, 2, 3], [1, 2, 3]));
console.log(checkEquality([1, 2, 3], [2, 3, 1]));
console.log(checkEquality([1, { a: 2 }], [2, 3, 1]));
console.log(checkEquality([1, { a: 2 }], [1, { a: 2 }]));
