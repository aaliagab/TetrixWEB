document.onkeydown = function(e) {
    if(e.key=='ArrowDown')
    {
        //alert('Down');
        down();
    }else if(e.key=='ArrowRight')
    {
        alert('Right');
    }else if(e.key=='ArrowLeft')
    {
        alert('Left');
    }else if(e.key=='ArrowUp')
    {
        alert('Up');
    }
    //alert(e.key+e.keyCode); // shows k75
};


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




document.getElementById('img-'+5+'-'+5).className = figs[0][1][0].className;
//document.getElementById('img-'+5+'-'+5).className = 'crojo';
console.log('Figura '+figs[5]);