/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {

    var max = 0;
    for(var i = 1; i < nums.length; i++)
    {
        max = Math.max(nums[i-1], nums[i] + nums[i-1]);
    }

    return max;
};