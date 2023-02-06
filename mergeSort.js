function mergeSort(array) {
  if (array.length === 1) {
    return array; // BASE CASE
  } else if (!array.length) {
    return "Please provide a non-empty array.";
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  // merging happens
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i++]);
    } else if (right[j] < left[i]) {
      sortedArray.push(right[j++]);
    }
  }

  while (i < left.length) {
    sortedArray.push(left[i++]);
  }
  while (j < right.length) {
    sortedArray.push(right[j++]);
  }

  return sortedArray;
}

let unSortedArray = [9, 3, 7, 5, 6, 4, 8, 2];

console.log(mergeSort(unSortedArray));
