/**
 * https://leetcode-cn.com/problems/consecutive-characters/
 * @param s 
 * @returns 
 */
function maxPower(s: string): number {

    let max = 1;
    let tmpMax = 1;
    for(let i = 1; i < s.length; i++)
    {
        if(s[i] === s[i - 1])
        {
            tmpMax++;
            max = Math.max(max, tmpMax);
        }
        else{
            tmpMax = 1;
        }
    }


    return max;
};