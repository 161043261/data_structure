function topologicalSort(graph) {
    let s // s: Stack
    for (let i = 0; i < graph.vertexNum; i++) {
        if (graph.inDegree[i] == 0)
            s.push(i) // 将所有入度为0的结点入栈
    }
    let count = 0
    let topologicalOrder: number[] = []
    while (!s.isEmpty()) {
        let v = s.pop()
        topologicalOrder[count++] = v;
        for (let i = graph.firstNeighbor[v];
             i >= 0;
             i = graph.nextNeighbor(i)) {
            graph.inDegree[i]--
            if (graph.inDegree[i] == 0)
                s.push(i)
        }
    }
    console.log(topologicalOrder)
    return count == graph.vertexNum // 有向图中有无回路
}

// 采用邻接表方式存储时，时间复杂度O(|V|+|E|)
// 采用邻接矩阵方式存储时，时间复杂度O(|V|^2)