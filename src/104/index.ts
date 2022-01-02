class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @param root 
 * @returns 
 */
function maxDepth(root: TreeNode | null): number {

    // 处理空树
    if (root === null) {
        return 0;
    }

    // (节点数，深度)
    const queue: [TreeNode, number][] = [[root, 1]]
    let max = 1;

    while (queue.length > 0) {
        const [node, depth] = queue.shift()
        const nextDepth = depth + 1;

        max = Math.max(max, depth);

        node.left !== null && queue.push([node.left, nextDepth])
        node.right !== null && queue.push([node.right, nextDepth])
    }

    return max
};