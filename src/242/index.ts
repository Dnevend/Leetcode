/**
 * https://leetcode-cn.com/problems/valid-anagram/solution/
 * @param s 
 * @param t 
 * @returns 
 */
function isAnagram(s: string, t: string): boolean {

    return [...s].sort().toString() === [...t].sort().toString()

};