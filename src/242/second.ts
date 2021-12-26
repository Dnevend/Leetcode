function isAnagram2(s: string, t: string): boolean {

    if(s.length != t.length){ return false;}

    let sArr = new Array(26).fill(0);
    let tArr = new Array(26).fill(0);

    let base = "a".charCodeAt(0);
    for(let i = 0; i < s.length; i++)
    {
        sArr[s.charCodeAt(i) - base]++;
    }
    for(let i = 0; i < t.length; i++)
    {
        tArr[t.charCodeAt(i) - base]++;
    }
    for(let i = 0; i < sArr.length; i++)
    {
        if(sArr[i] != tArr[i]){
            return false;
        }
    }

    return true;
};