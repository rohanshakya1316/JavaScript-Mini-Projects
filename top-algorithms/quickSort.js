// * A fast sorting algorithm that uses a divide-and-conquer strategy to sort elements. 

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [2, 1, 6, 4, 7, 9, 3];

console.log(quickSort(arr));