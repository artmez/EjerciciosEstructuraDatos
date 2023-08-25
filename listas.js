//Lista Enlazada

class Node { //crea una clase de un nodo de lista
    constructor(data) {  //se pasa como argumento al nodo, un dato o valor especifico
        this.data = data; //se declara ese valor en el campo de data
        this.next = null;  //se declara como siguiente elemento al nodo en null
    }
}

class LinkedList { //se crea una clase de lista enlazada
    constructor() {
        this.head = null; //el primer elemento de la lista es null, es decir que la lista está vacía
        this.size = 0; // por lo tanto el tamaño de la lista es cero.
    }

    appendList(node) {
        const newNode = new Node(node); //se crea un nuevo nodo con el valor de entrada
        let current = this.head; //nos posicionamos en el primer elemento de la lista
        if (!current) { //si la lista está vacía,
            this.head = newNode; //agrega el nodo como primer elemento
        } else {
            while (current.next) { //sino, mientras no lleguemos al final de la lista
                current = current.next; //recorre al siguiente elemento
            }
            current.next = newNode; //llegamos al final de la lista, agrega ahi el nuevo elemento.
        }
        this.size++; //incrementa el tamaño de la lista en uno
    }

    multiAppend(arr) { //metodo para agregar un arreglo de elementos a ua lista entrelazada.
        arr.forEach((node) => { //por cada elemento en el arreglo
            this.appendList(node); //se agrega como nodo en la lista
        })
    }

    printList() { //metodo para imprimir una lista entrelazada
        let current = this.head; //nos posicionamos en el primer elemento de la lista
        if (!current) { //si la lista está vacía
            return "La lista está vacía.";
        } else { //si la lista no está vacía
            let str = ""; //se crea una variable que va a incluir la lista impresa
            while (current) { //mientras la listá no esté vacía
                str += current.data + " --> "; //agrega a la lista impresa el elemento de la lista
                current = current.next; //nos movemos al siguiente elemento
            }
            str += "Null"; //a final de la lista a imprimir se agrega null, indicando fin de la lista.
            return str; //regresa la lista a imprimir
        }
    }

    removeList(node) { //metodo para remover un elemento de la lista
        let current = this.head; //nos posicionamos en el primer elemento de la lista
        let prev = null; // se define una variable donde almacenaremos el elemento anterior de la lista al que estemos actualmente

        while (current) { //mientras la lista no esté vacía
            if (current.data === node) { //si el valor del nodo actual es el valor que queremos buscar
                if (prev === null) { //y si es el primer elemento de la lista
                    this.head = current.next; //entonces el inicio de la lista será el siguiente elemento
                } else { //y si ese valor que estamos removiendo no era el primero de la lista
                    prev.next = current.next; //entonces enlazamos el nodo anterior con el siguiente
                }
                this.size--; //reducimos el tamaño de la lista
                return current.data; //regresamos el valor del nodo eliminado.
            }
            prev = current; //si no se encontró en esta iteración el nodo buscando, entonces el nodo anterior es el actual y
            current = current.next; //el actual es el siguiente, es decir que nos movemos al siguiente elemento.

        }
        return console.log("Nodo no encontrado");
    }

    findList(node) { //metodo para buscar un elemento en una lista
        let current = this.head; //nos posicionamos en el primer elemento de la lista
        while (current) { // mientras la lista no esté vacía 
            if (current.data === node) { //ya se encontró el dato
                return current.data; //regresa el dato encontrado
            } else { //sino
                current = current.next;  // avanza un elemento en la lista
            }
        }
        return null; //no se encontro nada
    }

    sizeList() { // metodo para definir el tamaño de una lista
        let count = 0; //inicialmente la lista se asume vacia
        let current = this.head; // nos posicionamos en el primer elemento de la lista
        while (current) { //mientras la lista no esté vacía
            count++; // contamos el elemento
            current = current.next; //pasamos al siguiente elemento
        }
        return count; // regresamos el conteo final
    }

    clearList() { //metodo para borrar el contendio de una lista
        this.head = null; //indicamos que el elemento inicial de la lista es null
    }

    getLastList() { //metodo para obtener el ultimo elemento de una lista
        let current = this.head; //nos posicionamos en el primer elemento de la lista
        if (current) { //si el nodo no esta vacio
            while (current.next) { //mientras la lista no esté vacía
                current = current.next; //nos movemos al siguiente elemento
            }
        }
        return current.data; //al final, regresamos el dato del ultimo elemento
    }

    getFirstList() {
        return this.head.data;
    }

    insertNodeList(node, position) { //metodo para insertar un nodo en una posicion especifica de la lista
        if (position < 1 || position > this.size) { //si la posicion indicada es menor a cero o es mayor al numero de elementos de la lista, marca error.
            return console.log("Inserta una posición válida.");
        } else { //si la posicion es valida entonces
            const newNode = new Node(node); //crea un nodo nuevo
            let current = this.head; //nos posicionamos en el primer nodo de la lista
            let prev = null; // se define una variable donde almacenaremos el elemento anterior de la lista al que estemos actualmente
            let count = 1; //definimos un contador que indica que estamos en la primera posición de la lista (se considera que la lista empieza con indice=1)
            if (position === 1) { //si el nuevo nodo se desea insertar en la primera posicion,
                newNode.next = this.head; // el nodo que era el primero, lo movemos despues del nuevo que estamos introduciendo
                this.head = newNode; // insertamos nuevo nodo en la primera posicion
            } else { //si el nuevo nodo a insertar no es en la primera posicion, 
                while (count < position) { //mientras la posicion en la que estemos sea menor a la posicion a donde queremos insertar el nuevo elemento,
                    prev = current; //avanzamos al siguiente elemento, el nodo anterior es el actual y
                    current = current.next; //el actual se convierte en el siguiente
                    count++; //incrementamos nuestro contador
                }
                newNode.next = current; //encontramos la posicion donde queremos insertar nuestro nuevo nodo y lo insertamos,
                prev.next = newNode; //y linkeamos nuestro nodo nuevo insertado con el anterior
            }
            this.size++; //incrementamos el tamaño de la lista
        }
    }

    revertList() { //metodo para invertir la lista
        let current = this.head; //nos posicionamos en el primer nodo de la lista
        if (!current) { //si la lista está vacia, marcamos un error
            return "La lista está vacía.";
        } else { //si la lista no está vacíam entonces,
            let prev = null; // se define una variable donde almacenaremos el elemento anterior al que estemos actualmente
            let sig = null; // se define una variable donde almacenaremos el elemento siguiente al que estemos actualmente
            while (current) { //mientras la lista no esté vacía,
                sig = current.next; //definimos en nuestra variable siguiente, el siguiente nodo
                current.next = prev; // el que antes era el siguiente nodo se convierte en el anterior
                prev = current; //el que antes era el anterior nodo se convierte en el actual
                current = sig; //el actual y el sigueinte son los mismos
            }
            this.head = prev; // y cuando lleguemos al final de la lista, ahora el primer nodo (cabeza) se convierte en el nodo anterior.
            return this; //regresa la lista invertida
        }
    }

    removeDuplicateList() { //metodo para remover duplicados de una lista
        const listaTemp = new LinkedList(); //definimos una lista temporal vacía
        let current = this.head; //nos posicionamos en el primer nodo de la lista original
        let prev = null; // se define una variable donde almacenaremos el elemento anterior al que estemos actualmente

        while (current) { //mientras la lista no esté vacía,
            if (listaTemp.findList(current.data)) { //si el nodo actual ya está en la lista temporal,
                prev.next = current.next; //entonces es un nodo duplicado y lo borramos, enlazando el siguiente elemento con el anterior
            } else { //si el nodo actual no está en la lista temporal
                listaTemp.appendList(current.data); //agregamos el nodo a la lista temporal
                prev = current; //el que antes era el anterior nodo se convierte en el actual
            }
            current = current.next; //nos movemos al siguiente nodo
        }
    }

    makeLoopList() { // metodo para hacer una lista loop
        let current = this.head; //nos posicionamos en el primer nodo
        if (current) { //si el nodo no esta vacio
            while (current.next) { //mientras la lista no esté vacía
                current = current.next; //nos movemos al siguiente elemento
            }
        }
        current.next = this.head; //al final, enlazamos el ultimo nodo a la cabeza (se hace el loop)
    }


    detectLoopList() { //metodo para detectar un loop en una lista, usando el metodo de Floyd
        if (this.head === null) { // si la lista esta vacia,
            return false; //regresa falso
        }
        let slowPointer = this.head; //creamos un apuntador que apunta al primer nodo de la lista
        let fastPointer = this.head.next; //creamos otro apuntador que apunta al segundo nodo de la lista
        do {  //ciclo que mientras los dos punteros no se encuentren, se repita. Si se encuentran, quiere decir que es un loop y regresa true.
            if (fastPointer === null || fastPointer.next === null) { //si el nodo a donde apunta el puntero fast o el siguiente nodo no son nodos finales, entonces
                return false; //regresa falso
            }
            slowPointer = slowPointer.next; //sino apuntador slow se mueve al siguiente y 
            fastPointer = fastPointer.next.next; //apuntadot fast se mueve al siguiente
        } while (slowPointer !== fastPointer);
        return true;
    }

    findMiddleList() { //metodo para encontrar el nodo que esta justo enmedio de una lista.
        if (this.head === null) { // si la lista esta vacia,
            return false; //regresa falso
        }
        let slowPointer = this.head; //creamos un apuntador que apunta al primer nodo de la lista
        let fastPointer = this.head; //creamos otro apuntador que apunta al segundo nodo de la lista
        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next; //sino apuntador slow se mueve al siguiente y 
            fastPointer = fastPointer.next.next; //apuntadot fast se mueve al siguiente
        }
        return slowPointer.data; //regresa el nodo de enmedio
    }

    deleteNthReverseList(n) { //Meotodo para eliminar el nodo "n" de la lista, pero en orden inverso
        if (this.head === null) { // si la lista esta vacia,
            return false; //regresa falso
        }
        let firstPointer = this.head;
        let secondPointer = this.head;

        for (let i = 1; i <= n; i++) {
            if (!firstPointer.next) {
                if (i === n) {
                    this.head = this.head.next;
                    return
                }
                throw new Error("n es mayor que la longitud de la lista");
            }
            firstPointer = firstPointer.next;
        }
        while (firstPointer.next !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }
        secondPointer.next = secondPointer.next.next;
    }
}


/* 1. Inversión de una Lista Enlazada
Escriba una función que tome una lista enlazada y la invierta, de modo que la cabeza se convierta en la cola y viceversa.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 4
Salida: 4 -> 3 -> 2 -> 1 */
console.log(`\n Ejericio 1. \n`);
const miLista = new LinkedList();
miLista.multiAppend([1, 20, 300, 4000, 20, 1, 350, 4000, 20, 500]);
console.log(`La Lista original es: ${miLista.printList()}`);
miLista.revertList();
console.log(`La Lista invertida es: ${miLista.printList()}\n`);

/* 2. Eliminar Duplicados
Escriba una función que elimine nodos duplicados de una lista enlazada no ordenada.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 2 -> 1
Salida: 1 -> 2 -> 3 */
console.log(`Ejericio 2. \n`);
console.log(`La Lista original es: ${miLista.printList()}`);
miLista.removeDuplicateList();
console.log(`La Lista sin duplicados es: ${miLista.printList()}\n`);

/* 3. Detectar un Ciclo
Determine si una lista enlazada tiene un ciclo. Un ciclo ocurre si algún nodo en la lista enlazada apunta a un nodo anterior en lugar de apuntar a null o a otro nodo futuro.
Pista: Puede usar el enfoque de "tortuga y liebre" (Floyd's Cycle-Finding Algorithm). */
console.log(`Ejericio 3. \n`);
console.log(`La Lista original es: ${miLista.printList()}`);
console.log(`La Lista original es un loop? ${miLista.detectLoopList()}`);
console.log("Enloopamos la lista...");
miLista.makeLoopList();
console.log(`La Lista ya modificada es un loop? ${miLista.detectLoopList()}\n`);

/* 4. Encontrar el Nodo Medio
Escriba una función que encuentre y retorne el nodo medio de una lista enlazada.
Si la lista tiene un número par de nodos, retorne el segundo nodo medio.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 4 -> 5
Salida: 3
Entrada: 1 -> 2 -> 3 -> 4 -> 5 -> 6
Salida: 4 */
console.log(`Ejericio 4. \n`);
const miLista2 = new LinkedList();
miLista2.multiAppend([1, 20, 300, 4000, 20, 1, 350, 4000, 20, 500]);
console.log(`La Lista original es: ${miLista2.printList()}`);
console.log(`El nodo de enmedio es: ${miLista2.findMiddleList()}\n`);



/* 5. Eliminar el n-ésimo Nodo desde el Final
Escriba una función que elimine el n-ésimo nodo desde el final de la lista enlazada y retorne la cabeza de la lista.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 4 -> 5, n = 2
Salida: 1 -> 2 -> 3 -> 5 */
console.log(`Ejericio 5. \n`);
console.log(`La Lista original es: ${miLista2.printList()}`);
miLista2.deleteNthReverseList(2);
console.log(`La Lista modificada es: ${miLista2.printList()}\n`);



/* 6. Combinar Dos Listas Enlazadas Ordenadas
Dadas dos listas enlazadas ordenadas de manera ascendente, combine las dos listas en una sola lista enlazada también ordenada.
Ejemplo:
Entrada: 1 -> 3 -> 5 y 2 -> 4 -> 6
Salida: 1 -> 2 -> 3 -> 4 -> 5 -> 6 */

function mergeTwoSortedList(list1, list2) { //funcion que combina dos listas ordenadas
    let dummyNode = new Node();
    let current = dummyNode;
    let pointer1 = list1.head;
    let pointer2 = list2.head;
    let str = "";

    while (pointer1 !== null && pointer2 !== null) {
        if (pointer1.data <= pointer2.data) {
            current.next = pointer1;
            pointer1 = pointer1.next;
        } else {
            current.next = pointer2
            pointer2 = pointer2.next;
        }
        current = current.next;
    }
    if (pointer1 !== null) {
        current.next = pointer2;
    }
    if (pointer2 !== null) {
        current.next = pointer1;
    }
    while(dummyNode.next) { //Imprime en una string la lista
        str += dummyNode.next.data + " --> "; 
        dummyNode.next = dummyNode.next.next; 
    }
    str += "Null";
    return str;
}


console.log(`Ejericio 6. \n`);
const miListaA = new LinkedList();
const miListaB = new LinkedList();
let miListaC = new LinkedList();
miListaA.multiAppend([1, 4, 7, 9, 14, 23]);
miListaB.multiAppend([3, 5, 10, 12, 18, 21]);
console.log(`La Lista A es: ${miListaA.printList()}`);
console.log(`La Lista B es: ${miListaB.printList()}\n`);
miListaC = mergeTwoSortedList(miListaA, miListaB);
console.log(`La Lista combinada es: ${miListaC}\n`);
