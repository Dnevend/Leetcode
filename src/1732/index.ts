/**
 * https://leetcode-cn.com/problems/find-the-highest-altitude/
 * @param gain 
 * @returns 
 */
function largestAltitude(gain: number[]): number {

    var max = 0;
    var now = 0;
    for(var i = 0; i < gain.length; i++)
    {
        now = gain[i] + now;
        if(now > max)
        {
            max = now;
        }
    }

    return max;

};