/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * @param haystack 
 * @param needle 
 * @returns 
 */
function strStr(haystack: string, needle: string): number {

    let hLen = haystack.length;
    let nLen = needle.length;

    for(let i = 0; i <= hLen -nLen; i++)
    {
        let hl = i, nl = 0;
        while(nl < nLen && haystack[hl].charCodeAt(0) == needle[nl].charCodeAt(0))
        {
            hl++;
            nl++;
        }

        if(nl === nLen)
        {
            return i;
        }

    }

    return -1;
};