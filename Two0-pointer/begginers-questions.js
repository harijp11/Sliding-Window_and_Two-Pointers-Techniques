//palidrom
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


//reverse array/string

function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
    left++;
    right--;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4])); // [4,3,2,1]


//pair with target sum
function hasPairWithSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}

console.log(hasPairWithSum([1,2,3,4,6], 6)); // [2,4]
