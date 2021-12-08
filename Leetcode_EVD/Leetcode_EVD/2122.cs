using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD
{
    class _2122
    {

        public int PurchasePlans(int[] nums, int target)
        {

            int planCount = 0;

            int MOD = 1000000007;

            Array.Sort(nums);

            int left = 0;
            int right = nums.Length - 1;

            while (left < right)
            {
                if (nums[left] + nums[right] > target)
                {
                    right--;
                }
                else {
                    planCount = (planCount + (right - left)) % MOD;
                    left++;
                }
            }

            return planCount;

        }

    }
}
