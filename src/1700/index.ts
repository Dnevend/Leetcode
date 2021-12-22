/**
 * https://leetcode-cn.com/problems/number-of-students-unable-to-eat-lunch/
 * @param students 
 * @param sandwiches 
 * @returns 
 */
function countStudents(students: number[], sandwiches: number[]): number {

    let ss = [0,0];

    // 获取每种三明治的需求
    for(let s of students)
    {
        ss[s]++;
    }
    
    for(let i = 0; i < sandwiches.length; i++)
    {
        if(ss[sandwiches[i]] > 0)
        {
            ss[sandwiches[i]]--;
        }else{
            // 不够吃了
            return sandwiches.length - i;
        }
    }

    return 0;
};