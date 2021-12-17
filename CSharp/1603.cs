using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leetcode_EVD.EVD
{
    class _1600
    {


    }

    /// <summary>
    /// https://leetcode-cn.com/problems/design-parking-system/
    /// </summary>
    public class ParkingSystem
    {

        // way 1
        //int bigSize, mediumSize, smallSize;

        // way 2
        //int[] typeSize = new int[4];

        int[] typeSize;

        public ParkingSystem(int big, int medium, int small)
        {
            // way 1
            //this.bigSize = big;
            //this.mediumSize = medium;
            //this.smallSize = small;

            // way 2
            //typeSize[1] = big;
            //typeSize[2] = medium;
            //typeSize[3] = small;

            // way 3
            typeSize = new int[] { 0, big, medium, small };

        }

        public bool AddCar(int carType)
        {
            // way 3
            return --typeSize[carType] >= 0;

            // way 2
            //if (--typeSize[carType] < 0)
            //{
            //    return false;
            //}

            // way 1
            //switch (carType)
            //{
            //    case 1:
            //        if (--bigSize < 0)
            //        {
            //            return false;
            //        }
            //        break;
            //    case 2:
            //        if (--mediumSize < 0)
            //        {
            //            return false;
            //        }
            //        break;
            //    case 3:
            //        if (--smallSize < 0)
            //        {
            //            return false;
            //        }
            //        break;
            //}

            //return true;
        }
    }

    /**
     * Your ParkingSystem object will be instantiated and called as such:
     * ParkingSystem obj = new ParkingSystem(big, medium, small);
     * bool param_1 = obj.AddCar(carType);
     */

}
