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
        tdcount++;        
        let img = document.createElement('img');
        img.className = 'cnone';
        td.appendChild(img);
        tr.appendChild(td);
        //console.log(img.className+' '+td.id);
        
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
