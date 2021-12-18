/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 将nums2填充至num1末尾
  nums1.splice(m, nums1.length - m, ...nums2)
  // num1排序
  nums1.sort((a, b) => a - b);
};

var tmp1 = [1, 2, 3, 0, 0, 0];
var l1 = 3;
var tmp2 = [2, 5, 6];
var l2 = 3;
merge(tmp1, l1, tmp2, l2);
console.log(tmp1);