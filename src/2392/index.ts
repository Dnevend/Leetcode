/**
 * https://leetcode-cn.com/problems/insert-into-bits-lcci/
 * @param N 
 * @param M 
 * @param i 
 * @param j 
 * @returns 
 */
function insertBits(N: number, M: number, i: number, j: number): number {

    // 将数值转二进制并反转
    var narr = Number(N).toString(2).split('').reverse();
    var marr = Number(M).toString(2).split('').reverse();
    
    // 补零
    for(var x = marr.length; x < (j-i+1); x++)
    {
        marr[x] = "0";
    }

    // 替换
    narr.splice(i,(j-i+1),...marr);

    return parseInt(narr.reverse().join(''), 2);
};