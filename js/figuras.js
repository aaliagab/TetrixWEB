class Figura{
    constructor(componente){
        this.componente = componente;
    }
}

class Cuadrado extends Figura{
    constructor(componente){
        this.matrix = new Array(2);
        this.matrix[0] = new Array(2);
        this.matrix[1] = new Array(2);
        this.matrix[0][0] = this.componente;
        this.matrix[0][1] = this.componente;
        this.matrix[1][0] = this.componente;
        this.matrix[1][1] = this.componente;
    }

    show() {
        
    }

    deleteMatrix(){
        this.matrix = null;
    }

    blankMatrix(){
        this.matrix = new Array(2);
        this.matrix[0] = new Array(2);
        this.matrix[1] = new Array(2);
    }

    deleteLineas(numero){
        if(numero==1)
            this.matrix[1] = new Array(2);
        else if(numero>=2)
            this.matrix = null;
    }
}