/**
 * https://leetcode-cn.com/problems/sum-of-unique-elements/
 * @param nums 
 * @returns 
 */
function sumOfUnique(nums: number[]): number {

    let result = 0;
    let countMap = new Map();
    nums.forEach(v => {
        if(countMap.has(v))
        {
            countMap.set(v, 0);
        }
        else{
            countMap.set(v, 1);
        }
    });

    for(let [k, v] of countMap.entries())
    {
        if(v === 1)
            result+=k;
    }

    return result;
};