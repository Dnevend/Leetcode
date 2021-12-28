/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param strs 
 */
function longestCommonPrefix(strs: string[]): string {

    let checkChar = "";
    let index = 0;
    let flag = false;
    for(let i = 0;i < strs[0].length; i++)
    {
        checkChar = strs[0][index];
        for(let j = 1; j < strs.length; j++)
        {
            if(strs[j][index] != checkChar)
            {
                flag = true;
            }
        }
        if(flag)
        {
            break;
        }
        index++;

    }

    let common = "";
    for(let i = 0; i < index; i++)
    {
        common += strs[0][i];
    }

    return common;
    
};