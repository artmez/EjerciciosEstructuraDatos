/* Estructura de Cola */

class Cola {
    constructor() {
        this.items = [];
    }


    encolar(element) {
        this.items.push(element);
    }

    desencolar() {
        if (this.isEmpty()) {
            return `La cola está vacía`;
        } else {
            return this.items.shift();
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    sizeCola() {
        return this.items.length;
    }

    peekCola() {
        return this.items[0];
    }

    getCola() {
        return this.items;
    }

    appendCola(arr) {
        arr.forEach((e) => this.encolar(e));
    }

    alternaCola() {
        let colaNon = new Cola();
        let colaPar = new Cola();
        for (let i = 0; i < this.sizeCola(); i++) {
            if (i % 2 === 0) {
                colaPar.encolar(this.items[i])
            } else {
                colaNon.encolar(this.items[i])
            }
        }
        return {colaNon, colaPar};
    }

    quitaColados() {
        let colaOriginal = new Cola();
        let colaFinal = new Cola();
        let arregloColados = new Cola();
        for (let i=this.sizeCola()-1;i>=0;i--) {
            if(this.items[i].ticket) {
                colaFinal.encolar(this.items[i].user);
            } else {
                arregloColados.encolar(this.items[i].user);
            }
            colaOriginal.encolar(this.items[i].user);
        } 
   
       return console.log(`La cola original es ${colaOriginal.items.reverse()},\nLos colados son: ${arregloColados.items.reverse()}\nY la cola final es ${colaFinal.items.reverse()}.`);

}
}

/* 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco] */

let miCola = new Cola();
miCola.appendCola(["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]);
console.log(miCola.alternaCola());

/* 6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
Cola: [ \n
{ user:‘User1’, ticket:true },\n
{ user:‘User2’, ticket:true },\n
{ user:‘User3’, ticket:false },\n
{ user:‘User4’, ticket:true },\n
{ user:‘User5’, ticket:false },\n
{ user:‘User6’, ticket:false },\n
{ user:‘User7’, ticket:true },\n
{ user:‘User8’, ticket:true },\n
{ user:‘User9’, ticket:true },\n
{ user:‘User10’, ticket:false },\n
{ user:‘User11’, ticket:true },\n
];\n */

let colaUsuarios = new Cola();
colaUsuarios.appendCola([
    { user: "User1", ticket:true },
    { user: "User2", ticket:true },
    { user: "User3", ticket:false },
    { user: "User4", ticket:true },
    { user: "User5", ticket:false },
    { user: "User6", ticket:false },
    { user: "User7", ticket:true },
    { user: "User8", ticket:true },
    { user: "User9", ticket:true },
    { user: "User10", ticket:false },
    { user: "User11", ticket:true }
    ]);

   
console.log(colaUsuarios.quitaColados())
