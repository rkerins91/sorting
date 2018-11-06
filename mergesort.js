function mergeSort(array) {
  let left, right;
  if (array.length < 2) {
    return array;
  } else {
    left = mergeSort(split(array)[0]);
    right = mergeSort(split(array)[1]);
  }
  return merge([left, right])
}

function merge(array) {
  let i = 0;
  let j = 0;
  let merged = [];
  let currLeft, currRight;

  while (i < array[0].length || j < array[1].length) {
    currLeft = array[0][i];
    currRight = array[1][j];
    if (array[0][i] < array[1][j] || array[1][j] === undefined) {
      merged.push(currLeft);
      i++;
    } else {
      merged.push(currRight);
      j++;
    }
  }
  return merged;
}

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const left = wholeArray.slice(0, Math.ceil(wholeArray.length / 2));
  const right = wholeArray.slice(Math.ceil(wholeArray.length / 2));

  return [left, right];
}
