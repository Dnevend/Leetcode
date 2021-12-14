using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/can-place-flowers/
    /// </summary>
    class _605
    {

        public bool CanPlaceFlowers(int[] flowerbed, int n)
        {

            for (int i = 0; i < flowerbed.Length && n > 0;)
            {
                if (flowerbed[i] == 0)
                {

                    if (i <= flowerbed.Length - 2 && flowerbed[i + 1] != 0)
                    {
                        i += 3;
                        continue;
                    }

                    n--;
                    i += 2;
                }
                else
                {
                    i += 2;
                }

            }

            return n <= 0;
        }

    }
}
