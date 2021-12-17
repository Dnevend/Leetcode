using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
    /// 442. 数组中重复的数据
    /// </summary>
    class _442
    {

        public IList<int> FindDuplicates(int[] nums)
        {
            Dictionary<int, int> d = new Dictionary<int, int>();
            for (int i = 0; i < nums.Length; i++)
            {
                if (d.ContainsKey(nums[i]))
                {
                    if (d[nums[i]]++ > 2)
                    {
                        d.Remove(nums[i]);
                    }
                }
                else
                {
                    d.Add(nums[i], 1);
                }
            }
            return d.Where(dd => dd.Value == 2).Select(ddd => ddd.Key).ToArray();
        }

    }
}
