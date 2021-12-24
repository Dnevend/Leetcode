/**
 * https://leetcode-cn.com/problems/reverse-string/
 * @param s 
 */
 function reverseString(s: string[]): void {

    let len = s.length;
    let tmp = "";

    for(let i = 0; i < s.length / 2; i++)
    {
        tmp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = tmp;
    }
};