function bubbleSort(array) {
  if (array.length < 2) {return array}
  for (let i = 0; i < array.length; i++) {
          /* your code here */
      for (let j = 0; j < array.length-i; j++)
          if (array[j] > array[j+1]) {
              swap(array, j, j+1)
          }

}
return array;
}

function swap (arr, indexA, indexB) {
  const holder = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = holder;
}
