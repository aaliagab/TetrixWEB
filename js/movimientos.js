let fila_inicial = 0;
let columna_inicial = 4;
let rotacion = 0;//puede ser 0,1,2,3
let record = 0;

import * as control from "./control.js";

export function caidaConstante() {
    while (!control.pausa) {
        let myVar = setTimeout(moveDown(control.figura_actual), control.timedown);
        clearTimeout(myVar);
    }
}

//caidaConstante();

export function iniciarNuevaFigura() {
    fila_inicial = 0;
    columna_inicial = 4;
    rotacion = 0;
    borrarFilas();
    control.colocarFiguras();
}

function isFilaCompleta(fila) {
    let columna = 0;
    while (columna < 12) {
        //console.log(fila+" - "+columna);
        if (document.getElementById('img-' + (fila) + '-' + columna).className == 'cnone')
            return false;
        columna++;
    }
    return true;
}

function copiarFila(origen, destino) {
    for (let i = 0; i < 12; i++) {
        if (origen < 16 && destino < 16)
            document.getElementById('img-' + (destino) + '-' + i).className =
                document.getElementById('img-' + (origen) + '-' + i).className;
    }
}

function limpiarFila(fila) {
    for (let i = 0; i < 12; i++) {
        document.getElementById('img-' + (fila) + '-' + i).className = 'cnone';
    }
}

function borrarFilas() {
    let inicio = -1;
    let fin = -1;
    let fila = 0;
    while (fila < 16 && !isFilaCompleta(fila)) {
        fila++;
    }
    if (fila > 0 && fila < 16) {
        inicio = fila;
        fin = fila;
    }
    fila++;
    while (fila < 16 && isFilaCompleta(fila)) {
        fila++;
    }
    fin = fila - 1;

    let i = inicio - 1;
    if (inicio >= 0) {
        record += (12 * Math.pow(2, fin - inicio + 1));
        document.getElementById('recordnum').textContent = parseInt(record);
    }
    while (fin >= 0 && inicio >= 0) {
        if (i < 0) {
            limpiarFila(fin--);
            i--;
        }
        else {
            copiarFila(i--, fin--);
        }
    }

}

function isVacio(fila, columna) {
    return document.getElementById('img-' + fila + '-' + columna).className == 'cnone';
}

import * as cuadrado from "./movimientos_cuadrado.js";
import * as linea from "./movimientos_linea.js";
import * as s from "./movimientos_s.js";
import * as sinvertida from "./movimientos_sinvertida.js";
import * as t from "./movimientos_t.js";
import * as l from "./movimientos_l.js";
import * as linvertida from "./movimientos_linvertida.js";




export function moveDown(figura_actual) {
    if (figura_actual == 'linea') {
        linea.moveDown();
    } else if (figura_actual == 'T') {
        t.moveDown();
    } else if (figura_actual == 'Linvertida') {
        linvertida.moveDown();
    } else if (figura_actual == 'L') {
        l.moveDown();
    } else if (figura_actual == 'S') {
        s.moveDown();
    } else if (figura_actual == 'Sinvertida') {
        sinvertida.moveDown();
    } else {//figura_actual == 'cuadrado'
        cuadrado.moveDown();
    }
}

export function moveLeft(figura_actual) {
    if (figura_actual == 'linea') {
        linea.moveLeft();
    } else if (figura_actual == 'T') {
        t.moveLeft();
    } else if (figura_actual == 'Linvertida') {
        linvertida.moveLeft();
    } else if (figura_actual == 'L') {
        l.moveLeft();
    } else if (figura_actual == 'S') {
        s.moveLeft();
    } else if (figura_actual == 'Sinvertida') {
        sinvertida.moveLeft();
    } else {//figura_actual == 'cuadrado'
        cuadrado.moveLeft();
    }
}

export function moveRight(figura_actual) {
    if (figura_actual == 'linea') {
        linea.moveRight();
    } else if (figura_actual == 'T') {
        t.moveRight();
    } else if (figura_actual == 'Linvertida') {
        linvertida.moveRight();
    } else if (figura_actual == 'L') {
        l.moveRight();
    } else if (figura_actual == 'S') {
        s.moveRight();
    } else if (figura_actual == 'Sinvertida') {
        sinvertida.moveRight();
    } else {//figura_actual == 'cuadrado'
        cuadrado.moveRight();
    }
}


export function moveRotar(figura_actual) {
    if (figura_actual == 'linea') {
        linea.rotar();
    } else if (figura_actual == 'T') {
        t.rotar();
    } else if (figura_actual == 'Linvertida') {
        linvertida.rotar();
    } else if (figura_actual == 'L') {
        l.rotar();
    } else if (figura_actual == 'S') {
        s.rotar();
    } else if (figura_actual == 'Sinvertida') {
        sinvertida.rotar();
    } else {//figura_actual == 'cuadrado'

    }
}