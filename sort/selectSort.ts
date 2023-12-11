// 选择排序
// 不稳定
// 空间复杂度O(1)
// 时间复杂度O(n^2)
function selectSort(array: number[]) {
    // 第i趟排序即从array[i...length - 1]中选择最小的元素与array[i]交换
    for (let i = 0; i < array.length - 1; i++) { // 一共array.length - 1趟
        let min = i // 记录最小元素的位置
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j
        }
        if (min != i) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}

// 堆排序
// 不稳定
// 空间复杂度O(1)
// 时间复杂度O(nlog2n)
function buildMaxHeap(array: number[], num: number) { // num: 堆的元素个数
    for (let i = Math.floor(num / 2); i > 0; i--)
        adjustHeap(array, i, num) // 调整为大根堆
}

function adjustHeap(array: number[], r: number, num: number) {
    // 对堆顶元素为array[r]的子堆进行调整
    array[0] = array[r] // array[0]暂存子堆的堆顶元素
    // 小元素不断下坠
    for (let i = 2 * r; i <= num; i *= 2) {
        if (i < num && array[i] < array[i + 1])
            i++
        if (array[0] >= array[i]) break
        else {
            array[r] = array[i]
            r = i
        }
        array[r] = array[0] // 确定原堆顶元素的位置
    }
}

function heapSort(array: number[]) {
    buildMaxHeap(array, array.length - 1) // 建立大根堆
    let num = array.length - 1 // num: 堆的元素个数
    for (let i = num; i > 1; i--) { // num - 1趟调整为大根堆
        let temp = array[1]
        array[1] = array[i]
        array[i] = temp // 输出堆顶元素（和堆底元素交换）
        adjustHeap(array, 1, i - 1) // 将剩余的i - 1个元素调整为大根堆
    }
}