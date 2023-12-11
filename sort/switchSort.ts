// 冒泡排序
// 稳定
// 空间复杂度O(1)
// 时间复杂度O(n^2)
function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        let flag = false // 表示本趟冒泡是否发生交换
        for (let j = array.length; j > i; j--) {
            if (array[j - 1] > array[j]) {
                let temp = array[j - 1]
                array[j - 1] = array[j]
                array[j] = temp
                flag = true
            }
        }
        if (!flag) return array
    }
    return array
}

// 快速排序
// 不稳定
// 空间复杂度O(log2n): 递归调用栈
// 时间复杂度O(nlog2n)
function quickSort(array: number[], low: number, high: number) {
    if (low < high) {
        let pivotPos = partition(array, low, high)
        quickSort(array, low, pivotPos - 1)
        quickSort(array, pivotPos + 1, high)
    }
    return array
}

function partition(array: number[], low: number, high: number): number {
    let pivot = array[low] // 设表中第一个元素为枢轴元素，通过枢轴划分表
    while (low < high) {
        while (low < high && array[high] >= pivot) high--
        array[low] = array[high] // (array[high] < pivot) 将比枢轴小的元素移动到左边
        while (low < high && array[low] <= pivot) low++
        array[high] = array[low] // (array[low] > pivot) 将比枢轴大的元素移动到右边
    }
    array[low] = pivot // 确定枢轴元素的位置
    return low // (low == high) 返回枢轴元素的位置
}