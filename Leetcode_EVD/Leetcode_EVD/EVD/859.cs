using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/buddy-strings/
    /// 859. 亲密字符串
    /// </summary>
    class _859
    {

        public static bool BuddyStrings(string s, string goal)
        {
            int length = s.Length;
            if (length != goal.Length) { return false; }
            if (s.Equals(goal))
            {
                //HashSet<int> hs = new HashSet<int>();
                int[] hs = new int[26];
                for (int i = 0; i < length; i++)
                {
                    if (++hs[s[i]] > 1) { return true; }
                }

                // 没有可相互替换的字符
                return false;
            }

            List<int> tmp = new List<int>();
            for (int i = 0; i < length; i++)
            {
                if (s[i] != goal[i])
                {
                    tmp.Add(i);
                }
            }

            if (tmp.Count != 2 || ((s[tmp[0]] != goal[tmp[1]] || goal[tmp[0]] != s[tmp[1]])))
            {
                return false;
            }

            return true;
        }

    }
}
