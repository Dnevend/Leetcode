/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 思路：从末尾开始进行比较替换
// 未成功
var merge = function (nums1, m, nums2, n) {
  var len = m + n;
  for (var i = n - 1; i >= 0; i--) {
    if (nums2[i] >= nums1[len - i - 2]) {
      nums1[len - i - 1] = nums2[i];
    } else {
      swich(nums1, len - i - 2, nums2[i]);
    }
  }
};

var swich = function (nums, index, value) {
  console.log(nums);
  for (var i = index - 1; i > 0; i--) {
    if (value >= nums[i] && i > -1) {
      nums[i + 2] = nums[i + 1];
      nums[i + 1] = value;
      return;
    } else {
      nums[i + 2] = nums[i + 1];
      nums[i + 1] = nums[i];
      swich(nums, i, value);
      return;
    }
  }
};

var tmp1 = [1, 2, 3, 0, 0, 0];
var l1 = 3;
var tmp2 = [2, 5, 6];
var l2 = 3;
merge(tmp1, l1, tmp2, l2);
