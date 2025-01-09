/**
 * Creates a counter function that starts from a given number and increments by a given step.
 * If no start or step values are provided, it defaults to starting from 0 and incrementing by 1.
 *
 * @param {number} [start=0] - The initial value of the counter.
 * @param {number} [step=1] - The value by which the counter is incremented.
 * @returns {function(): number} A function that, when called, returns the current count and increments it by the step value.
 */
function counter(start, step) {
  // Function implementation
  let count = start || 0;
  let increment = step || 1;
  return function () {
    let currentCount = count;
    count += increment;
    return currentCount;
  };
}
let count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
