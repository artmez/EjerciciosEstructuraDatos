function binarySearch(array, number) {

    let start = 0;
    let end = array.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end)/2);
        if (array[middle] === number) {
            return true;
        } else if(array[middle] < number) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
}

function sortArray (array) {
    array.sort((a,b) => {return a - b});
    return array;
}

let miArregloDesordenado = [3, 45, 1, 67, 24, 15, 99, 101, 76, 4, 25, 66];

let miArregloOrdenado = sortArray(miArregloDesordenado);
console.log(miArregloOrdenado);

let x = 101;

console.log(binarySearch(miArregloOrdenado, x));
