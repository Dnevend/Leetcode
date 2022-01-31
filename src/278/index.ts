/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {

    return function(n: number): number {
        
        let badVersion = 1;
        let lastVersion = n;
        while(badVersion < lastVersion){
            if(isBadVersion(badVersion)){
                break;
            }else{
                badVersion++;
            }
        }

        return badVersion;
    };
};