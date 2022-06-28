let fila_inicial = 0;
let columna_inicial = 4;
let rotacion = 0;//puede ser 0,1,2,3
let record = 0;
let down = 0;

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

function esperarTiempo(milisegundo) {

    let inicio = new Date().getTime();
    let end = new Date().getTime();
    while ((end - inicio) < milisegundo) {
        end = new Date().getTime();
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
        const music = new Audio('../song/rayo.mp3');
        music.play();
        //$('body').css('background-image', 'url(../images/rayo.gif)');
        record += (12 * Math.pow(2, fin - inicio + 1));
        document.getElementById('recordnum').textContent = parseInt(document.getElementById('recordnum').textContent) + parseInt(record);
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

function canLeft() {
    return columna_inicial > 0 &&
        isVacio(fila_inicial, columna_inicial - 1) &&
        isVacio(fila_inicial + 1, columna_inicial - 1);
}

function canRight() {
    return columna_inicial < 10 &&
        isVacio(fila_inicial, columna_inicial + 2) &&
        isVacio(fila_inicial + 1, columna_inicial + 2);
}

function canDown() {
    return fila_inicial < 14 &&
        isVacio(fila_inicial + 2, columna_inicial) &&
        isVacio(fila_inicial + 2, columna_inicial + 1);
}

//MOVIMIENTOS CUADRADO
export function moveDown() {
    if (canDown()) {
        document.getElementById('img-' + (fila_inicial) + '-' + (columna_inicial)).className = 'cnone';
        document.getElementById('img-' + (fila_inicial) + '-' + (columna_inicial + 1)).className = 'cnone';
        document.getElementById('img-' + (fila_inicial + 2) + '-' + (columna_inicial)).className = 'crojo';
        document.getElementById('img-' + (fila_inicial + 2) + '-' + (columna_inicial + 1)).className = 'crojo';
        fila_inicial++;
        if (!canLeft() && !canRight() && !canDown()) {
            iniciarNuevaFigura();
        }
    } else if (down == 1) {
        iniciarNuevaFigura();
        down = 0;
    } else if (down == 0) {
        down++;
    }

}

export function moveLeft() {
    if (canLeft()) {
        document.getElementById('img-' + (fila_inicial) + '-' + (columna_inicial + 1)).className = 'cnone';
        document.getElementById('img-' + (fila_inicial + 1) + '-' + (columna_inicial + 1)).className = 'cnone';
        document.getElementById('img-' + (fila_inicial) + '-' + (columna_inicial - 1)).className = 'crojo';
        document.getElementById('img-' + (fila_inicial + 1) + '-' + (columna_inicial - 1)).className = 'crojo';
        columna_inicial--;
        if (fila_inicial == 14 && columna_inicial == 0 && !canRight()) {
            iniciarNuevaFigura();
        }
    }
}

export function moveRight() {
    if (canRight()) {
        document.getElementById('img-' + (fila_inicial) + '-' + (columna_inicial)).className = 'cnone';
        document.getElementById('img-' + (fila_inicial + 1) + '-' + (columna_inicial)).className = 'cnone';
        document.getElementById('img-' + (fila_inicial) + '-' + (columna_inicial + 2)).className = 'crojo';
        document.getElementById('img-' + (fila_inicial + 1) + '-' + (columna_inicial + 2)).className = 'crojo';
        columna_inicial++;
        if (fila_inicial == 14 && columna_inicial == 10 && !canLeft()) {
            iniciarNuevaFigura();
        }
    }
}