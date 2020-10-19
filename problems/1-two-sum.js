/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
  const complimentMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complimentNum = complimentMap[currentNum];
      
    if (complimentNum >= 0) {
      return [complimentNum, i]
    }
      
    complimentMap[target - currentNum] = i;
  }
};