/**
 * https://leetcode-cn.com/problems/count-and-say/
 * @param n 
 * @returns 
 */
function countAndSay(n: number): string {

    let whatIsay = "1";     // 要Say的字符串
    let whatIsayLen = 0;    // 要Say的字符串长度
    let say = 0;            // Say到第几个字符了
    let sayChar = "";       // 要Say的字符
    let currentSay = "";    // 每次Say后的字符串
    
    for(let i = 2; i <= n; i++){

        say = 0;
        currentSay = "";
        whatIsayLen = whatIsay.length - 1;
        while(say <= whatIsayLen) 
        {

            let count = 1;// 要Say的字符的次数
            sayChar = whatIsay[say];
            say += 1;
            while(say <= whatIsayLen && sayChar === whatIsay[say])
            {
                count++;
                say++;
            }
            
            currentSay += (count + sayChar);
        }
        whatIsay = currentSay;

    }

    return whatIsay;
};