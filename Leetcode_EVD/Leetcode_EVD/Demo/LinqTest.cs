using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.Demo
{
    [TestClass()]
    public class LinqTest
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

        [TestMethod()]
        public static void linqSum()
        {
            int max = 0;
            int[][] abc = new int[2][];

            abc[0] = new int[] { 1, 2 };
            abc[1] = new int[] { 3, 4, 5, 6 };

            for (int i = 0; i < abc.Length; i++)
            {
                Console.WriteLine(abc[i].Sum());
                max = Math.Max(abc[i].Sum(), max);
            }

            Assert.AreEqual(18, max);
        }

    }
}
