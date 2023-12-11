function arrMax(arr: number[], begin: number): number {
    if (begin == arr.length - 1) return arr[begin]
    return Math.max(arr[begin], arrMax(arr, begin + 1))
}

let arr = [1, 6, 1, 0, 4, 3, 2, 6, 1]
console.log(arrMax(arr, 0))