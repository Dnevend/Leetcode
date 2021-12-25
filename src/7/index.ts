/**
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param x 
 * @returns 
 */
function reverse(x: number): number {

    // 保持原数字状态
    let key = x < 0 ? -1 : 1;

    let result = parseInt([...Math.abs(x).toString()].reverse().join('')) * key;\

    if(result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31))
    {
        return 0;
    }
    
    return result;
};