using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;

namespace UnitTestProject
{
    [TestClass()]
    public class UnitTest1
    {
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
