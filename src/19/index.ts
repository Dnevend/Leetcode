class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @param head 
 * @param n 
 * @returns 
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let start = new ListNode(0, head); // 定义一个假的指向第一个
    let len = GetListLen(head);
    let cur: ListNode = start;
    for (let i = 0; i < len - n; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;

    return start.next;
};

function GetListLen(head: ListNode): number {

    let len = 0;
    while (head !== null) {
        len++;
        head = head.next;
    }
    return len;
    
}