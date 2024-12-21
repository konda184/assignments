/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    var array = [3, 6, 2, 56, 32, 5, 89, 32];
    var largest = 0;

    for (i = 0; i <= largest; i++) {
        if (array > largest) {
            var largest = array[i];
        }
    }

    console.log(largest);

}

module.exports = findLargestElement;