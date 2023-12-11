// 广度优先搜索（二叉树的层序遍历）
function bfsTraverse(graph): void { // graph: Graph
    let visited: boolean[] = [] // 访问标记数组
    for (let i = 0; i < graph.vertexNum; i++) {
        visited[i] = false // 初始化访问标记数组
    }
    for (let i = 0; i < graph.vertexNum; i++) {
        if (!visited[i])
            bfs(graph, i, visited) // 对每个连通分量（极大连通子图）调用一次bfs
    }
}

function bfs(graph, v: number, visited: boolean[]): void {
    let queue // 辅助队列
    queue.enQueue(v) // 结点v入队
    while (!queue.isEmpty()) {
        v = queue.deQueue() // 结点i出队，并访问
        visited[v] = true // 标记已访问
        for (let i = graph.firstNeighbor(v);
            i >= 0;
            i = graph.nextNeighbor(i)) { // 结点i的所有邻接点
            if (!visited[i]) { // 邻接点未访问则入队
                queue.enQueue(i)
            }
        }
    }
}
// bfs需要辅助队列，空间复杂度O(|V|)
// 采用邻接表方式存储时，时间复杂度O(|V|+|E|)
// 采用邻接矩阵方式存储时，时间复杂度O(|V|^2)

// bfs算法求单源最短路线
function minDistance(graph, v: number) {
    let queue // 辅助队列
    queue.enQueue(v) // 结点v入队

    // 初始化路径长度
    let distance: number[] = []
    for (let i = 0; i < globalThis.vertexNum; i++)
        distance[i] = -1
    distance[v] = 0

    while (!queue.isEmpty()) {
        let visited: boolean[] = [] // 访问标记数组
        v = queue.deQueue() // 结点v出队，并访问
        visited[v] = true // 已访问标记
        for (let i = graph.firstNeighbor(v);
            i >= 0;
            i = graph.nextNeighbor(i)) { // 结点v的所有邻接点
            if (!visited[i]) { // 邻接点未访问则入队
                queue.enQueue(i)
                distance[i] = distance[v] + 1
            }
        }
    }
}