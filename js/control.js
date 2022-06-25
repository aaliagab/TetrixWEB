
let tbody = document.getElementById('bodytable');
let trcount = 0;
function addTr(){    
    let tdcount = 0;
    let tr = document.createElement('tr');
    tr.id = 'tr-'+trcount;    
    while(tdcount <12){
        let td = document.createElement('td');
        td.id = 'td-'+trcount+'-'+tdcount;               
        let img = document.createElement('img');
        img.id = 'img-'+trcount+'-'+tdcount;
        img.className = 'cnone';
        td.appendChild(img);
        tr.appendChild(td);
        //console.log(img.className+' '+td.id);
        tdcount++;         
    }    
    tdcount = 0;
    trcount++;
    tbody.appendChild(tr);
}

function addAllTr(){
    while(trcount<16){                
        addTr();
    }
}
addAllTr();

function valorRandom(){
    return Math.random()*7 | 0;
}


import * as figuras from "./figuras.js";
let figs = new Array(10000);
function crearFiguras(){
    let i = 0;
    while(i<figs.length){
        if(valorRandom()==0)
            figs[i] = figuras.crearSInvertida();
        else if(valorRandom()==1)
            figs[i] = figuras.crearS();
        else if(valorRandom()==2)
            figs[i] = figuras.crearL();
        else if(valorRandom()==3)
            figs[i] = figuras.crearLInvertida();
        else if(valorRandom()==4)
            figs[i] = figuras.crearLinea();
        else if(valorRandom()==5)
            figs[i] = figuras.crearT();
        else
            figs[i] = figuras.crearCuadrado();
        i++;
    }
}

crearFiguras();

let position = 0;

function colocarFiguraProxima(){
    if(figs[position+1][1][0].className == 'cagua'){
        document.getElementById('imgProx').src = '../images/pequenas40px/linea.png';
    }else if(figs[position+1][1][0].className == 'camarillo'){
        document.getElementById('imgProx').src = '../images/pequenas40px/T.png';
    }else if(figs[position+1][1][0].className == 'cazul'){
        document.getElementById('imgProx').src = '../images/pequenas40px/Linvertida.png';
    }else if(figs[position+1][1][0].className == 'cverde'){
        document.getElementById('imgProx').src = '../images/pequenas40px/L.png';
    }else if(figs[position+1][1][0].className == 'cmorado'){
        document.getElementById('imgProx').src = '../images/pequenas40px/S.png';
    }else if(figs[position+1][1][0].className == 'cnaranja'){
        document.getElementById('imgProx').src = '../images/pequenas40px/Sinvertida.png';
    }else{
        document.getElementById('imgProx').src = '../images/pequenas40px/cuadrado.png';
    }
}

export let figura_actual = '';

export function colocarFiguras(){
    if(figs[position][1][0].className == 'cagua'){
        //dibuja linea color agua
        figura_actual = 'linea';
        document.getElementById('img-'+0+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+2+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+3+'-'+4).className = figs[position][1][0].className;
    }else if(figs[position][1][0].className == 'camarillo'){
        //dibuja T color amarillo
        figura_actual = 'T';
        document.getElementById('img-'+0+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+2+'-'+5).className = figs[position][1][0].className;
    }else if(figs[position][1][0].className == 'cazul'){
        //dibuja Linvertida color azul
        figura_actual = 'Linvertida';
        document.getElementById('img-'+0+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+6).className = figs[position][1][0].className;
    }else if(figs[position][1][0].className == 'cverde'){
        //dibuja L color verde
        figura_actual = 'L';
        document.getElementById('img-'+0+'-'+6).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+6).className = figs[position][1][0].className;
    }else if(figs[position][1][0].className == 'cmorado'){
        //dibuja S color morado
        figura_actual = 'S';
        document.getElementById('img-'+0+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+0+'-'+6).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+5).className = figs[position][1][0].className;
    }else if(figs[position][1][0].className == 'cnaranja'){
        //dibuja Sinvertida color naranja
        figura_actual = 'Sinvertida';
        document.getElementById('img-'+0+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+2+'-'+4).className = figs[position][1][0].className;
    }else{
        //dibuja cuadrado color rojo
        figura_actual = 'cuadrado';
        document.getElementById('img-'+0+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+0+'-'+5).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+4).className = figs[position][1][0].className;
        document.getElementById('img-'+1+'-'+5).className = figs[position][1][0].className;
    }
    colocarFiguraProxima();
    position++;
}

import * as move from "./movimientos.js";
export let pausa = false;
export let timedown = 1000; //tiempo de caida
document.onkeydown = function(e) {
    if(e.key=='ArrowDown' && !pausa)
    {
        move.moveDown(figura_actual);
    }else if(e.key=='ArrowRight' && !pausa)
    {
        move.moveRight(figura_actual);
    }else if(e.key=='ArrowLeft' && !pausa)
    {
        move.moveLeft(figura_actual);
    }else if(e.key=='ArrowUp' && !pausa)
    {
        move.moveRotar(figura_actual);
    }else if(e.key=='P')
    {
        console.log(e.key);
       pausa = !pausa;
    }
    //alert(e.key+e.keyCode); // shows k75
};



function gameStart(){
    colocarFiguras(); 
    //move.caidaConstante();
}

gameStart();

//document.getElementById('img-'+5+'-'+5).className = figs[0][1][0].className;
//document.getElementById('img-'+5+'-'+5).className = 'crojo';
//console.log('Figura '+figs[5]);