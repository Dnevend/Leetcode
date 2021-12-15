using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/ransom-note/
    /// </summary>
    class _383
    {

        public bool CanConstruct(string ransomNote, string magazine)
        {

            int[] magazines = new int[26];
            for (int i = 0; i < magazine.Length; i++)
            {
                magazines[magazine[i] - 'a']++;
            }

            for (int i = 0; i < ransomNote.Length; i++)
            {

                magazines[ransomNote[i] - 'a']--;

            }

            for (int i = 0; i < magazines.Length; i++)
            {
                if(magazines[i] > 0) { return false; }
            }

            return true;
        }

    }
}
