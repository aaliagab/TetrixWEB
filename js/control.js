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
var obj = document.getElementById("figura");
    obj.left = 0;
    obj.top = 0;
    var top2, left2, right, bot;
    var up, lef, righ, bont;
    function c() {
        up = top2;
        lef = left2;
        righ = right;
        bont = bot;
        f();
    }
    function f1(event) {
        top2 = event.keyCode;
    }
    function f2(event) {
        bot = event.keyCode;
    }
    function f3(event) {
        left2 = event.keyCode;
    }
    function f4(event) {
        right = event.keyCode;
    }
    function f() {
        console.log(event.keyCode);
        if (event.keyCode == lef) {
            obj.left -= 40;
        }
        if (event.keyCode == up) {
            obj.top -= 40;
        }
        if (event.keyCode == righ) {
            obj.left += 40;
        }
        if (event.keyCode == bont) {
            obj.top += 40;
        }
        obj.style.left = obj.left + 'px', obj.style.top = obj.top + 'px';
    }
    document.onkeydown = f;