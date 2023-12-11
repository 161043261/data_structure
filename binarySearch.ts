function binarySearch(list: number[], key: number): number {
    let low = 0
    let high = list.length
    let mid
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (list[mid] == key) return mid
        else if (list[mid] > key) high = mid - 1
        else low = mid + 1
    }
    return -1 // 查找失败
}
// 折半查找时间复杂度O(log2n)
