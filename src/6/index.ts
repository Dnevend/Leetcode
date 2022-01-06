/**
 * https://leetcode-cn.com/problems/na-ying-bi/
 * @param coins 
 * @returns 
 */
function minCount(coins: number[]): number {

    let count = 0;
    for(let i = 0; i < coins.length; i++)
    {
        
        if(coins[i] % 2 === 1 && coins[i] > 2)
        {
            count++;
            count += (coins[i]-1) / 2;
        }
        else if(coins[i] % 2 === 1){
            count++;
        }
        else if(coins[i] === 2)
        {
            count++;
        } 
        else
        {
            count += coins[i] / 2;
        }
   
    }

    return count;
};