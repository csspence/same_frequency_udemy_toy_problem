/*
Udemy JavaScript Algorithms and Data Structures Masterclass

Write a function called sameFrequency.  Given two positive integers, find
out if the two numbers have the same frequency of digits.

Your solution must have the following complexities:
Time: O(N)
Same Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578,5879385) // true
sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();
  let numObj = {};
  if(numStr1.length !== numStr2.length) {
    return false;
  }
  for(let i = 0; i < numStr1.length; i++) {
    if(numObj[numStr1[i]] === undefined) {
      numObj[numStr1[i]] = 1;
    } else {
      numObj[numStr1[i]]++
    }
  }
  for(let i = 0; i < numStr2.length; i++) {
    if(numObj[numStr2[i]] === undefined || numObj[numStr2[i]] === 0) {
      return false;
    }
    if(numObj[numStr2[i]] > 1) {
      numObj[numStr2[i]]--;
    }
  }

  return true;
}

