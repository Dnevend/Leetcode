/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param s 
 * @returns 
 */
function firstUniqChar(s: string): number {


    let m = new Map();

    [...s].forEach(v => {
        m.set(v, m.has(v) ? m.get(v) + 1 : 1);
    })
    
    for(let [k, v] of m)
    {
        if(v === 1)
        {
            return s.indexOf(k);
        }
    }
    
    return -1;
};