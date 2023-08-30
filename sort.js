function bubbleSort (arr) { //Metodo de busqueda de burbuja
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function insertionSort (arr) { //Metodo de busqueda de Inserción
    for(let i = 1; i < arr.length; i++) {
        let posicion = arr[i];
        let j = i-1;
        while((j>-1) && (posicion < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = posicion;
    }
    return arr;
}


let miArregloDesordenado = [3, 45, 1, 67, -24, 15, 99, 101, 76, 4, 25, 66];
console.log(`\nEl arreglo desordenado es: ${miArregloDesordenado}\n`);

let miArregloOrdenado = bubbleSort(miArregloDesordenado);
console.log(`El arreglo ordenado por medio de Bubble Sort es: ${miArregloOrdenado}`);

let miArregloOrdenado2 = insertionSort(miArregloDesordenado);
console.log(`El arreglo ordenado por medio de Insertion Sort es: ${miArregloOrdenado2}\n`);

let miArregloDesordenadoString = ["jbc", "dfg", "fs", "zdffds", "sg", "pqg", "spa", "bvr", "swr"];
console.log(`El arreglo desordenado de Strings es: ${miArregloDesordenadoString}`);
let miArregloOrdenadoString = insertionSort(miArregloDesordenadoString);
console.log(`El arreglo ordenado por medio de Insertion Sort es: ${miArregloOrdenadoString}\n`);