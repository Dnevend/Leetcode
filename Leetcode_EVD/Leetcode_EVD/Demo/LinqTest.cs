using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.Demo
{
    class LinqTest
    {

        public static void QueryOverInts()
        {
            int[] numbers = { 10, 20, 30, 40, 1, 2, 4, 8 };

            var subject = from i in numbers where i < 10 select i;

            Console.WriteLine("Values in subject:");

            foreach (var i in subject)
            {
                Console.WriteLine("{0}", i);

            }
            Console.WriteLine();

            Console.WriteLine("subject is a: {0}", subject.GetType().Name);
            Console.WriteLine("subject is defined in: {0}", subject.GetType().Namespace);

        }

    }
}
