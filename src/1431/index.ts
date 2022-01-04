/**
 * https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
 * @param candies 
 * @param extraCandies 
 * @returns 
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

    let max = Math.max(...candies);
    let result = [];
    
    for(let c of candies)
    {
        if(c + extraCandies >= max)
        {
            result.push(true);
        }
        else
        {
            result.push(false);
        }
    }

    return result;
};