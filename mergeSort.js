function merge(leftArray, rightArray) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i++]);
    } else if (rightArray[j] < leftArray[i]) {
      result.push(rightArray[j++]);
    }
  }

  while (i < leftArray.length) {
    result.push(leftArray[i++]);
  }
  while (j < rightArray.length) {
    result.push(rightArray[j++]);
  }

  return result;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array; // BASE CASE
  } else if (!array.length) {
    return "Please provide a non-empty array.";
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

let unSortedArray = [9, 3, 7, 5, 6, 4, 8, 2];

console.log(mergeSort(unSortedArray));
