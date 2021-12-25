/**
 * https://leetcode-cn.com/problems/valid-palindrome/solution/
 * @param s 
 * @returns 
 */
function isPalindrome(s: string): boolean {

    // 转换成小写
    let sCopy = s.toLowerCase();

    let minBoundary = "a".charCodeAt(0);
    let maxBoundary = "z".charCodeAt(0);

    let numMinBound = "0".charCodeAt(0);
    let numMaxBound = "9".charCodeAt(0);
    
    let tranStr = [];
    // 过滤特殊字符
    for(let i = 0; i < s.length; i++)
    {
        let c = sCopy.charCodeAt(i);
        if((c >= minBoundary && c <= maxBoundary) || (c >= numMinBound && c <= numMaxBound))
        {
            tranStr.push(c);
        }
        
    }
    
    return tranStr.join("") === tranStr.reverse().join("");
};