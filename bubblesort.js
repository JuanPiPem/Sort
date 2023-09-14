function bubbleSort(arr) {
  let swapeo;
  do {
    swapeo = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapeo = true;
      }
    }
  } while (swapeo);
  return arr;
}

function swap(arr, ind1, ind2) {
  var temporal = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temporal;
}

function split(arr) {
  let firstHalf = arr.slice(0, arr.length / 2);
  let secondHalf = arr.slice(arr.length / 2);

  return firstHalf && secondHalf;
}
function merge(arr1, arr2) {
  let arregloEntero = [];
  for (let i = 0; i < arr1.length; i++) {
    arregloEntero.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arregloEntero.push(arr2[i]);
  }

  return arregloEntero.sort();
}
