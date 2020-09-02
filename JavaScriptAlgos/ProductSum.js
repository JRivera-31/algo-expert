// O(n) time | O(d) space - where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of the "special" arrays in the array
function productSum(array, m = 1) {
  let sum = 0;

  for (let element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, m + 1);
    } else {
      sum += element;
    }
  }

  return sum * m;
}
