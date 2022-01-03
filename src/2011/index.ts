/**
 * https://leetcode-cn.com/problems/final-value-of-variable-after-performing-operations/
 * @param operations 
 * @returns 
 */
function finalValueAfterOperations(operations: string[]): number {

    let operas = [];
    operations.forEach(o => operas.push(o.charAt(1)));
    
    // let operaStr = 0 + operas.join("1") + 1;

    let result = 0;
    for(let o of operas)
    {
        if(o === "-")
        {
            result = result - 1;
        }
        else if(o === "+")
        {
            result = result + 1;
        }
    }
    

    return result;
};