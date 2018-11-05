// /* bubble sort */

// function bubbleSort(array) {
//   let sorting = true,
//     checkLength = array.length - 1,
//     counter = 0;

//   while (sorting) {
//     counter++;
//     sorting = false;
//     for (let i = 0; i < checkLength; i++) {
//       let temp;
//       if (array[i] > array[i + 1]) {
//         temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         sorting = true;
//       }
//     }
//     checkLength--;
//   }

//   //console.log("counted :: ", counter);
//   return array;
// }



// let input = [9, 8, 11, 11, 13, 14, 15, 16, 4];

// console.log("unsorted :: ", input);
// console.log(bubbleSort(input));

function bubbleSort(array) {
  let sorting = true,
    checkLength = array.length - 1,
    counter = 0;

  while (sorting) {
    counter++;
    sorting = false;
    let tempArray;
    for (let i = 0; i < checkLength; i++) {
      if (array[i] > array[i + 1]){
        sorting = true;
        tempArray = swap(array[i], array[i + 1]);
        array[i] = tempArray[0];
        array[i + 1] = tempArray[1];
      }
    }
    checkLength--;
  }
  console.log("counted :: ", counter);
  return array;
}

function swap(numOne, numTwo) {
  let temp = numOne;
  numOne = numTwo;
  numTwo = temp;
  return [numOne, numTwo];
  counter++;
}


