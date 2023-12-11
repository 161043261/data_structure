// 归并排序：递归、合并
// 稳定
// 空间复杂度O(n)
// 时间复杂度O(nlog2n)
function merge(array: number[], low: number, mid: number, high: number) {
    // 左右两段array[low..mid]和aray[mid + 1...high]均有序，将两段合并为一个有序表
    let copy: number[] = []
    for (let i = low; i <= high; i++)
        copy[i] = array[i] // 将array[low..high]中所有元素复制到copy中
    let i = low, j = mid + 1, k = low
    for (; i <= mid && j <= high; k++) {
        // 比较copy左右两段的元素大小，将较小值复制回array中
        if (copy[i] <= copy[j]) array[k] = copy[i++]
        else array[k] = copy[j++]
    }
    while (i <= mid) array[k++] = copy[i++] // copy左段未复制完
    while (j <= high) array[k++] = copy[j++] // copy右段未复制完
}

function mergeSort(array: number[], low: number, high: number) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2) // 从中间划分为左右两段
        mergeSort(array, low, mid) // 递归，对左段进行排序
        mergeSort(array, mid + 1, high) // 递归，对右段进行排序
        merge(array, low, mid, high)
    }
}
