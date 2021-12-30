/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {

    let queue = [];
    let copy:ListNode = new ListNode(0, head);
    let cur:ListNode = copy;
    while(head !== null)
    {
        queue.push(head.val);
        head = head.next;
    }

    while(cur.next !== null)
    {
        cur.next.val = queue.pop();
        cur = cur.next;
    }

    return copy.next;

};