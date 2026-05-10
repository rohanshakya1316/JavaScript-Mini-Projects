// * A simple search algorithm that finds the position of a target value within a list.

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found ${target} at index ${i}.`;
    }
  }
  return `Not found ${target}.`;
};

const arr = [10, 30, 20, 45, 554, 23, 65, 50];

const target = 50;

console.log(linearSearch(arr, target));
