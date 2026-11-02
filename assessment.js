
//1
var staircase = function(n) {
   let rows = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    rows.push(spaces + hashes);
  }
  return rows.join("\n");
};


console.log(staircase(4));

//2
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
  return grades.map(grade => {
    if (grade < 38) return grade;
    let nextMultiple = Math.ceil(grade / 5) * 5;
    let diff = nextMultiple - grade;
    return diff < 3 ? nextMultiple : grade;
  });
};

console.log(gradingStudents([73, 67, 38, 33]));


//3
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
  let period = s.slice(-2);          // "AM" or  "PM"
  let timePart = s.slice(0, -2);     // "07:05:45"
  let [hour, minute, second] = timePart.split(":").map(Number);

  if (period === "AM") {
    if (hour === 12) hour = 0;       
  } else {                            
    if (hour !== 12) hour += 12;     
  }

  let hh = String(hour).padStart(2, "0");
  let mm = String(minute).padStart(2, "0");
  let ss = String(second).padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
};

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:30:45PM"));

//4

/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
};

console.log(repeatStr(3, "ha"));
console.log(repeatStr(0, "hello"));
console.log(repeatStr(4, "a"));

//5
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
  return str.split("").reverse().join("");
};

console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));

//6
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, 0, -5]));


//7
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8));
console.log(summation(1));



//8
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
  return b ? "true" : "false";
};

console.log(booleanToString(true));
console.log(booleanToString(false));

//9
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));


//10
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));

//11
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > max) max = sum;
  }
  return max;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));


//12
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

let arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1), arr1.slice(0, 2));

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr2), arr2.slice(0, 5));

//13

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) return true;
    seen.add(nums[i]);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));


//14
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
  let k = 0; // non-zero রাখার জায়গা
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  while (k < nums.length) {
    nums[k] = 0;
    k++;
  }
};

let a1 = [0, 1, 0, 3, 12];
moveZeroes(a1);
console.log(a1);

let a2 = [0, 0, 1];
moveZeroes(a2);
console.log(a2);


//15

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;        // nums1-এর শেষ valid
  let j = n - 1;        // nums2-এর শেষ
  let k = m + n - 1;    // nums1-এর একদম শেষ

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

let n1 = [1, 2, 3, 0, 0, 0];
merge(n1, 3, [2, 5, 6], 3);
console.log(n1);

let n2 = [1];
merge(n2, 1, [], 0);
console.log(n2);

let n3 = [0];
merge(n3, 0, [1], 1);
console.log(n3);

//16

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // duplicate fix skip
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));


//17
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9, 9]));


//18
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1);

let s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2);


//19

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;   // trailing space skip

  let count = 0;
  while (i >= 0 && s[i] !== " ") {      // শেষ শব্দ গোনা
    count++;
    i--;
  }
  return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));


//20

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return prefix;
      }
    }
    prefix += ch;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));