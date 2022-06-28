let fila_inicial = 0;
let columna_inicial = 4;
let rotacion = 0;//puede ser 0,1,2,3
let record = 0;

import * as control from "./control.js";

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
        //$('body').css('background-image', 'url(../images/fondo.jpg)');
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