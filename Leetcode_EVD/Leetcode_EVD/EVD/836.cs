using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/rectangle-overlap/
    /// 836. 矩形重叠
    /// </summary>
    class _836
    {

        public bool IsRectangleOverlap(int[] rec1, int[] rec2)
        {

            if (
                !(rec1[2] <= rec2[0] || rec1[0] >= rec2[2])
                &&
                !(rec1[3] <= rec2[1] || rec1[1] >= rec2[3])
            )
            {
                return true;
            }

            return false;
        }

    }
}
