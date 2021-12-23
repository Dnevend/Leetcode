/**
 * https://leetcode-cn.com/problems/consecutive-characters/
 * @param s 
 * @returns 
 */
 function maxPower(s: string): number {

    let max = 1, sLength = s.length;
    for(let i = 0; i < sLength;)
    {
        let j = i;
        while(j < sLength && s[j] === s[i]){
            j++;
        }
        max = Math.max(max, j - i);
        i = j;
    }

    return max;
};