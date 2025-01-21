// --- Start of "backTracking.js" --- 
let res = [];
function generate(N, ind, arr, nums) {
    if (ind == N) {
        res.push(arr.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        let newArr = arr.slice();
        newArr[ind] = nums[i];
        generate(N, ind + 1, newArr, nums);
    }
}

generate(3, 0, [], [6, 5, 4])
 
// --- Start of "binarySum.js" --- 
const addBinary = (A,B)=>{
    // let m = A.length
    //   , n = B.length;
    // let len = Math.max(m, n);
    // if (m > n) {
    //     B = B.padStart(m, '0');
    // } else if (n > m) {
    //     A = A.padStart(n, '0')
    // }
    // let res = ''
    //   , c = 0;
    // for (let i = len - 1; i >= 0; i--) {
    //     let a = parseInt(A[i])
    //       , b = parseInt(B[i]);
    //     sum = a + b + c;
    //     let r = sum % 2;
    //     c = Math.floor(sum / 2);
    //     res = r + res;
    // }

    // if (c > 0) {
    //     res = c + res;
    // }
    // return res;

    let i = A.length - 1;
    let j = B.length - 1;

    let ans = "";
    let carry = 0
      , sum = 0;

    // we add bits from the rightmost bit to the leftmost bit
    while (i >= 0 || j >= 0 || (carry == 1)) {
        sum = carry;
        if (i >= 0)
            sum += Number(A[i]);
        if (j >= 0)
            sum += Number(B[j]);
        ans = (String(sum % 2)) + ans;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    return ans;
}

addBinary('1010110111001101101000', '1000011011000000111100110');
 
// --- Start of "calcMinSubArrWithMinMax.js" --- 
const calcMinSubArrWithMinMax = (A)=>{

    let n = A.length;
    let max = -Infinity
      , min = Infinity;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, A[i]);
        min = Math.min(min, A[i]);
    }
    if (max == min)
        return 1;
    
    let mini = -1
      , maxi = -1
      , ans = n;

    for (let j = 0; j < n; j++) {
        if (A[j] == min) {
            mini = j;
            if (maxi != -1) {
                ans = Math.min(ans, Math.abs(maxi - mini) + 1)
            }
        }

        if (A[j] == max) {
            maxi = j;
            if (mini != -1) {
                ans = Math.min(ans, Math.abs(maxi - mini) + 1)
            }
        }
    }

    return ans;
}

calcMinSubArrWithMinMax([1, 4, 5, 1, 5, 2, 6, 4, 2, 1, 2]);
 
// --- Start of "closureCurry.js" --- 
function sum(value) {
  return function (val) {
    return val === undefined ? value : sum(val + value);
  };
}

console.dir(sum(1)(2)(5));
 
// --- Start of "constructor function.js" --- 
function Person(name) {
  this.name = name;
}

function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
let s = new Student('test',123);
console.log(s); 
// --- Start of "counter using closure.js" --- 
function createCounter() {
    var count = 0;
    return function() {
        count += 1;
        return count;
    }
}

var counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter()); 
// --- Start of "cutARod.js" --- 
const cutARod = function(A) {
    let dp = new Array(A.length + 1).fill(0);
    let n = dp.length;
    dp[0] = 0;

    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(A[j-1] + dp[i - j], dp[i]);
        }
    }

    return dp[A.length];
}

cutARod([3, 4, 1, 6, 2]);
 
// --- Start of "dijkstra.js" --- 
let adjList = {};

for (let row of B) {
    if (adjList[row[0]]) {
        adjList[row[0]] = [...adjList[row[0]], [B[1], B[2]]]
    } else {
        adjList[row[0]] = [[B[1], B[2]]]
    }
}
 
// --- Start of "fibonacci.js" --- 
const fibonacci = (N)=>{
    if (N <= 1)
        return N;
    return fibonacci(N - 1) + fibonacci(N - 2);
}

fibonacci(3);
 
// --- Start of "gcd.js" --- 
let gcd = (A,B)=>{
    if (B == 0) {
        return A;
    }
    return gcd(B, A % B);
}

let k = 24
  , B = 36;
gcd(k, B);
 
// --- Start of "getSpf.js" --- 
const getSpf = (N)=>{
    let spf = Array.from({
        length: N + 1
    }, (n,i)=>i);

    for (let i = 2; i < N + 1; i++) {
        if(spf[i] == i){
            for(j = i*i; j < N+1; j+=i){
                if(spf[j] == j){
                    spf[j] = i;
                }
            }
        }
    }

    return spf;
}

getSpf(20);
 
// --- Start of "InfixToPostfix.js" --- 
const solve = function(A) {
    let res = ''
      , stack = [];
    const prec = {
        '^': 10,
        '/': 5,
        '*': 5,
        '-': 3,
        '+': 3,
    }
    const operators = Object.keys(prec);

    for (let i = 0; i < A.length; i++) {
        // If the char is operator
        let ch = A[i];
        if (operators.includes(ch)) {
            // If stack is not empty
            if (stack.length) {
                let top = stack[stack.length - 1];
                if (top == '(' || prec[ch] > prec[top]) {
                    stack.push(ch);
                } else {
                    let n = stack.length;
                    let k = n - 1;
                    while (k >= 0) {
                        if (stack[k] == '(' || prec[stack[k]] < prec[ch]) {
                            // stack.push(ch);
                            break;
                        } else {
                            res += stack.pop();
                        }
                        k--;
                    }
                    stack.push(ch);
                }
            } else {
                stack.push(ch);
            }
        } else if (ch == '(') {
            stack.push(ch);
        } else if (ch == ')') {
            // console.log(stack);
            let n = stack.length;
            let k = n - 1;
            while (k >= 0 && stack[k] != '(') {
                res += stack.pop();
                k--;
            }
            stack.pop();
        } else {
            res += ch;
        }
    }

    // Check if any operators left after string loop.
    if (stack.length) {
        res += stack.join('');
    }

    return res;
}

solve('q+(c*t)*o+(g*g)+q*(i-a)*p-(i*l)') 
// --- Start of "kandaneMaxSubArr.js" --- 
const kandaneMaxSubArr = (A)=>{
    let n = A.length;
    let ans = -Infinity;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += A[i];
        ans = Math.max(ans, sum);        
        if (sum < 0) {
            sum = 0;
        }
    }

    return ans;
}

// kandaneMaxSubArr([-2, 3, 4, -1, 5, -10, 7]);
// kandaneMaxSubArr([2, 3, -6, 7]);
kandaneMaxSubArr([-2, -3, -6, -7]);
 
// --- Start of "leastSubArray.js" --- 
const leastSubArray = (A,B)=>{
    let sum = 0
      , minSum = Infinity
      , res = 0;
    for (let i = 0; i < B; i++) {
        sum += A[i];
    }
    let i = B;
    j = A.length;
    minSum = sum;
    while (i < j) {
        sum = sum - A[i - B] + A[i];
        if (sum < minSum) {
            minSum = sum;
            res = i-B + 1;
        }
        i++;
    }
    console.log(minSum);
    return res;
}

leastSubArray([3, 7, 90, 20, 10, 50, 40], 3); 
// --- Start of "longestOnes.js" --- 
var longestOnes = function(nums, k) {
    let n = nums.length;
    let i = 0
      , j = 0;

    while (j < n) {
        if (nums[j] == 0)
            k--;
        if (k < 0) {
            if (nums[i] == 0)
                k++;
            i++;
        }
        j++;
    }
    console.log(k);
    return j - i;
};

longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
 
// --- Start of "majorityElement.js" --- 
const majorityElement = (A)=>{
    let n = A.length
      , majority = A[0]
      , count = 1;
    for (let i = 1; i < n; i++) {
        if (count == 0) {
            majority = A[i];
            count = 1;
        }
        else if (A[i] == majority) {
            count++;
        } else {
            count--;
            
        }
    }
    let freq = 0;
    for (let j = 0; j < n; j++) {
        if (majority == A[j]) {
            freq++;
        }
    }

    if (freq > n / 2)
        return parseInt(majority);
}

majorityElement([1, 3, 5, 3, 3, 3, 3, 2, 1]);
 
// --- Start of "matrixTranspose.js" --- 
const matrixTranspose = (A)=>{
    let m = A.length
      , n = A[0].length
      , res = [];
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < m; j++) {
            arr.push(A[j][i])
        }
        res.push(arr);
    }
    return res;
}

matrixTranspose([[1, 2], [1, 2], [1, 2]])
 
// --- Start of "Max Binary Heap.js" --- 
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(elem) {
        this.values.push(elem);
        this.bubbleUp();
    }

    bubbleUp() {
        let ind = this.values.length - 1;
        let elem = this.values[ind];
        while (ind > 0) {
            let pInd = Math.floor((ind - 1) / 2);
            let pElem = this.values[pInd];
            if (elem <= pElem)
                break;
            this.values[pInd] = elem;
            this.values[ind] = pElem;
            ind = pInd;
        }
    }

    extractMax() {
        let max = this.values[0];
        let last = this.values.pop();
        if (this.values.length) {
            this.values[0] = last;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let ind = 0;        
        let length = this.values.length;
        let elem = this.values[ind];
        while (true) {
            let leftChildInd = 2 * ind + 1;
            let rightChildInd = 2 * ind + 2;
            let swap = null;
            if (leftChildInd < length) {
                if (this.values[leftChildInd] > elem) {
                    swap = leftChildInd;
                }
            }
            if (rightChildInd < length) {
                if ((swap == null && this.values[rightChildInd] > elem) || (swap !== null && this.values[rightChildInd] > this.values[swap])) {
                    swap = rightChildInd;
                }
            }
            if (swap == null)
                break;
            this.values[ind] = this.values[swap];
            this.values[swap] = elem;
            ind = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(20);
heap.insert(120);
heap.insert(3);
heap.insert(30);

// console.log(heap.values);

heap.extractMax();
// console.log(heap.values);

 
// --- Start of "Min Binary Heap.js" --- 
class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(elem) {
        this.values.push(elem);
        this.bubbleUp();
    }

    bubbleUp() {
        let ind = this.values.length - 1;
        let elem = this.values[ind];
        while (ind > 0) {
            let pInd = Math.floor((ind - 1) / 2);
            let pElem = this.values[pInd];
            if (elem > pElem)
                break;
            this.values[pInd] = elem;
            this.values[ind] = pElem;
            ind = pInd;
        }
    }

    extractMin() {
        let max = this.values[0];
        let last = this.values.pop();
        if (this.values.length) {
            this.values[0] = last;
            this.bubbleDown();
        }
        return max ?? -1;
    }

    bubbleDown() {
        let ind = 0;        
        let length = this.values.length;
        let elem = this.values[ind];
        while (true) {
            let leftChildInd = 2 * ind + 1;
            let rightChildInd = 2 * ind + 2;
            let swap = null;
            if (leftChildInd < length) {
                if (this.values[leftChildInd] < elem) {
                    swap = leftChildInd;
                }
            }
            if (rightChildInd < length) {
                if ((swap == null && this.values[rightChildInd] < elem) || (swap !== null && this.values[rightChildInd] < this.values[swap])) {
                    swap = rightChildInd;
                }
            }
            if (swap == null)
                break;
            this.values[ind] = this.values[swap];
            this.values[swap] = elem;
            ind = swap;
        }
    }
}

let heap = new MinBinaryHeap();
heap.insert(20);
heap.insert(120);
heap.insert(3);
heap.insert(30);

// console.log(heap.values);

heap.extractMin();
// console.log(heap.values);

 
// --- Start of "numberOfDigits.js" --- 
const numberOfDigits = (num)=>{
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num/10);
    }
    return count;
}

numberOfDigits(789123);
 
// --- Start of "numIdenticalPairs.js" --- 
var numIdenticalPairs = function(nums) {
    let n = nums.length
      , count = 0
      , obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    console.log(obj);
    return count;
};
 
// --- Start of "oddOneBitMan.js" --- 
const oddOneBitMan = (A)=>{
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let count = 0;

        for (let j = 0; j < A.length; j++) {
            if ((A[j] & (1 << i)) > 0) {
                count++;
            }
        }

        let d = count % 3;
        if (d > 0) {
            ans = ans | (1 << i);
        }
    }

    return ans;
}

oddOneBitMan([5, 7, 5, 4, 7, 11, 11, 9, 11, 7, 5, 4, 4]);
 
// --- Start of "reducePolyfill.js" --- 
Array.prototype.myreduce = function(callback, initialVal){
    let accumulator = initialVal || this[0];
    let startInd = initialVal ? 0 : 1;

    for (let i = startInd; i < this.length; i++) {
        accumulator = callback(accumulator,this[i]);
    }
    return accumulator;
}
const arr = [4,2,3,4];
// console.log(arr);
arr.myreduce((acc, val) => acc + val); 
// --- Start of "rotateMatrix.js" --- 
const rotateMatrix = (A)=>{
    let n = A.length;
    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            let temp = A[i][j];
            A[i][j] = A[j][i];
            A[j][i] = temp;
        }
    }


    for (let r = 0; r < n; r++) {
        let i = 0;
        j = n - 1;
        while (i < j) {
            let temp = A[r][i];
            A[r][i] = A[r][j];
            A[r][j] = temp;
            i++; j--;
        }
    }

    return A;
}
rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
 
// --- Start of "Script snippet #1.js" --- 
function pairElement(str) {
    var arr = [];
    for(var i = 0; i < str.length; i++){
         str[i] === 'G' && arr.push(['G','C']);
         str[i] === 'C' && arr.push(['C','G'])
         str[i] === 'A' && arr.push(['A','T'])
         str[i] === 'T' && arr.push(['T','A'])
    }
    return arr;
}

pairElement("GCG"); 
// --- Start of "Script snippet #10.js" --- 
function truthCheck(collection, pre) {
    return collection.every(o=>o.hasOwnProperty(pre));
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male",
    "age": 0
}, {
    "user": "Dipsy",
    "sex": "male",
    "age": 3
}, {
    "user": "Laa-Laa",
    "sex": "female",
    "age": 5
}, {
    "user": "Po",
    "sex": "female",
    "age": 4
}], "age")
 
// --- Start of "Script snippet #11.js" --- 
function addTogether() {
  var arr = Array.from(arguments);
  console.log(arr);
  var check = arr.every(n => typeof n === 'number');
  if(check){
    if(arr.length === 2 ){
      return arr[0]+arr[1];
    } 
    else {
      var x = arr[0];
      return function(y){
        if(typeof y === 'number'){
          return x + y;
        }
        return undefined;
      }
    }
  }
  return undefined;
}

addTogether(2)([4]); 
// --- Start of "Script snippet #12.js" --- 
var Person = function(firstAndLast) {
  // Only change code below this line  
  this.getFirstName = function(){
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function(){
    return firstAndLast.split(' ')[1];
  }
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return this.getFirstName()+' '+this.getLastName();
  };
   this.setFirstName = function(first) {
    // firstAndLast.split(' ')[0] = first;
    firstAndLast = first+' '+ firstAndLast.split(' ')[1];
  };
   this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(' ')[0] +' '+ last;
  };
   this.setFullName = function(firstAndLast) {
    firstAndLast = firstAndLast.split(' ')[0] +' '+firstAndLast.split(' ')[1];
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
bob.getFullName(); 
// --- Start of "Script snippet #13.js" --- 
let regexp = /your regexp/g;

let str = "0 12 -5 123 -18";

alert( str.match(regexp) ); // 0, 12, 123 
// --- Start of "Script snippet #14.js" --- 
function rangeOfNumbers(startNum, endNum) {
   console.log(startNum,endNum);
  return startNum <= endNum ? [startNum].concat(rangeOfNumbers(startNum+1,endNum)) : [];
};

rangeOfNumbers(1,5); 
// --- Start of "Script snippet #15.js" --- 
var numberOfSteps = function(num) {
    if(num == 0) return 0;
   
   return 1 + numberOfSteps(num == 0 ? 0 : num % 2 === 0 ? num / 2 : num--)
};

numberOfSteps(14); 
// --- Start of "Script snippet #16.js" --- 
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var obj = {};
    for (let i = 0; i < magazine.length; i++) {
        if (obj[magazine[i]]) {
            obj[magazine[i]] += 1;
        } else {
            obj[magazine[i]] = 1;
        }
    }
    console.log(obj);
    for(let j = 0; j < ransomNote.length; j++){
        if(obj[ransomNote[j]]){
            obj[ransomNote[j]] -= 1;
        } else {
            return false;
        }
    }
    console.log(obj);
    
        return true;
};

canConstruct('aabs', 'baa');
 
// --- Start of "Script snippet #17.js" --- 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var str = '';
    for (var i = 0; i < (word1.length > word2.length ? word1.length: word2.length); i++) {
        str +=word1[i] ?? '';
        str += word2[i] ?? '';
    }
    return str;
};


mergeAlternately('abcde','pqr'); 
// --- Start of "Script snippet #18.js" --- 
let canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while( i < flowerbed.length && n > 0){
        if(flowerbed[i]){
             i +=2;
        } else {
            if(!flowerbed[i] && !flowerbed[i+1] && !flowerbed[i-1]){
                flowerbed[i] = 1;
                n--;
            } 
                i+=1;
            
        }
    }

    if(n > 0){
        return false;
    }
    return true;
};

canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3); 
// --- Start of "Script snippet #19.js" --- 
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 != str2 + str1) return ''
    let m = str1.length
    let n = str2.length

    let gcd = function (x, y) {
        if (!y) return x
        return gcd(y, x % y)
    }

    let div = gcd (m, n)
    return str1.slice(0, div)
};

gcdOfStrings('ABC','ABCABC'); 
// --- Start of "Script snippet #2.js" --- 
function fearNotLetter(str) {
    var cur = str[0].charCodeAt(0), missed = undefined;
     for(var i = 1; i < str.length; i++){
        if(str[i].charCodeAt(0) - cur !== 1) {
            missed = str[i].charCodeAt(0) - 1;
            break;
        }
        cur = str[i].charCodeAt(0);
    }
    return missed ? String.fromCharCode(missed) : missed;
}

fearNotLetter("abde"); 
// --- Start of "Script snippet #20.js" --- 
var productExceptSelf = function(nums) {
    var output = [];
    var leftMult = 1;
    var rightMult = 1;
    for (var i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    // for (var j=0; j < nums.length; j++) {
    //     output[j] *= leftMult;
    //     leftMult *= nums[j];
    // }
    return output;
};

productExceptSelf([-1,1,0,-3,3]);
 
// --- Start of "Script snippet #21.js" --- 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    let pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

moveZeroes([1,1,0,3,12])
 
// --- Start of "Script snippet #23.js" --- 
var maxArea = function(height) {
    var i = 0
      , j = height.length - 1
      , max = 0;

    while (i < j) {
        max = Math.max((j - 1) * Math.min(height[i], height[j]), max);
        height[i] <= height[j] ? i++ : j--;
    }
    return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
 
// --- Start of "Script snippet #3.js" --- 
function uniteUnique(arr) {
    var test = Array.from(arguments).reduce((a,c)=>{
        return a.concat(c);
    }
    , []);

    var res = [];
    test.forEach(n=>!res.includes(n) && res.push(n))
    return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 
// --- Start of "Script snippet #4.js" --- 
function convertHTML(str) {
    var mapObj = {
       '<':"&lt;",
       '>':"&gt;",
       '&':"&amp;",
       '\'':"&apos;",
       '\"': "&quot;"
    };
  return str.replace(/(\<)|(>)|(&)|(\')|(\")/g, function(matched){
      return mapObj[matched];
    });
}

convertHTML("Dolce's & Gabbana>"); 
// --- Start of "Script snippet #5.js" --- 
function sumFibs(num) {
    var prevNumber = 1;
      var currNumber = 1;
      var result = 0;
      while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
          result += currNumber;
        }
        temp = currNumber;
        currNumber += prevNumber;
        prevNumber = temp;

      }

  return result+1;
//   return arr.filter(n=>n%2!==0).reduce((a,c)=>a+c);
}

sumFibs(4); 
// --- Start of "Script snippet #6.js" --- 
function sumPrimes(num) {
  var res = 0;
  while(num>=2){
    var flag = true;
    for(var j = 2; j <= num-1; j++){
     if(num % j === 0) {
         flag = false;
     };
    }

    if(flag){
        res+=num
    }
    num -= 1;
  }
  return res;
}

sumPrimes(10); 
// --- Start of "Script snippet #7.js" --- 
// function primeUntil(min,num){
//     var res = [];
//     while(num >= min){
//         var flag = true;
//         for(var n = 2; n < num-1; n++){
//             if(num % n === 0) {
//              flag = false;   
//             }
//         }
//         flag && res.push(num);
//         num--;
//     }
//     return res;
// }

// function smallestCommons(arr) {
//   var min = Math.min(...arr), max = Math.max(...arr);
//   var list = Array.from(new Array(max-min + 1),(_,i)=>i+min);
// }

// primeUntil(18,23);
// smallestCommons([23,18]);
// 2,3,5,7,11,13,17,19,23

function gcd(n1,n2){
    var min = Math.min(n1,n2);
    var max = Math.max(n1,n2);

    while(max % min !== 0){
        var rem = max % min;
        max = min;
        min = rem;
    }

    return min;
}

gcd(1071, 462);
function lcm(n1,n2){
    return (n1 * n2)/gcd(n1,n2);
}
lcm(1071,462); 
// --- Start of "Script snippet #8.js" --- 
function dropElements(arr, func) {
  var index = arr.findIndex(e => func(e));
  return arr.slice(index);
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
// --- Start of "Script snippet #9.js" --- 
function steamrollArray(arr,res = []) {
      for(var i = 0; i < arr.length; i++){
          if(typeof arr[i] === 'object' && arr[i].constructor.name === 'Array'){
              steamrollArray(arr[i],res);
          }else {
              res.push(arr[i]);
          }
      }
  return res;
}

steamrollArray([1, [2], [3, [[4]]]]); 
// --- Start of "Script snippet no. 100.js" --- 
const obj = {
    value: 'abc',
    // console.log(this);
    createArrowFn: ()=>{
        console.log(this);
    }
};
obj.createArrowFn();
 
// --- Start of "Script snippet no. 106.js" --- 
function twoPointers(A, B, C) {
    let m = A.length
      , n = B.length;
    let i = 0
      , j = n - 1
      , k = 0
      , l = n - 1
      , min = Infinity, res =[];

    while (i < m && j >= 0) {
        let sum = A[i] + B[j];
        if (Math.abs(sum - C) < Math.abs(min - C) || (Math.abs(sum-C)==Math.abs(min-C) && i<=k && j<=l)) {
            min = sum;
            k = i;
            l = j;
        }

         if (A[i] + B[j] > C) {
            j--;
        } else {
            i++;
        }
    }

    return [A[k], B[l]];
}

twoPointers([1, 2, 3, 4, 5], [2, 4, 6, 8], 9)
 
// --- Start of "Script snippet no. 108.js" --- 
function countValidPairs(A) {
    const n = A.length;
    let s = [];
    let res = 0;

    for (let i = 0; i < n; i++) {
        while (s.length && A[s[s.length - 1]] < A[i]) {
            let j = s.pop();
            res += (i - j);
            console.log(res+"sbcd "+i);
        }
        s.push(i);
    }
    return res;
}

countValidPairs([4,5,6,1,10]); 
// --- Start of "Script snippet no. 125.js" --- 
let A = 4
  , B = [[1, 2, 1], [2, 3, 2], [3, 4, 4], [1, 4, 3]];

let adjList = Array.from({length: A +1},()=>new Array());
// console.log(adjList);
for (let row of B) {
    adjList[row[0]].push([row[1], row[2]]);
    adjList[row[1]].push([row[0], row[2]]);
}

console.log(adjList);
 
// --- Start of "Script snippet no. 126.js" --- 
const binarySearch = (A,B) => {

    let res = [-1, -1];

    let l = 0;
    r = A.length - 1;

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (A[mid] == B && A[mid - 1] != B) {
            res[0] = mid;
        }

        if (A[mid] >= B) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    if (res[0] == -1)
        return res;

    let j = res[0];

    while (j < A.length && A[j] == B) {
        j++;
    }

    if (j < A.length && j !== res[0])
        res[1] = j-1;

    return res;

}

binarySearch([1, 2, 4, 5],5); 
// --- Start of "Script snippet no. 131.js" --- 
function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    x = 20;
    return inner;
}

let closureIn = outer();
closureIn(); 
// --- Start of "Script snippet no. 133.js" --- 
var twoSum = function(nums, target) {
    let res = [], obj = {};

    for(let i = 0; i < nums.length; i++){
        const n = nums[i];
        if(obj[target-n] != undefined){
            res.push(obj[target-n], i);
            break;
        }else {
            obj[n] = i;
        }
    }
    return res;
};

twoSum([2,7,11,15], 9); 
// --- Start of "Script snippet no. 24.js" --- 
var subArrSum = function(A) {
    let i =0; j =1, sum = A[i];

    while(j < A.length){
        if(sum==0){
            return 1;
        }
        sum + = A[j];
        if( sum == 0){
            return 1;
        } else {
            
        }
    }

}

subArrSum([1, 2, 3, 4, 5]);
 
// --- Start of "Script snippet no. 25.js" --- 
const solve = function(A){
        const factorsOfNumber = (A) => {
            let factors = [1];
            for(let i = 2; i*i <= A; i++){
                if(A%i == 0){
                    if(i == A/i){
                        factors.push(i);
                    }else {
                        factors.push(i);
                        factors.push(A/i);
                    }
                }
            }
            return factors;
        }

        if(A == 1) return 0;

    console.log(factorsOfNumber(A));

       return factorsOfNumber(A).reduce((a,c)=>a+c,-A) == A ? 1 : 0;
	};

solve(36); 
// --- Start of "Script snippet no. 26.js" --- 
function rotate(A, B) {
    B = B % (A.length);
    if (B == 0) {
        return A;
    }
    const reverseInRange = (A,s,e)=>{
        let i = s
          , j = e;
        while (i < j) {
            let t = A[i];
            A[i] = A[j];
            A[j] = t;
            i++;
            j--;
        }
    }
    reverseInRange(A, 0, A.length - 1);
    reverseInRange(A, 0, B - 1);
    reverseInRange(A, B, A.length - 1);
    return A;
}

rotate([1, 1, 4, 9, 4, 7, 1], 2);
 
// --- Start of "Script snippet no. 27.js" --- 
var solve = function(A){
        let max = -Infinity, min = Infinity;
        for(let i = 0; i < A.length; i++){
            max = max > A[i] ? max : A[i];
            min = min < A[i] ? min : A[i];
        }
        return max+min;
	};

solve([3,-3,6,8,4,7,8,-2,0]); 
// --- Start of "Script snippet no. 28.js" --- 
function getMax2(A) {
    let max = -Infinity
      , max2 = -Infinity;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max && A[i] > max2) {
            max = A[i];
        } else if (A[i] > max2 && A[i] < max) {
            max2 = A[i];
        }
    }
    return max2;
}

getMax2([11, 15, 9]);
 
// --- Start of "Script snippet no. 29.js" --- 
const rangeSum = function(A, B){
        let res = [];
        let prefixSum = [A[0]];
        for(let i = 1; i < A.length; i++){
            prefixSum[i]= parseInt(prefixSum[i-1]) + parseInt(A[i]);
        }

        for(let j = 0; j< B.length; j++){
            let L = B[j][0], R = B[j][1];
            const qSum = L == 0 ? parseInt(prefixSum[R]) : parseInt(prefixSum[R]) - parseInt(prefixSum[L-1]);
            res.push(qSum)
        }
        return res;
	};

rangeSum([1, 2, 3, 4, 5], [[0, 3], [1, 2]]); 
// --- Start of "Script snippet no. 30.js" --- 
const sumOfEven = (arr)=>{
    const prefSum = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            prefSum[i] = (i > 0 && prefSum[i - 2]) + arr[i];
        } else {
            prefSum[i] = 0;
        }
    }

    return prefSum;
}
;

const sumOfOdd = (arr)=>{
    const prefSum = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            prefSum[i] = (i > 1 && prefSum[i - 2]) + arr[i];
        } else {
            prefSum[i] = 0;
        }
    }

    return prefSum;
}
;

const ePref = sumOfEven([1, 2, 3, 4, 5, 6, 7]);
const oPref = sumOfOdd([1, 2, 3, 4, 5, 6, 7]);
console.info(ePref, oPref);
console.log(ePref[5])


 
// --- Start of "Script snippet no. 31.js" --- 
const solve = function(A) {
    let eqInd = -1
      , n = A.length;
    const prefSum = [A[0]];
    for (let i = 1; i < n; i++) {
        prefSum[i] = prefSum[i - 1] + A[i];
    }

    for (let j = 0; j < n; j++) {
        let leftSum = 0;
        const rightSum = prefSum[n - 1] - prefSum[j];
        if (j > 0) {
            leftSum = prefSum[j - 1];
        }
        if (leftSum == rightSum) {
            eqInd = j;
            break;
        }
    }
    return eqInd;
}

solve([1, 2, 3, 7, 1, 2, 3]);
 
// --- Start of "Script snippet no. 32.js" --- 
function finMaxProfit(A) {
    let n = A.length
      , max = A[n-1], maxProfit = 0;
    for (let i = n-2; i >= 0; i--) {
        max = Math.max(max, A[i]);
        profit = max - A[i];
        maxProfit = Math.max(maxProfit, profit)
        
    }
    console.log(maxProfit);
}

finMaxProfit([1, 4, 5, 2, 4]);
 
// --- Start of "Script snippet no. 33.js" --- 
const solve = (A,B)=>{
    let n = A.length;
    let prefSum = [A[0]]
      , sufSum = [];
    for (let i = 1; i < n; i++) {
        prefSum[i] = prefSum[i - 1] + A[i];
    }

    sufSum[n - 1] = A[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        sufSum[j] = sufSum[j + 1] + A[j];
    }

    let maxSum = Math.max(sufSum[n - B], prefSum[B - 1]);
    for (let k = 1; k < B; k++) {
        maxSum = Math.max(maxSum, prefSum[k - 1] + sufSum[n - (B - k)]);
    }

    return maxSum;

}

solve([2, 3, -1, 4, 2, 1], 4);
 
// --- Start of "Script snippet no. 34.js" --- 
// Subarray with given sum and length

const solve = (A,B,C)=>{
    let n = A.length
      , i = 1;
    let sum = 0;
    for (let j = 0; j < B; j++) {
        sum += A[j];
    }
    if (sum == C)
        return 1;
    while (B < n) {
        sum += A[B] - A[i - 1];
        if (sum == C)
            return 1;
        i++;
        B++;
    }

    return 0;
}

solve([6,3,3,6,7,8,7,3,7], 2, 10);
 
// --- Start of "Script snippet no. 35.js" --- 
const diagonal = (A)=>{
    let n = A.length
      , m = A[0].length
      , res = [];
    for (let c = 0; c < m; c++) {
        let i = 0;
        j = c,
        arr = [];
        while (i < n && j >= 0 - i) {
            arr.push(A[i][j] || 0);
            i++;
            j--;
        }
        res.push(arr);
    }

    for (let r = 1; r < n; r++) {
        let i = r
          , j = m - 1
          , arr = [];
        while (i < n && j >= 0) {
            arr.push(A[i][j] || 0);
            i++;
            j--;
        }
        if (arr.length < n) {
            for (let k = arr.length; k < n; k++) {
                arr[k] = 0;
            }
        }
        res.push(arr);
    }

    return res;

}

diagonal([[2, 3, 6, 7], [2, 3, 4, 5]])
 
// --- Start of "Script snippet no. 43.js" --- 
var numIdenticalPairs = function(nums) {
    let n = nums.length
      , count = 0
      , obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[nums[i]]) {
            count +=  obj[nums[i]];
            obj[nums[i]] += 1;

        } else {
            obj[nums[i]] = 1;
        }
    }
    console.log(obj);
    return count;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
 
// --- Start of "Script snippet no. 44.js" --- 
const palindrome = (S)=>{
    let n = S.length;
    let i = 0
      , j = n - 1;
    while (i < j) {
        if (S[i] !== S[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

palindrome('aba')
 
// --- Start of "Script snippet no. 45.js" --- 
const solve = (A)=>{
    let str = ''
      , n = A.length
      , i = 0;
    while (i < n) {
        if (A.charCodeAt(i) > 97) {
            str = str + (['a', 'e', 'i', 'o', 'u'].includes(A[i]) ? '#' : A[i]);

        }
        i++;
    }
    return str + str;
}

solve("GrNvsMcsyQEiEfzikav")
 
// --- Start of "Script snippet no. 46.js" --- 
const longestPalindrome = (A)=>{
    // let n = A.length
    //   , maxPalLen = 0
    //   , ans = '';
    // const expand = (str,p1,p2)=>{
    //     let res = '';
    //     while (p1 >= 0 && p2 < n && str[p1] == str[p2]) {
    //         res = A.substring(p1, p2 + 1);
    //         p1 -= 1;
    //         p2 += 1;
    //     }
    //     return {
    //         len: p2 - p1 - 1,
    //         val: res
    //     };
    // }
    // // ODD palindrome
    // for (let i = 0; i < n; i++) {
    //     let p1 = i
    //       , p2 = i;
    //     let {len, val} = expand(A, p1, p2);
    //     if (len > maxPalLen) {
    //         maxPalLen = len;
    //         ans = val;
    //     }
    // }

    // // EVEN palindrome
    // for (let i = 0; i < n; i++) {
    //     let p1 = i
    //       , p2 = i + 1;
    //     let {len, val} = expand(A, p1, p2);
    //     if (len > maxPalLen) {
    //         maxPalLen = len;
    //         ans = val;

    //     }
    // }
    // return ans;

    let n = A.length
            , maxPalLen = 0
            , ans = '';
        const expand = (str, p1, p2) => {
            while (p1 >= 0 && p2 < n && str[p1] == str[p2]) {
                p1 -= 1;
                p2 += 1;
            }
            return A.substring(p1 + 1, p2)
        }
        // ODD palindrome
        for (let i = 0; i < n; i++) {
            let p1 = i
                , p2 = i;
            let val = expand(A, p1, p2);
            if (val.length > maxPalLen) {
                maxPalLen = val.length;
                ans = val;
            }
        }

        // EVEN palindrome
        for (let i = 0; i < n; i++) {
            let p1 = i
                , p2 = i + 1;
            let val = expand(A, p1, p2);
            if (val.length > maxPalLen) {
                maxPalLen = val.length;                
                ans = val;
            }
        }
        return ans;

}

longestPalindrome('aaaabaaa');
 
// --- Start of "Script snippet no. 47.js" --- 
var maxProduct = function(nums) {
    
    let [first, second] = [0, 0];
    
    for( const number of nums){
        
        if( number > first ){
            [first, second] = [number, first];
            
        }else if( number > second ){
            second = number;
        }
    } 
    
    return ( first - 1 ) * ( second - 1 );
    
};

maxProduct([3,4,5,2]); 
// --- Start of "Script snippet no. 49.js" --- 
var sumOfUnique = function(nums) {
    // let obj = {};
    // for (let n of nums) {
    //     if (obj[n]) {
    //         obj[n] += 1;
    //     } else {
    //         obj[n] = 1;
    //     }
    // }
    // let sum = 0;
    // for (let o in obj) {
    //     if (obj[o] == 1) {
    //         sum += Number(o);
    //     }
    // }
    // return sum;
    let obj = {}
      , sum = 0;
    for (let n of nums) {
        if (obj[n] == 1) {
            sum -= n;
            obj[n] = -1;
            
        } else if(!obj[n]) {
            obj[n] = 1;
            sum += n;
        }
    }

    return sum;
};

sumOfUnique([1,1,1,1,1]);
 
// --- Start of "Script snippet no. 50.js" --- 
const amazingSubArrays = (A)=>{
    let n = A.length
      , count = 0;
    for (let i = 0; i < n; i++) {
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(A[i])) {
            count += (n - i)
        }
    }
    return count % 10003;
}

amazingSubArrays('ABEC');
 
// --- Start of "Script snippet no. 51.js" --- 
const longestCommonPrefix = (A)=>{
    const n = A.length;
    if (n == 1)
        return A[0];
    let res = '';
    const calMaxMatch = (a,b)=>{
        let match = ''
          , j = 0;
        while (a[j] == b[j]) {
            match += a[j];
            j++;
        }
        return match;
    }
    res = calMaxMatch(A[0], A[1]);
    if (n == 2) {
        return res;
    }
    for (let i = 2; i < n; i++) {
        if (A[i] == '') {
            return '';
        }
        res = calMaxMatch(A[i], res);

    }
    return res;
}

longestCommonPrefix(["abab", "abab", "ababcd", ""]);
 
// --- Start of "Script snippet no. 52.js" --- 
const majorityElement = (A)=>{
    let n = A.length
      , majority = A[0]
      , count = 1;
    for (let i = 1; i < n; i++) {
        if (count == 0) {
            majority = A[i];
            count = 1;
        }
        else if (A[i] == majority) {
            count++;
        } else {
            count--;
            
        }
    }
    let freq = 0;
    for (let j = 0; j < n; j++) {
        if (majority == A[j]) {
            freq++;
        }
    }

    if (freq > n / 2)
        return parseInt(majority);
}

majorityElement([1, 3, 5, 3, 3, 3, 3, 2, 1]);
 
// --- Start of "Script snippet no. 53.js" --- 
const colorful = (A)=>{
    let map = {}
      , arr = [];
    while (A !== 0) {
        let rem = A % 10;
        arr.push(rem);
        A = Math.floor(A / 10);
    }

    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let mul = 1;
            for (let k = i; k <= j; k++) {
                mul *= arr[k];
            }
            if (map[mul]) {
                return 0;
            } else {
                map[mul] = 1;
            }

        }
    }

    return 1;
}

colorful(123);
 
// --- Start of "Script snippet no. 54.js" --- 
const contSumQuery = (A,B)=>{
    let n = B.length
      , res = new Array(A).fill(0);
    for (let i = 0; i < n; i++) {
        let L = B[i][0]
          , R = B[i][1]
          , val = B[i][2];
        res[L] += val;
        if (R + 1 < A)
            res[R + 1] -= val;
    }
    console.log(res);
    let sum = 0;
    for (let j = 0; j < A; j++) {
        sum += res[j];
        res[j] = sum;
    }
    return res;
}

contSumQuery(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]]);
 
// --- Start of "Script snippet no. 55.js" --- 
const plusOne = (A)=>{
    let n = A.length
      , c = 0
      , res = [];

    let firstNum = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < n; j++) {
        if (A[j] !== 0) {
            firstNum = j;
            break;
        }
    }
    c = Math.floor((A[n - 1] + 1) / 10);
    res.push((A[n - 1] + 1) % 10);
    for (let i = n - 2; i >= firstNum; i--) {
        let s = A[i] + c;
        if (s > 9) {
            c = Math.floor(s / 10);
            res.push(s % 10);
        } else if (i != 0) {
            c = 0;
            res.push(s);
        } else if (i == 0 && s > 0) {
            res.push(s);
            c = 0;

        }
    }

    if (c > 0)
        res.push(c);
    return res.reverse();
}

plusOne([0,0,4,4,6,0,9,6,5,1]);
 
// --- Start of "Script snippet no. 56.js" --- 
const findElem2D = (A,B)=>{
    let n = A.length
      , m = A[0].length
      , ans = Infinity;
    let i = 0
      , j = m - 1;
    while (j >= 0 && i < n) {
        let elem = A[i][j];
        if (elem == B) {
            ans = Math.min(ans, (i + 1) * 1009 + (j + 1));
            j--;
        } else if (elem < B) {
            i++;
        } else if (elem > B) {
            j--;
        }
    }
    return ans == Infinity ? -1 : ans;
}

findElem2D([[2, 8, 8, 8], [2, 8, 8, 8], [2, 8, 8, 8]], 8);
 
// --- Start of "Script snippet no. 57.js" --- 
const merge = (A)=>{
    let s = A[0][0]
      , e = A[0][1]
      , ans = [];
    for (let i = 1; i < A.length; i++) {
        if (A[i][0] <= e) {
            s = Math.min(s, A[i][0]);
            e = Math.max(e, A[i][1]);
        } else {
            ans.push([s, e]);
            s = A[i][0];
            e = A[i][1];
        }
    }
    ans.push([s, e]);
    return ans;
}

merge([[1, 10], [2, 9], [3, 8], [4, 7], [5, 6], [6, 6]])
 
// --- Start of "Script snippet no. 58.js" --- 
const generateMatrix = (A)=>{
    let i = 0
      , j = 0
      , count = 1;
    const ans = new Array(A).fill().map(()=>new Array(A).fill(0));
    while (A > 1) {
        for (let k = 1; k < A; k++) {
            ans[i][j] = count++;
            j++;
        }
       
        for (let k = 1; k < A; k++) {
            ans[i][j] = count++;
            i++;
        }
       
        for (let k = 1; k < A; k++) {
            ans[i][j] = count++;
            j--;
        }
       
        for (let k = 1; k < A; k++) {
            ans[i][j] = count++;
            i--;
        }

        A = A - 2;
        i++;
        j++;
    }
    if (A == 1)
        ans[i][j] = count++;

    return ans;

}

generateMatrix(5);
 
// --- Start of "Script snippet no. 59.js" --- 
const unsetXBits = (A,B)=>{
    for (let i = 0; i < B; i++) {
        if (A & (BigInt(1) << BigInt(i)) > 0) {
            A -= A | (BigInt(1) << BigInt(i))
        }
    }
    return A;
}

unsetXBits(25, 3)
 
// --- Start of "Script snippet no. 60.js" --- 
const factorial = (num) =>{
    if(num == 1) return num;
    return num * factorial(num-1);
}

factorial(5); 
// --- Start of "Script snippet no. 61.js" --- 
const mergeIntervals = (intervals,new_interval)=>{
    let st = intervals[0][0]
      , end = intervals[0][1]
      , ans = []
      , n = intervals.length;
    for (let i = 0; i < n; i++) {
        if (intervals[i][1] < new_interval[0]) {
            ans.push(intervals[i]);
        } else if (intervals[i][0] > new_interval[1]) {
            ans.push(new_interval);
            for (j = i; j < n; j++) {
                ans.push(intervals[j]);
            }
            return ans;
        } else {
            new_interval[0] = Math.min(new_interval[0], intervals[i][0]);
            new_interval[1] = Math.max(new_interval[1], intervals[i][1]);
        }
    }
    ans.push(new_interval);
    return ans;
}

mergeIntervals([[1,2],[3,6]], [8, 10])
 
// --- Start of "Script snippet no. 62.js" --- 
const foo = (x,y)=>{
    if (y == 0)
        return 1;
    return bar(x, foo(x, y - 1));
}
const bar = (x,y)=>{
    if (y == 0)
        return 0;
    return (x + bar(x, y - 1));
}
foo(3, 5);
 
// --- Start of "Script snippet no. 63.js" --- 
const solve = (A)=>{
    let ans = [];
    if (A <= 1) {
        ans.concat([1]);
    } else {
        ans.concat(solve(A - 1));
    }
    return ans;
}

solve(5);
 
// --- Start of "Script snippet no. 64.js" --- 
const fun = (x,n)=>{
    if (n == 0)
        return 1;
    else if (n % 2 == 0)
        return fun(x * x, n / 2);
    else
        return x * fun(x * x, (n - 1) / 2);
}
let ans = fun(2, 10);
console.log(ans);
 
// --- Start of "Script snippet no. 66.js" --- 
const queryArr = (A,B)=>{
    let n = B.length
      , res = new Array(A).fill(0);
    for (let i = 0; i < n; i++) {
        let L = B[i][0]
          , R = B[i][1]
          , val = B[i][2];
        res[L - 1] += val;
        if (R < A)
            res[R] -= val;
    }
    console.log(res);
    let sum = 0;
    for (let j = 0; j < A; j++) {
        sum += res[j];
        res[j] = sum;
    }
    return res;
}

queryArr(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]])
 
// --- Start of "Script snippet no. 68.js" --- 
const convertToTitle = function(A) {
    let ans = '';
    while (A > 0) {
        let rem = (--A) % 26;
        let ch = String.fromCharCode("A".charCodeAt(0) + rem);
        ans = ch + ans;
        A = Math.floor(A / 26);
    }

    return ans;
}

convertToTitle(943566); 
// --- Start of "Script snippet no. 69.js" --- 
// const titleToNumber = function(A) {
//     let res = 0
//       , n = A.length
//       , i = n - 1;
//     while (i >= 0) {
//         let c = A[i];
//         let v = c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
//         res = 26 * res + v;
//         i--;
//     }
//     return res;
// }

const titleToNumber = function(A) {
    let res = 0
      , n = A.length
      , i = n - 1;
    while (i >= 0) {
        let c = A[i];
        let v = c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        res += Math.pow(26, n - 1 - i) * v;
        i--;
    }
    return res;
}

titleToNumber('ABC');
 
// --- Start of "Script snippet no. 70.js" --- 
const pascalTriangle = function(A) {
    let res = new Array(A).fill(0).map(el=>new Array(A).fill(0));
    res[0][0] = 1;
    for (let i = 1; i < A; i++) {
        res[i][0] = 1;
        res[i][i] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
    }

    return res;
}

pascalTriangle(5);
 
// --- Start of "Script snippet no. 71.js" --- 
const findAllPrimes = function(A) {
    let arr = new Array(A + 1).fill(true)
      , res = [];
    arr[0] = arr[1] = false;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i]) {
            for (let j = i*i; j < arr.length; j = j + i) {
                arr[j] = false;
            }
        }
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i]) {
            res.push(i);
        }
    }
    return res;
};
findAllPrimes(7);
 
// --- Start of "Script snippet no. 72.js" --- 
const primesum = function(A) {
    let n = Math.floor(A / 2);
    let i = 2
      , a = null
      , b = null;
    while (i < n) {
        if (n % i == 0) {
            i++;
        } else {
            a = i;
            b = n - i;
            break;
        }
    }
    return [a, b];
}
primesum(36);
 
// --- Start of "Script snippet no. 73.js" --- 
const primeSum = function(A) {
    let arr = new Array(A + 1).fill(true);

    for (let i = 2; i <= A + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= A + 1; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let k = 2; k <= A + 1; k++) {
        if (arr[k]) {
            let num = A - k;
            if (arr[num]) {
                return [k, num];
            }
        }
    }

}

primeSum(36);
 
// --- Start of "Script snippet no. 74.js" --- 
const getspf = function(A) {
    let a = new Array(A + 1);
    for (let i = 0; i <= A; i++) {
        a[i] = i;
    }

    for (let j = 2; j*j < a.length; j++) {
        if (a[j] == j) {
            for (k = j * j; k < a.length; k += j) {
                if (a[k] == k) {
                    a[k] = j;
                }
            }
        }
    }
    return a;
}

const getFactors = function(A) {
    let n = A.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, A[i]);
    }

    let spfArr = getspf(max)
      , res = new Array(n);

    for (let i = 0; i < n; i++) {
        let ans = 1
          , num = A[i];
        while (num > 1) {
            let spf = spfArr[num];
            let count = 0;
            while (num % spf == 0) {
                count++;
                num = num / spf;
            }
            ans *= (count + 1);
        }
        res[i] = ans;
    }

    return res;
}

getFactors([8,9,10]);
 
// --- Start of "Script snippet no. 75.js" --- 
const luckyNumbers = function(A) {

    let a = new Array(A + 1).fill(0), res = 0;

    for (let j = 2; j  < a.length; j++) {
        if (a[j] == 0) {
            for (k = j; k < a.length; k+=j) {
                a[k] += 1;
            }
        }
    }
    for(let i = 0; i < a.length; i++){
        if(a[i] > 1){
            res++;
        }
    }
    return res;
}

luckyNumbers(12);
 
// --- Start of "Script snippet no. 77.js" --- 
const pow = function(A, B, C) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.

    if (A == 0)
        return 0;
    if (B == 0) {
        return 1;
    }
    let p = pow(A, Math.floor(B / 2), C);
    if (B % 2) {
        return ((p * p) % C * (A % C)) % C;
    } else {
        return (p * p) % C;
    }
}

// pow(71045970, 41535484, 64735492);
pow(104, 31, 11);
 
// --- Start of "Script snippet no. 79.js" --- 
const kthEasy = function(A, B) {
    let recr = (A,B)=>{
        if (A == 1) {
            let arr = [];
            arr.push(0);
            return arr;
        }
        let rans = recr(A - 1, B);
        let ans = [];
        for (let i = 0; i < rans.length; i++) {
            let v = rans[i];
            if (v == 0) {
                ans.push(0);
                ans.push(1);
            } else {
                ans.push(1);
                ans.push(0);
            }
        }
        return ans;
    }
    return recr(A, B)[B];
}

kthEasy(4, 4);
 
// --- Start of "Script snippet no. 81.js" --- 
const sum = function(A) {
    if (A < 10) {
        return A;
    }
    let s = 0;
    while (A != 0) {
        s += A % 10;
        A = Math.floor(A / 10);
    }
    return sum(s);
}

sum(83557);
 
// --- Start of "Script snippet no. 82.js" --- 
const exact2Prime = function(A) {
    let a = new Array(A + 1).fill(0)
      , res = 0;

    for (let j = 2; j <= A; j++) {
        if (a[j] == 0) {
            for (k = j; k < a.length; k += j) {
                a[k] += 1;
            }
        }
    }
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 2) {
            res++;
        }
    }
    return res;

}

exact2Prime(8);
 
// --- Start of "Script snippet no. 83.js" --- 
let A = [2, 5, 9, 2, 8]
  , obj = {}
  , n = A.length;
for (let i = 0; i < n; i++) {
    if (obj[i]) {
        obj[i] += 1;
    } else {
        obj[i] = 1;
    }
}
console.log(A, obj);
 
// --- Start of "Script snippet no. 84.js" --- 
let firstRepeat = function(A) {
    let obj = {}
      , minInd = -1
      , n = A.length;
    for (let i = 0; i < n; i++) {
        if (obj[A[i]] >= 0) {
            if (minInd == -1) {
                minInd = obj[A[i]];
            } else {
                minInd = Math.min(obj[A[i]], minInd);
            }
        } else {
            obj[A[i]] = i;
        }
    }
    return minInd > -1 ? A[minInd] : -1;
}
firstRepeat([8,15,1,10,5,19,19,3,5,6,6,2,8,2,12,16,3]);
 
// --- Start of "Script snippet no. 85.js" --- 
const subArrSum = function(A, B) {
    let n = A.length
      , sum = 0
      , count = 0
      , obj = {};
    for (let i = 0; i < n; i++) {
        sum += A[i];

        let x = sum
          , y = x - B;
    
        if (y == 0) {
            count++;
        } 
        if (obj[y]) {
            count+=obj[y];
        }
        obj[x] = (obj[x] || 0) + 1;
    }
    return count;
}

// subArrSum([1, 0, 1], 1);
subArrSum([0, 0, 0], 0);
 
// --- Start of "Script snippet no. 87.js" --- 
let a = 3, b = 6;

while(a <= b){
    a++;
    console.log(a);
    if(a == b){
        console.log('yes');
    }
} 
// --- Start of "Script snippet no. 88.js" --- 
const binaryNonDuplicate = function(A) {
    let n = A.length
      , l = 0
      , r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if ((mid == 0 || (A[mid - 1] !== A[mid])) && (mid == n - 1 || (A[mid + 1] !== A[mid]))) {
            return A[mid];
        }
        if (mid == 0 || A[mid - 1] !== A[mid]) {
            if (mid % 2 == 0) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            if (mid % 2 == 0) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
}

binaryNonDuplicate([1, 1, 2, 2, 3]);
 
// --- Start of "Script snippet no. 89.js" --- 
const binarySerach = function(A, B) {
    let n = A.length
      , l = 0
      , r = n - 1;
    let mid = Math.floor((l + r) / 2);
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (A[mid] == B && (mid == 0 || A[mid - 1] !== B)) {
            return mid;
        }

        if (A[mid] > B) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    if (A[mid] > B) {
        return mid - 1;
    } else {
        return mid + 1;
    }
}

binarySerach([1, 4, 8, 10, 14, 16, 20], 12);
 
// --- Start of "Script snippet no. 90.js" --- 
const isPalindrome = (str)=>{
    // let s = str.split('').reverse('').join('');
    if (str.length == 1)
        return true;
    if (str.length == 2)
        return str[0] == str[1] ? true : false;
    if (str[0] == str.slice(-1))
        return isPalindrome(str.slice(1, -1));
    return false;
}

// isPalindrome('madam');
isPalindrome('1001');

// isPalindrome('');

 
// --- Start of "Script snippet no. 91.js" --- 
const subset = function(A) {
    const res = [];
    const perm = (arr)=>{
        if (arr.length === A.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < A.length; i++) {
            if (!arr.includes(A[i])) {
                arr.push(A[i]);
                perm(arr);
                arr.pop(A[i]);
            }
        }
    }
    perm([]);
    return res;
}

subset([1,2,3]);
 
// --- Start of "Script snippet no. 92.js" --- 
const findPeak = function(A) {
    let n = A.length
      , l = 0
      , r = n - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);

        if ((m == 0 && A[m + 1] < A[m]) || (m == n - 1 && A[m - 1] < A[m]) || (A[m] > A[m + 1] && A[m] > A[m - 1])) {
            return A[m];
        }

        if (m == 0 && A[m] < A[m + 1]) {
            l = m + 1;
        } else if (m == n - 1 && A[m] < A[m - 1]) {
            r = m - 1;
        } else if (A[m] > A[m - 1] && A[m] < A[m + 1]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
}

findPeak([1,1000000000,1000000000]);
 
// --- Start of "Script snippet no. 93.js" --- 
const paint = function(A, B, C) {
    let n = C.length
      , max = Number.MIN_SAFE_INTEGER
      , sum = 0
      , mod = Math.pow(10, 7) + 3;
    let minPainters = (m,C)=>{
        let count = 1
          , p_time = B
          , b_time = 0;
        for (let i = 0; i < n; i++) {
            b_time = C[i] * m;
            if (p_time >= b_time) {
                p_time -= b_time;
            } else {
                count++;
                p_time = m - b_time;
            }
        }
        return count;
    }
    for (let i = 0; i < n; i++) {
        // console.log(C[i])
        max = Math.max(max, C[i]);
        sum += C[i];
    }
    let l = max
      , r = sum;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let c = minPainters(m, C)
          , c1 = minPainters(m - 1, C);
        // console.log(A, c, c1);
        if (c == A && c1 > A) {
            console.log('test' + m);
        }

        if (c <= A) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
}

paint(4,10, [884,228,442,889]);
 
// --- Start of "Script snippet no. 94.js" --- 
const subArrSum = function(A, B) {
    let i = 0
      , j = 0
      , n = A.length
      , sum = A[0];
    if (sum == B)
        return [0, 0];
    while (j < n) {
        if (sum == B)
            return [i + 1, j + 1];
        if (sum < B) {
            j++;
            if (j == n)
                return -1;
            sum += A[j];
        } else {
            sum -= A[i];
            i++;
        }
    }
    return -1;
}

subArrSum([5, 10, 20, 100, 105], 110);
 
// --- Start of "Script snippet no. 95.js" --- 
const solve = function(A, B, C) {
    let res = Infinity;
    let bsearch = (A,M)=>{
        let ans = -1;
        let low = 0;
        let high = B - 1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (A[mid] < M) {
                low = mid + 1;
            } else {
                ans = mid;
                high = mid - 1;
            }
        }

        return ans == -1 ? low - 1 : ans;
    }
    // Sorting the matrix
    for (let i = 0; i < A; i++) {
        C[i].sort((a,b)=>a - b);
    }

    for (let i = 0; i < A - 1; i++) {
        let a1 = C[i]
          , a2 = C[i + 1];
        let num = 0;
        for (let j = 0; j < B; j++) {
            num = bsearch(a2, a1[j]);
            if (num != B) {
                res = Math.min(res, Math.abs(a1[j] - a2[num]));
            }
            if (num != 0) {
                res = Math.min(res, Math.abs(a1[j] - a2[num - 1]));
            }
        }
    }
    return res;
}

solve(3, 2, [[7, 3], [2, 1], [4, 9]])
 
// --- Start of "Script snippet no. 97.js" --- 
function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}
console.log(factorial(5)); //120 
// --- Start of "Script snippet no. 98.js" --- 
function minBy(array, iteratee) {
  let res, computed;
  for (let i = 0; i < array.length; i++) {
    let current = iteratee(array(i));
    console.log(array[i],current);
    if (current != null && (computed === undefined || current < computed)) {
      computed = current;
      res = array[i];
    }
  }
  return res;
}

minBy([{ n: 1 }], (o) => o.n)); 
// --- Start of "Script snippet no. 99.js" --- 
// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};
// const anim = new Animal('Test');
// anim.makeSound();

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
 
// --- Start of "selectionSort.js" --- 
const selectionSort = (A,B)=>{
    for (let i = 0; i < B; i++) {
        // finding the minimum element from the remaining array
        let mn = Number.MAX_SAFE_INTEGER;
        let id = i;
        for (let j = i; j < A.length; j++) {
            if (mn > A[j])
                id = j;
            mn = Math.min(mn, A[j]);
        }
        [A[id],A[i]] = [A[i], A[id]];
    }
    console.log(A);
    return A[B - 1];

}

selectionSort([8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92], 9);
 
// --- Start of "solveMinSwaps.js" --- 
const solveMinSwaps = (A,B)=>{
    let n = A.length
      , count = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] <= B) {
            count++;
        }
    }
    let minSwaps = n
      , minCount = 0;
    for (let j = 0; j < count; j++) {
        if (A[j] >= B) {
            minCount += 1;
        }
    }
    minSwaps = Math.min(minSwaps, minCount);
    let k = 1
      , tCount = minSwaps;
    while (k < n - count) {
        if (A[count + k - 1] >= B) {
            tCount++;
        }
        if(A[k-1]>=B){
            tCount--;
        }
        
        minSwaps = Math.min(minSwaps, tCount);
        k++;
    }

    return minSwaps;
}

solveMinSwaps([12, 12, 10, 3, 14, 10, 5], 8)
 
// --- Start of "solveNobleGreater.js" --- 
const solveNobleGreater = (A)=>{
    let n = A.length;
    A = A.sort((a,b)=>b - a);
    let gCount = 0;
    let i = 1, nCount = 1;
    if(A[0] == 0) return 1;
    while (i < n) {
        if (A[i] !== A[i - 1]) {
            gCount += nCount;
            nCount = 1;
        } else {
            nCount++;
        }
        if (gCount == A[i]) {
            return 1;
        }
        i++;
    }
    return -1;

}

solveNobleGreater([-4,-2,0,-1,-6]);
 
// --- Start of "Subsets II.js" --- 
const subsetsWithDup = (A)=>{
    const result = [];
    A.sort((a,b)=>a - b);
    // Sort the array for non-descending order

    const backtrack = (start,current)=>{
        result.push([...current]);

        for (let i = start; i < A.length; i++) {
            // Skip duplicates
            if (i > start && A[i] === A[i - 1])
                continue;
            current.push(A[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    ;

    backtrack(0, []);
    return result;
}


subsetsWithDup([1,2,2]); 
// --- Start of "sumOfDigits.js" --- 
const sumOfDigits = (A)=>{
    if (A == 0)
        return 0;
    let d = A % 10;
    return d + sumOfDigits(Math.floor(A / 10));
}

sumOfDigits(123);
 
// --- Start of "sumOfEvenElems.js" --- 
const sumOfEvenElems = (A,Q)=>{
    let n = A.length;
    let psum = new Array(A.length).fill(0);

    for (let i = 0; i < n; i++) {
        if (A[i] % 2 == 0) {
            if (i == 0) {
                psum[i] = A[i];
            } else {
                psum[i] = psum[i - 1] + A[i];
            }
        } else {
            if (i == 0) {
                psum[i] = 0;
            } else {
                psum[i] = psum[i - 1];
            }
        }
    }

    let ans = [];
    for (let i = 0; i < Q.length; i++) {
        let L = Q[i][0]
          , R = Q[i][1];
        if (L == 0) {
            ans.push(psum[R])
        } else {
            ans.push(psum[R] - psum[L - 1]);
        }
    }

    return ans;
}

sumOfEvenElems([2, 4, 3, 7, 9, 8, 6, 3, 4, 9], [[0, 3], [3, 7]]);
// Given ar[N] elements and Q queries.
// For each query given L & R calculate print sum of even elems in given range [L R].
 
// --- Start of "sumOfSubArrCF.js" --- 
const sumOfSubArrCF = (A)=>{
    let n = A.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += A[j];
            ans += sum;
        }
    }

    return ans;
}

sumOfSubArrCF([1, 2, 3, 4]);
 
// --- Start of "sumOfSubArrCont.js" --- 
const sumOfSubArrCont = (A)=>{
    let n = A.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let cont = (i + 1) * (n - i);
        ans += (cont * A[i])
    }

    return ans;
}

sumOfSubArrCont([1, 2, 3, 4]);
 
// --- Start of "sumToNRecursion.js" --- 
const sumN = (N)=>{
    if (N == 1)
        return 1;
    return N + sumN(N - 1);
}

sumN(5);
 
