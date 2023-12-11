// 插入排序
// 稳定
// 空间复杂度O(1)
// 时间复杂度O(n^2)
function insertSortV1(array: number[]) {
    // 依次将array[1]~array[array.length - 1]插入前面已排序序列
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            let temp = array[i]
            let j = i - 1
            for (; temp < array[j] && j >= 0; j--)
                array[j + 1] = array[j]
            // temp > array[j]
            array[j + 1] = temp
        }
    }
}

// 折半插入排序
// 稳定
// 空间复杂度O(1)
// 时间复杂度O(n^2)
function insertSortV2(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            let temp = array[i]
            let low = 0, high = i - 1
            while (low <= high) {
                let mid = Math.floor((low + high) / 2)
                if (array[mid] > temp) high = mid - 1 // 查找左子表
                else low = mid + 1 // 查找右子表
            }
            for (let j = i - 1; j >= high + 1; j--)
                array[j + 1] = array[j]
            array[high + 1] = temp
        }
    }
    return array
}

// 希尔排序：缩小增量排序
// 不稳定
// 空间复杂度O(1)
// 时间复杂度O(n^2)
function shellSort(array: number[]) {
    for (let dx = Math.floor(array.length / 2);
         dx >= 1;
         dx = Math.floor(dx / 2)) {
        for (let i = dx; i < array.length; i++) {
            if (array[i] < array[i - dx]) {
                let j = i - dx
                let temp = array[i]
                for (; array[j] > temp && j >= 0; j -= dx) {
                    array[j + dx] = array[j]
                }
                array[j + dx] = temp
            }
        }
    }
}