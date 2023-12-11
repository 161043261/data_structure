// 深度优先搜索（二叉树的先根遍历）
function dfsTraverse(graph) {
    let visited: boolean[] = [] // 访问标记数组
    for (let i = 0; i < graph.vertexNum; i++) {
        visited[i] = false // 初始化访问标记数组
    }
    for (let i = 0; i < graph.vertexNum; i++) {
        if (!visited[i])
            dfs(graph, i, visited) // 对每个连通分量（极大连通子图）调用一次dfs
     }
}

function dfs(graph, v: number, visited: boolean[]) {
    visited[v] = true // 标记已访问
    for (let i = graph.firstNeighbor(v);
        i >= 0;
        i = graph.nextNeighbor(i)) { // 结点i的所有邻接点
        if (!visited[i]) {
            dfs(graph, i, visited)  // 邻接点未访问，则递归调用dfs
        }
    }
}

// dfs需要递归调用栈，空间复杂度O(|V|)
// 采用邻接表方式存储时，时间复杂度O(|V|+|E|)
// 采用邻接矩阵方式存储时，时间复杂度O(|V|^2)