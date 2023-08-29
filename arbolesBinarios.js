class TreeNode { //Clase para crear el nodo de un árbol binario
    constructor(value) {
        this.value = value; // El valor del nodo
        this.left = null; //hijo izquierdo
        this.right = null; //hijo derecho
    }
}

class BinaryTree { //clase para crear un árbol binario
    constructor() {
        this.root = null; // indica la raiz
    }

    insertTree(value) { //metodo para insertar un nodo en el arbol
        const newNode = new TreeNode(value); //se crea un nodo nuevo
        if (!this.root) { // si el arbol está vacio,
            this.root = newNode; //entonces el nuevo nodo a insertar se convierte en la raiz y
            return; //finaliza el metodo
        }
        let current = this.root; //sino, entonces nos posicionamos en la raiz
        while (true) {//ciclo que buscará donde insertar el nodo. No tiene fin. Solamente se interrumpirá hasta encontrar la posición a insertar
            if (value < current.value) { // si el valor del nodo a insertar es menor al valor del nodo actual, 
                if (!current.left) { //y si el nodo actual no tiene hijo izquierdo,
                    current.left = newNode; // entonces insertamos el nodo como hijo izquierdo del nodo actual
                    return; //termina el metodo
                }
                current = current.left; //si el nodo actual si tiene un hijo izquierdo, entonces nos movemos al hijo izquierdo
            } else { //si el valor actual del nodo a insertar es igual o mayor al nodo actual
                if (!current.right) { //y si el nodo actual no tiene hijo derecho,
                    current.right = newNode; //entonces insertamos el nodo como hijo derecho del nodo actual
                    return; //termina el metodo
                }
                current = current.right; //si el nodo actual tiene un hijo derecho, entonces nos movemos al hijo derecho
            }
        }
    }

    multiInsertTree(arr) { //metodo para insertar un arreglo de datos en un arbol binario
        arr.forEach((node) => { //ciclo que por cada elemento del arreglo,
            this.insertTree(node); //se inserta como nodo nuevo en el arbol, usando el metodo insertTree
        })
    }

    searchTree(value) { //metodo para buscar un nodo en un arbol binario
        let current = this.root; //nos posicionamos en la raiz
        while (current) { //mientras no lleguemos al final del arbol
            if (value === current.value) { // si el valor buscado es igual al valor del nodo actual,
                return true; //regresa true (ya se encontró)
            }
            if (value < current.value) { //si el valor buscado es menor al valor del nodo actual, entonces
                current = current.left; //nos movemos al hijo izquierdo
            } else { // y si no
                current = current.right; //nos movemos al hijo derecho
            }
        }
        return false; //si no se encontró, regresa false
    }

    deleteTree(value) { //metodo para borrar un nodo de un arbol binario
        let current = this.root; //nos posicionamos en la raiz del arbol
        let parent = null; //creamos una variable temporal que va a indicar al padre del nodo en el que estemos.
        while (current) { //mientras haya nodos en el arbol,
            if (value === current.value) { //si el valor del nodo actual es igual al nodo que queremos borrar, entonces
                break; //nos salimos del while
            }
            parent = current; //sino, hacemos que el nodo padre sea el nodo actual y 
            current = value < current.value ? current.left : current.right; //el nodo actual se mueve al hijo, al izquierdo si el valor que buscamos es menor o al derecho, si el valor que buscamos es mayor.
        }
        if (!current) { //no se encontró el nodo y entonces,
            return; //nos salimos del metodo
        }
        if (!current.left && !current.right) { //si ya encontramos el valor a eliminar y éste no tiene ni hijo izq. ni hijo der., entonces,
            if (!parent) { //si el nodo actual es la raiz, es decir no tiene padre (padre = null),
                this.root = null; //borramos la raiz
            } else { //si no es raiz, entonces, 
                if (parent.left === current) { //si el nodo es un hijo izquierdo,
                    parent.left = null; //entonces borramos al hijo desde su referencia del padre
                } else { // y si no, entonces significa que el hiho derecho es el que hay que borrar
                    parent.right = null; //se borra el hijo derecho
                }
            }
        } else if (!current.left || !current.right) { // si el nodo a borrar solamnete tiene un hijo (puede ser el drecho o el izquierdo)
            const child = current.left ? current.left : current.right; //creamos una variable para el hijo del nodo a borrar
            if (!parent) { //si el nodo actual es la razi, 
                this.root = child; // entonces el hijo se recorre y se vuelve la raiz (la raiz original se elimina)
            } else { //si el nodo actual no es la raiz, 
                if (parent.left === current) { //si el nodo a borrar es un padre de un hijo izquierdo, entonces
                    parent.left = child; //el hijo izquierdo se vuelve el padre, 
                } else { //y sino entonces es el hijo izquierdo el que se vuelve el padre
                    parent.right = child;
                }
            }
        } else { //Y si el nodo a eliminar tiene sus dos hijos completos,
            let successor = current.right; //empezamos primero con el hijo derecho, que lo ponemos en una variable llamada successor
            parent = current; //al nodo actual lo designamos como padre
            while (successor.left) { //recorremos el sub-arbol derecho por los nodos de la izquierda, y mientras no lleguemos al fina,
                parent = successor; //nos recorremos, el hijo se vuelve el padre
                successor = successor.left; //y el hijo izquierdo se vuelve el hijo en cuestion.
            }
            current.value = successor.value; //reemplazamos el nodo a eliminar con el del sucesor
            if (parent.left === successor) { //eliminamos al sucesor
                parent.left = successor.right;
            } else {
                parent.right = successor.right; //eliminamos al sucesor
            }
        }
    }

    // Método para recorrer el árbol en orden transversal
    inOrderTravesalTree() {
        const result = [] // Array para almacenar los nodos en su orden in-order
        const stack = []  // Pila para ayudar con el recorrido
        let current = this.root // Comenzamos desde la raíz

        // Este bucle se ejecuta mientras haya nodos en la pila o aún no hayamos llegado a un nodo nulo
        while (current !== null || stack.length > 0) {
            // Vamos lo más a la izquierda posible y almacenamos cada nodo en la pila
            while (current !== null) {
                stack.push(current)
                current = current.left
            }
            // Visitamos el nodo actual (el último en la pila)
            current = stack.pop()
            result.push(current.value)
            // Finalmente, intentamos ir al subárbol derecho

            current = current.right
        }
        return result // Devolvemos los nodos en su orden in-order
    }

    compareTree(tree) {
        let tree1 = this.root;
        let tree2 = tree.root;

        if (tree1.value !== tree2.value) {
            return false;
        }

        const reviewLeft = (left1, left2) => {
            if (left1 == null || left2 == null) {
                if ((left1 && !left2) || (!left1 && left2)) {
                    return false;
                }
                return true;
            }
            if (left1.value != left2.value) {
                return false;
            }
            return reviewLeft(left1.left, left2.left);
        }
        const reviewRight = (right1, right2) => {
            if (right1 == null || right2 == null) {
                if ((right1 && !right2) || (!right1 && right2)) {
                    return false;
                }
                return true;
            }
            if (right1.value !== right2.value) {
                return false;
            }
            return reviewRight(right1.right, right2.right);
        }
        return reviewLeft(tree1.left, tree2.left) && reviewRight(tree1.right, tree2.right);
    }

    duplicateTree() {
        let duplicate = new BinaryTree;
        return duplicate.root = this.root;
    }

    printTree() {
        return this.root;
    }

    countNumberLeavesTree() {

        let stack = [];
        stack.push(this.root);
        let count = 0;
        while(stack.length > 0) {
            let temp = stack.shift();
            if(temp.left === null && temp.right === null) {
                count++;
            }
            if(temp.left) {
                stack.push(temp.left);
            }
            if(temp.right) {
                stack.push(temp.right);
            }
        }
        return count;
    }

    printNLevelNodesTree(n) {
        if(this.root === null) {
            return;
        }
        let stack = [];
        let result = [];
        stack.push(this.root);
        let current = null;
        let level = 0;
        while (stack.length > 0) {
            level++;
            let size = stack.length;
            while(size !== 0) {
                current = stack[0];
                stack.shift();
                if(level === n) {
                    result.push(current.value);
                }
                if(current.left !== null) {
                    stack.push(current.left);
                }
                if(current.right !== null) {
                    stack.push(current.right);
                }
                size--;
            }
        }
        return result;
    }

}



const miArbolB = new BinaryTree();
const miArbolB2 = new BinaryTree();

miArbolB.multiInsertTree([5, 3, 7, 2, 4, 6, 8, 34, 5, 6, 7, 89, 6]);
miArbolB2.multiInsertTree([5, 3, 7, 2, 4, 6, 8]);

console.log(`El arbol original es:`);
console.log(miArbolB.printTree())
console.log(`El arbol B es:`);
console.log(miArbolB2.printTree())

console.log(`Es igual el arbol original al arbol B? ${miArbolB.compareTree(miArbolB2)}`);

const miArbol3 = miArbolB.duplicateTree();
console.log(`La copia del arbol original es :`);
console.log(miArbol3);


console.log(`Los valores transversales del arbol original son: ${miArbolB.inOrderTravesalTree()}`);

console.log(`El numero 1 está en el arbol Original? ${miArbolB.searchTree(1)}`);

miArbolB.deleteTree(7);
console.log(miArbolB.printTree());

console.log(`El numero de hojas que tiene el arbol B es de: ${miArbolB2.countNumberLeavesTree()}`);
console.log(miArbolB.printNLevelNodesTree(4));