using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array/
    /// </summary>
    class _1462
    {

        public int MaxProduct(int[] nums)
        {

            // Way1
            // Array.Sort(nums);
            // return (nums[nums.Length - 2] - 1) * (nums[nums.Length - 1] - 1);

            // Way2
            // int max1 = 0;
            // int max2 = 0;
            // for(int i = 0; i < nums.Length; i++)
            // {
            //     if(nums[i] > max1)
            //     {
            //         max2 = max1;
            //         max1 = nums[i];
            //     }
            //     else if(nums[i] > max2)
            //     {
            //         max2 = nums[i];
            //     }
            // }

            // return (max1 - 1) * (max2 - 1);

            // Way3
            int tmp = 0;
            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = 0; j < nums.Length - 1; j++)
                {
                    if (nums[i] > nums[j + 1])
                    {
                        tmp = nums[i];
                        nums[i] = nums[j + 1];
                        nums[j + 1] = tmp;
                    }
                }
            }
            return (nums[nums.Length - 2] - 1) * (nums[nums.Length - 1] - 1);

        }

    }
}
