class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @param list1 
 * @param list2 
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let virtual:ListNode = new ListNode(-1, list1);
    let pre:ListNode = virtual;

    while(list1 != null && list2 != null)
    {
        if(list1.val < list2.val)
        {
            pre.next = list1;
            list1 = list1.next;
        }else{
            pre.next = list2;
            list2 = list2.next;
        }
        pre = pre.next;
    }

    pre.next = list1 == null ? list2 : list1;

    return virtual.next;
};