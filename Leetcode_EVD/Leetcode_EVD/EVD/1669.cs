using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/richest-customer-wealth/
    /// </summary>
    class _1669
    {
    }

    public class Solution
    {
        public int MaximumWealth(int[][] accounts)
        {

            int max = 0;
            int tmp;
            for (var i = 0; i < accounts.Length; i++)
            {
                tmp = 0;
                for (var j = 0; j < accounts[i].Length; j++)
                {
                    tmp += accounts[i][j];
                }
                if (tmp > max)
                {
                    max = tmp;
                }
            }

            return max;
        }
    }

}
