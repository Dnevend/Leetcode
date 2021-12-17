using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    /// <summary>
    /// https://leetcode-cn.com/problems/excel-sheet-column-number/
    /// </summary>
    class _171
    {

        public static int TitleToNumber(string columnTitle)
        {
            int result = 0;
            // way 1
            //for (int i = 0; i < columnTitle.Length; i++)
            //{

            //    char c = columnTitle[i];
            //    if (i == (columnTitle.Length - 1))
            //    {
            //        result += (c - 'A' + 1);
            //    }
            //    else {
            //        Double pows = Math.Pow(Double.Parse("26"), Double.Parse((columnTitle.Length - i - 1).ToString()));
            //        result += ((c - 'A' + 1) * int.Parse(pows.ToString()));
            //    }

            //}

            // way 2
            // ABC -> C * 26^1 + B * 26^2 + A * 26^3
            int multiple = 1;
            for (int i = columnTitle.Length - 1; i >= 0; i--)
            {
                int c = columnTitle[i] - 'A' + 1;
                result += c * multiple;
                multiple *= 26;
            }

            Console.WriteLine(result);
            return result;
        }

    }
}
