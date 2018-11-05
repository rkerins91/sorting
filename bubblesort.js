/* bubble sort */

function bubbleSort(array) {
  let sorting = true,
    checkLength = array.length - 1,
    counter = 0;

  while (sorting) {
    counter++;
    sorting = false;
    for (let i = 0; i < checkLength; i++) {
      let temp;
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorting = true;
      }
    }
    checkLength--;
  }

  console.log("counted :: ", counter);
  return array;
}

// function swap(numOne, numTwo) {
// if(numOne > numTwo) {

// } else {

// }

//   return numOne, numTwo;
// }

let input = [9, 8, 11, 12, 13, 14, 15, 16];

console.log("unsorted :: ", input);
console.log(bubbleSort(input));
