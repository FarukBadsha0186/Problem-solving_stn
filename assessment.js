
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