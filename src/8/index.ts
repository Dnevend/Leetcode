/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param s 
 * @returns 
 */
function myAtoi(s: string): number {

    s = s.trim();// 去除首位空格
    
    let tran = s.startsWith("-") ? -1 : 1; // 正负Flag

    let sValue = "0";// 默认值 0
    let minBoundary = sValue.charCodeAt(0);// 0 的 Ascii值
    let maxBoundary = "9".charCodeAt(0);// 9 的 Ascii值

    let i = s.startsWith("-") || s.startsWith("+") ? 1 : 0;// 有符号则从索引1开始运算

    let nValue = 0;
    for(; i < s.length; i++)
    {
        nValue = s[i].charCodeAt(0);
        if(nValue > maxBoundary || nValue < minBoundary)
        {// 非数字结束运算
            break;
        }
        sValue += s[i];
    }
    
    let result = parseInt(sValue) * tran;
    // 边界判断
    result = tran === -1 ? 
        Math.max(result, Math.pow(-2, 31))
        : 
        Math.min(result, Math.pow(2, 31) - 1);

    return result;
};