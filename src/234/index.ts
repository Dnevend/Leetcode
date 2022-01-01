// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * @param head 
 * @returns 
 */
function isPalindrome(head: ListNode | null): boolean {


    let vals = [];
    while(head != null)
    {
        vals.push(head.val);
        head = head.next;
    }

    let rVals = [...vals].reverse();

    return vals.join('') == rVals.join('');
    
};