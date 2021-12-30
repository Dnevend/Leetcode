class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * @param head 
 * @returns 
 */
function hasCycle(head: ListNode | null): boolean {
    
    let cycles = new Set();
    while(head !== null)
    {
        if(cycles.has(head))
        {
            return true;
        }
        cycles.add(head);
        head = head.next;
    }

    return false;
};
