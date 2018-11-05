function mergeSort(array) {
  let tempArr = split(array);
  console.log(tempArr);
  let t2arr = merge(tempArr);
}

function merge(array) {
  // if (array.length === tempArr.length) {
  //   return tempArr;
  // } else {

  //   }
  // }

  if (typeof array[0] === Number) {
    if (array.length > 1) {
      if (array[0] < array[1]) {
        array = swap(array[0], array[1]);
      }
    }
  }

  return tempArr;
}

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */

  if (wholeArray.length !== 1) {
    let firstHalf = split(
      wholeArray.slice(0, Math.ceil(wholeArray.length / 2))
    );
    let secondHalf = split(wholeArray.slice(Math.ceil(wholeArray.length / 2)));
    return [firstHalf, secondHalf];
  } else {
    return wholeArray;
  }
}

function swap(a, b) {
  return [b, a];
}

let input = [100, 6, 5, 9, 13, 8, 84, 65],
  answer = [5, 6, 8, 9, 13, 65, 84, 100, 101];

console.log(merge(answer));
