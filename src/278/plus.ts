/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// https://leetcode-cn.com/problems/first-bad-version/submissions/

// 二分法（打小抄）

 var solution = function(isBadVersion: any) {

    return function(n: number): number {
        
        let badVersion = 1;
        let lastVersion = n;
        while(badVersion < lastVersion){
            let mid = Math.floor(badVersion + (lastVersion - badVersion) / 2);
            if(isBadVersion(mid)){
                lastVersion = mid;
            }else{
                badVersion = mid + 1;
            }
        }

        return badVersion;
    };
};