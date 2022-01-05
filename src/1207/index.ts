/**
 * https://leetcode-cn.com/problems/unique-number-of-occurrences/
 * @param arr 
 * @returns 
 */
function uniqueOccurrences(arr: number[]): boolean {

    let numMap = new Map();
    arr.forEach(v => {
        let count = 1;
        if(numMap.get(v))
        {
            count = numMap.get(v);
            count++;
        }
        numMap.set(v, count);
    });
    
    let numSet = new Set();
    let result = true;
    numMap.forEach((v, k) => {
        if(numSet.has(v)){
            result = false;
        }
        numSet.add(v);
    })

    return result;
};