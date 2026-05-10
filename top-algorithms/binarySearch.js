// * An efficient search algorithm that finds the position of a target value within a sorted array.

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === target) return `Found ${target} at index ${mid}.`;

    if (guess > target) high = mid - 1;
    else low = mid + 1;
  }

  return `Not found ${target}.`;
};

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const target = 7;

console.log(binarySearch(sortedArr, target));
