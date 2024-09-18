class FiguraGeometrica {
    constructor() {
    }
    calcularArea(){
    }
}

class Cuadrado extends FiguraGeometrica{
    constructor(lado) {
        super()
        this.lado = lado
    }
    calcularArea(){

        return this.lado*this.lado
    }
}

class Triangulo extends FiguraGeometrica{
    constructor(base,altura) {
        super()
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return (this.base*this.altura)/2
    }
}

class Rectangulo extends FiguraGeometrica{
    constructor(base1,altura1) {
        super()
        this.base1 = base1
        this.altura1 = altura1
    }
    calcularArea(){
        return this.base1*this.altura1
    }
    }


function clasificarFigura(figura) {
    const area = figura.calcularArea()
    if ( area < 20 ) {
        return "pequeña"
    } else {
        return "grande"
    }
}

const cuadrado = new Cuadrado(4);
const triangulo = new Triangulo(3,5);
const rectangulo = new Rectangulo(8,6);

console.log(cuadrado.calcularArea());
console.log(clasificarFigura(cuadrado));

console.log(triangulo.calcularArea());
console.log(clasificarFigura(triangulo));

console.log(rectangulo.calcularArea());
console.log(clasificarFigura(rectangulo));