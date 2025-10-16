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
 

//sorting according to array elemts square

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } 
      else if (sum < 0) {
        left++;
      } 
      else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
