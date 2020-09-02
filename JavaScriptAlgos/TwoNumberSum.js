// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    for (let j = 1; j < array.length; j++) {
      let nextNum = array[j];
      if (currentNum + nextNum === targetSum && currentNum != nextNum) {
        return [currentNum, nextNum];
      }
    }
  }

  return [];
}

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {};

  for (let num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}
