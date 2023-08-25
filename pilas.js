/* Estructura de Pila */

class Pila {
    constructor() {
        this.items = [];
    }

    pushPila(element) {
        this.items.push(element);
    }

    popPila() {
        if (this.isEmpty()) {
            return `La pila está vacía`;
        } else {
            return this.items.pop();
        }
    }

    peekPila() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    sizePila() {
        return this.items.length;
    }

    convierteAString() {
        return this.items.join(" ");
    }

    getPila() {
        return this.items;
    }

    regresaPila(num) {
        const newArray = [];
        for (let i = 0; i <= num - 1; i++) {
            newArray[i] = this.items[i];
        }
        return newArray;
    }

    appendPila(arr) {
        arr.forEach((e) => this.pushPila(e));
    }



    reemplazar(nuevo, viejo) {
        let miPilaTemporal = new Pila();
        while (!this.isEmpty() && this.peekPila() !== viejo) {
            miPilaTemporal.pushPila(this.popPila());
        }
        if (!this.isEmpty()) {
            this.popPila();
            this.pushPila(nuevo);
        }
        while (!miPilaTemporal.isEmpty()) {
            this.pushPila(miPilaTemporal.popPila());
        }
        return this.getPila();
    }

    deReversa() {
        return this.items.reverse().join(" --> ");
    }

    extraerPila(posicion) {
        const extraido = this.items.splice(posicion-1,1);
        const resultado = [extraido, this.items];
        return resultado;
    }

}

/* 1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’] */

let nuevaPila = new Pila();
nuevaPila.appendPila(["🍎", "🍍", "🍉", "🍓", "🍋", "🥔", "🧅"]);
console.log(nuevaPila.regresaPila(4));

/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */

let pilaEjercicio2 = new Pila();

pilaEjercicio2.appendPila([3, 2, 3, 4, 6, 8, 1, 2, 5, 5]);
console.log(pilaEjercicio2);
console.log(pilaEjercicio2.reemplazar(10, 4));

    /* 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen */

let recorrido = new Pila();
recorrido.appendPila(["Origen", "Pueblo1", "Pueblo2", "Pueblo3", "Destino"]);
console.log(recorrido.convierteAString());
console.log(recorrido.deReversa());

/* 4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar. */

let pilaEjericio4 = new Pila();
pilaEjericio4.appendPila([{id: 10, name: "contenedor1"}, {id: 20, name: "contenedor2"}, {id: 30, name: "contenedor3"}, {id: 40, name: "contenedor4"}, {id: 50, name: "contenedor5"}]); 

console.log(pilaEjericio4.extraerPila(2));