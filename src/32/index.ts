/**
 * https://leetcode-cn.com/problems/dKk3P7/
 * @param s 
 * @param t 
 * @returns 
 */
function isAnagram(s: string, t: string): boolean {

    if(s == t || s.length != t.length){
        return false;
    }

    
	var ss = new Map();
	var ts = new Map();
    for(var i = 0; i < s.length; i++)
    {
        var sindex = s.charCodeAt(i) - 97;
        var tindex = t.charCodeAt(i) - 97;

        if(!ss.has(sindex))
        {
            ss.set(sindex, 1);
        }else{
            var value = ss.get(sindex);
            ss.set(sindex, ++value);
        }

        if(!ts.has(tindex)){
            ts.set(tindex, 1);
        }else{
            var value = ts.get(tindex);
            ts.set(tindex, ++value);
        }
    }

    try {
        ss.forEach(function(v, k){
            if((typeof ts.get(k) == 'undefined') || ts.get(k) != v){
                throw new Error();
            }
        });
    } catch (error) {
        return false;
    }    

    return true;
};
