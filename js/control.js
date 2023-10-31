import * as move from "./movimientos.js";
import * as jugador from "./jugador.js";
export let pausa = true;
export let timedown = 1000; //tiempo de caida
export let velocity = false;
export let Level = 0;
export let levelUp = false;

let tbody = document.getElementById('bodytable');
let trcount = 0;
function addTr() {
    let tdcount = 0;
    let tr = document.createElement('tr');
    tr.id = 'tr-' + trcount;
    while (tdcount < 12) {
        let td = document.createElement('td');
        td.id = 'td-' + trcount + '-' + tdcount;
        let img = document.createElement('img');
        img.id = 'img-' + trcount + '-' + tdcount;
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

function addAllTr() {
    while (trcount < 16) {
        addTr();
    }
}
addAllTr();

function valorRandom() {
    //return Math.random() * 7 | 0;
    let num = Math.floor(Math.random()*7 | 0);
    return num;
}

/*
function obtenerNumeroAleatorio(x) {
    return Math.floor(Math.random() * x);
}

*/

import * as figuras from "./figuras.js";

/* Disable import of the ¨constant drop¨ method due to obsolescence */
// import { caidaConstante } from "./movimientos_linea.js";

let figs = new Array(10000);
function crearFiguras() {
    let i = 0;
    while (i < figs.length) {
        let figuraRandom = valorRandom();
        switch (figuraRandom) {
            case 0:
                figs[i] = figuras.crearSInvertida();
                break;
            case 1:
                figs[i] = figuras.crearS();
                break;
            case 2:
                figs[i] = figuras.crearL();
                break;
            case 3:
                figs[i] = figuras.crearLInvertida();
                break;
            case 4:
                figs[i] = figuras.crearLinea();
                break;
            case 5:
                figs[i] = figuras.crearT();
                break;
            case 6:
                figs[i] = figuras.crearCuadrado();
                break;
            default:
                figs[i] = figs[Math.floor(Math.random() * i)];
                break;
        }

        /*     
        if (figuraRandom == 0)
            figs[i] = figuras.crearSInvertida();
        else if (figuraRandom == 1)
            figs[i] = figuras.crearS();
        else if (figuraRandom == 2)
            figs[i] = figuras.crearL();
        else if (figuraRandom == 3)
            figs[i] = figuras.crearLInvertida();
        else if (figuraRandom == 4)
            figs[i] = figuras.crearLinea();
        else if (figuraRandom == 5)
            figs[i] = figuras.crearT();
        else if (figuraRandom == 6)
            figs[i] = figuras.crearCuadrado();
        else {
            //valorRandom()
            //figs[i] = figuras.crearCuadrado();
            console.log()
        }
        */
        i++;
    }
}

crearFiguras();

let position = 0;

function colocarFiguraProxima() {
    
    if (figs[position + 1][1][0].className == 'cagua') {
        document.getElementById('imgProx').src = '../images/pequenas40px/linea.png';
    } else if (figs[position + 1][1][0].className == 'camarillo') {
        document.getElementById('imgProx').src = '../images/pequenas40px/T.png';
    } else if (figs[position + 1][1][0].className == 'cazul') {
        document.getElementById('imgProx').src = '../images/pequenas40px/Linvertida.png';
    } else if (figs[position + 1][1][0].className == 'cverde') {
        document.getElementById('imgProx').src = '../images/pequenas40px/L.png';
    } else if (figs[position + 1][1][0].className == 'cmorado') {
        document.getElementById('imgProx').src = '../images/pequenas40px/S.png';
    } else if (figs[position + 1][1][0].className == 'cnaranja') {
        document.getElementById('imgProx').src = '../images/pequenas40px/Sinvertida.png';
    } else if (figs[position + 1][1][0].className == 'crojo'){
        document.getElementById('imgProx').src = '../images/pequenas40px/cuadrado.png';
    }else{
        document.getElementById('imgProx').src = '#'
    }
}

export let figura_actual = '';

export function colocarFiguras() {
    if (figs[position][1][0].className == 'cagua') {
        if (ocupado(0, 4, 1, 4, 2, 4, 3, 4)){ 
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja linea color agua
            figura_actual = 'linea';
            document.getElementById('img-' + 0 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 2 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 3 + '-' + 4).className = figs[position][1][0].className;
        }

    } else if (figs[position][1][0].className == 'camarillo') {
        if (ocupado(0, 5, 1, 4, 1, 5, 2, 5)){
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja T color amarillo
            figura_actual = 'T';
            document.getElementById('img-' + 0 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 2 + '-' + 5).className = figs[position][1][0].className;
        }        

    } else if (figs[position][1][0].className == 'cazul') {
        if (ocupado(0, 4, 1, 4, 1, 5, 1, 6)){
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja Linvertida color azul
            figura_actual = 'Linvertida';
            document.getElementById('img-' + 0 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 6).className = figs[position][1][0].className;
        }
        

    } else if (figs[position][1][0].className == 'cverde') {
        if (ocupado(0, 6, 1, 4, 1, 5, 1, 6)){
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja L color verde
            figura_actual = 'L';
            document.getElementById('img-' + 0 + '-' + 6).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 6).className = figs[position][1][0].className;
        }
        

    } else if (figs[position][1][0].className == 'cmorado') {
        if (ocupado(0, 5, 0, 6, 1, 4, 1, 5)){
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja S color morado
            figura_actual = 'S';
            document.getElementById('img-' + 0 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 0 + '-' + 6).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 5).className = figs[position][1][0].className;
        }
        

    } else if (figs[position][1][0].className == 'cnaranja') {
        if (ocupado(0, 5, 1, 4, 1, 5, 2, 4)){
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja Sinvertida color naranja
            figura_actual = 'Sinvertida';
            document.getElementById('img-' + 0 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 2 + '-' + 4).className = figs[position][1][0].className;
        }
        

    } else {
        if (ocupado(0, 4, 0, 5, 1, 4, 1, 5)){
            gameOverMensaje();
            //alert('GAME OVER SU RECORD ES ' + document.getElementById('recordnum').textContent);
        }else{
            //dibuja cuadrado color rojo
            figura_actual = 'cuadrado';
            document.getElementById('img-' + 0 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 0 + '-' + 5).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 4).className = figs[position][1][0].className;
            document.getElementById('img-' + 1 + '-' + 5).className = figs[position][1][0].className;
        }        

    }

    colocarFiguraProxima();
    position++;
}

function ocupado(x1, y1, x2, y2, x3, y3, x4, y4) {

    return document.getElementById('img-' + x1 + '-' + y1).className != 'cnone' ||
        document.getElementById('img-' + x2 + '-' + y2).className != 'cnone' ||
        document.getElementById('img-' + x3 + '-' + y3).className != 'cnone' ||
        document.getElementById('img-' + x4 + '-' + y4).className != 'cnone';
}

function gameOverMensaje() {
    timedown = 0;
    pausa = true;
    //clearTimeout(myVar);
    //clearInterval(intervalo);
    /*let mensaje = "<div class='alert alert-danger' role='alert'>" +
        "<p><b>USTED PERDIÓ CON UNA PUNTUACIÓN DE " + document.getElementById('recordnum').textContent +
        "</b></p></div>";*/
    let mensaje = "<form class='row g-3'>" +
        "<div class='col-auto'>" +
        "<p class='blanco'><b>PERDIÓ CON " + document.getElementById('recordnum').textContent + "</b></p>" +
        "</div>" +
        "<div class='col-auto'>" +
        "<input type='text' class='form-control' id='jugador' placeholder='nombre'>" +
        "</div>" +
        "<div class='col-auto'>" +
        "<input class='btn btn-primary' value='Registrar' onclick = 'registrarJugador()'>"+
        "</div>" +
        "</form>";
    //document.getElementById('gameover').innerHTML+="<p>USTED PERDIÓ CON UNA PUNTUACIÓN DE "+document.getElementById('recordnum').textContent+"</p>";
    document.getElementById('gameover').innerHTML = mensaje;
    const music = new Audio('../song/gameover.wav');
    music.play();
    /*
    var name = prompt('Type your name...');
    
    if (name!=""){
        registrarJugador(name) ;
    }
    else{
        registrarJugador("Anonymous") ;
    }
    location.reload();
    */
}



export function esperarTiempo(milisegundo) {

    let inicio = new Date().getTime();
    let end = new Date().getTime();
    while ((end - inicio) < milisegundo) {
        end = new Date().getTime();
    }
    move.moveDown(figura_actual);
    esperarTiempo(milisegundo);
}

document.onkeydown = function (e) {
    if (e.key == 'ArrowDown' && !pausa) {
        move.moveDown(figura_actual);                   
    } else if (e.key == 'ArrowRight' && !pausa) {
        move.moveRight(figura_actual);
    } else if (e.key == 'ArrowLeft' && !pausa) {
        move.moveLeft(figura_actual);
    } else if (e.key == 'ArrowUp' && !pausa) {
        move.moveRotar(figura_actual);
    } else if (e.key == 'p') {
        pausa = !pausa;
    } else if (e.key == 'r') {
        location.reload();
    } else if (e.key == 'Enter' && pausa) {
        //gameStart();
        pausa = !pausa;
    }
    //alert(e.key); // shows k75
};


function caidaConstante() {
    if (pausa) {
        //console.log("Pausa");
        return;
    }
    if(levelUp){
        clearInterval(intervalo);         
        pausa = true;
        increaseLevel();
        gameStart();
        return;
    }
    //console.log(parseInt(document.getElementById('recordnum').textContent));
    if (parseInt(document.getElementById('recordnum').textContent)>100 && Level<1){ 
        alert("Yeah..!! That was just the begining!! The game starting now. Let's start with level 1");
        levelUp = true;
    }
    else if (parseInt(document.getElementById('recordnum').textContent)>5000 && Level<2){         
        alert("Uhmm.. No bad!! I see you have skills. But, let's try a little faster..!!");
        levelUp = true;        
    }else if (parseInt(document.getElementById('recordnum').textContent)>15000 && Level<3){        
        alert("Wow.. You're really good..!! You have reached level 3. But can you deal with sorprises.??");      
        levelUp = true;     
    }else if (parseInt(document.getElementById('recordnum').textContent)>30000 && Level<4){
        alert("Amazing!! You're on level 4. I think you need go faster to encorage you. So, let me help you with that. ;)");   
        levelUp = true;             
    }else if (parseInt(document.getElementById('recordnum').textContent)>45000 && Level<5){
        alert("Impressive!! You have reach level 5. You're the best in your neiverthood.!! Can you face the standard players of the world..??");
        levelUp = true;               
    }else if (parseInt(document.getElementById('recordnum').textContent)>60000 && Level<6){        
        alert("Congratulations!! You have reach level 6");  
        levelUp = true;      
    }else if (parseInt(document.getElementById('recordnum').textContent)>75000 && Level<7){        
        alert("Congratulations!! You have reach level 7");
        levelUp = true;        
    }else if (parseInt(document.getElementById('recordnum').textContent)>100000 && Level<8){
        alert("Congratulations!! You have reach level 8");
        levelUp = true;        
    }
    else if (parseInt(document.getElementById('recordnum').textContent)>125000 && Level<9){
        alert("Congratulations!! You have reach level 9. Just a little more");
        levelUp = true;
    }
    else if (parseInt(document.getElementById('recordnum').textContent)>150000 && Level<9){
        alert("Congratulations!! You have reach level 10. The last one. I hope you get it");
        levelUp = true;
    }

    move.moveDown(figura_actual); 
       
}

var intervalo = setInterval(caidaConstante, timedown);

function gameStart() {
    //colocarFiguras();
    //clearInterval(intervalo);
    // Ejecuta caidaConstante cada timedown milisegundos (o timedown/1000 segundo)
    var intervalo = setInterval(caidaConstante, timedown);
    pausa = false;
    levelUp = false;
    
    // Para detener la ejecución, puedes usar clearInterval
    // clearInterval(intervalo);

    //esperarTiempo(1000);     
}

//gameStart();
//esperarTiempo(1000);

//document.getElementById('img-'+5+'-'+5).className = figs[0][1][0].className;
//document.getElementById('img-'+5+'-'+5).className = 'crojo';
//console.log('Figura '+figs[5]);

function increaseLevel(){
    Level++;
    /*
    if(Level == 1 | 2 | 4 | 6 | 8)
    {
        */
        /*
        timedown = timedown - 200;
        if (timedown < 0) {
            timedown = 0;
        }
        */
        //console.log(timedown);
        //console.log(intervalo);
        //Para detener la ejecución, puedes usar clearInterval
        
        //intervalo = setInterval(caidaConstante, timedown);
        //gameStart();
        //pausa = true;
    /*
    }
    */
    
}