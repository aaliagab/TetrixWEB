
export function crearCuadrado(){
    let componente = document.createElement('img');
    componente.className = 'crojo';
    let matrix = new Array(2);
    matrix[0] = new Array(2);
    matrix[1] = new Array(2);
    matrix[0][0] = componente;
    matrix[0][1] = componente;
    matrix[1][0] = componente;
    matrix[1][1] = componente;
    return matrix;
}

export function crearLinea(){
    let componente = document.createElement('img');
    componente.className = 'cagua';
    let matrix = new Array(4);
    matrix[0] = new Array(1);
    matrix[1] = new Array(1);
    matrix[2] = new Array(1);
    matrix[3] = new Array(1);
    matrix[0][0] = componente;
    matrix[1][0] = componente;
    matrix[2][0] = componente;
    matrix[3][0] = componente;
    return matrix;
}

export function crearLInvertida(){
    let componente = document.createElement('img');
    componente.className = 'cazul';
    let none = document.createElement('img');
    none.className = 'cnone';
    let matrix = new Array(2);
    matrix[0] = new Array(3);
    matrix[1] = new Array(3);
    matrix[0][0] = componente;
    matrix[0][1] = none;
    matrix[0][2] = none;
    matrix[1][0] = componente;
    matrix[1][1] = componente;
    matrix[1][2] = componente;
    return matrix;
}

export function crearL(){
    let componente = document.createElement('img');
    componente.className = 'cverde';
    let none = document.createElement('img');
    none.className = 'cnone';
    let matrix = new Array(2);
    matrix[0] = new Array(3);
    matrix[1] = new Array(3);
    matrix[0][0] = none;
    matrix[0][1] = none;
    matrix[0][2] = componente;
    matrix[1][0] = componente;
    matrix[1][1] = componente;
    matrix[1][2] = componente;
    return matrix;
}

export function crearS(){
    let componente = document.createElement('img');
    componente.className = 'cmorado';
    let none = document.createElement('img');
    none.className = 'cnone';
    let matrix = new Array(2);
    matrix[0] = new Array(3);
    matrix[1] = new Array(3);
    matrix[0][0] = none;
    matrix[0][1] = componente;
    matrix[0][2] = componente;
    matrix[1][0] = componente;
    matrix[1][1] = componente;
    matrix[1][2] = none;
    return matrix;
}

export function crearT(){
    let componente = document.createElement('img');
    componente.className = 'camarillo';
    let none = document.createElement('img');
    none.className = 'cnone';
    let matrix = new Array(3);
    matrix[0] = new Array(2);
    matrix[1] = new Array(2);
    matrix[2] = new Array(2);
    matrix[0][0] = none;
    matrix[0][1] = componente;
    matrix[1][0] = componente;
    matrix[1][1] = componente;
    matrix[2][0] = none;
    matrix[2][1] = componente;
    return matrix;
}

export function crearSInvertida(){
    let componente = document.createElement('img');
    componente.className = 'cnaranja';
    let none = document.createElement('img');
    none.className = 'cnone';
    let matrix = new Array(3);
    matrix[0] = new Array(2);
    matrix[1] = new Array(2);
    matrix[2] = new Array(2);
    matrix[0][0] = none;
    matrix[0][1] = componente;
    matrix[1][0] = componente;
    matrix[1][1] = componente;
    matrix[2][0] = componente;
    matrix[2][1] = none;
    return matrix;
}