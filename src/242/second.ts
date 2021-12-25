function isAnagram2(s: string, t: string): boolean {

    return [...s].sort().toString() === [...t].sort().toString()

};