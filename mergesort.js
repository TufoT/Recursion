function mergeSort(array) {
  if (!array || array.length <= 1) {
    return array;
  }
  
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  
  const leftSorted = mergeSort(leftArray);
  const rightSorted = mergeSort(rightArray);
  
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  const result = [];
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  while (left.length) {
    result.push(left.shift());
  }
  
  while (right.length) {
    result.push(right.shift());
  }
  
  return result;
}

console.log(mergeSort([10, 15, 23, 8, 3, 2, 6]));