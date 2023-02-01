
// Trabajando con herencia y abastracción
// Buscamos que las clases tengan todos los métodos y propiedades que la clase abstracta va a obligarles a tener
export abstract class Car {

    // getNumberOfTeslaSeats():number {
    //     throw Error('Method not implemented');
    // }
    abstract getNumberOfSeats(): number;

}

export class Tesla extends Car {
    
    constructor( private numberOfSeats: number ) {
        // Generar el construcor de la clase Car
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

}

export class Audi extends Car {

    constructor( private numberOfSeats: number ) {
        // Generar el construcor de la clase Car
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Car {

    constructor( private numberOfSeats: number ) {
        // Generar el construcor de la clase Car
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Car {

    constructor( private numberOfSeats: number ) {
        // Generar el construcor de la clase Car
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}
export class Volvo extends Car {

    constructor( private numberOfSeats: number ) {
        // Generar el construcor de la clase Car
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}
export class Ford extends Car {

    constructor( private numberOfSeats: number ) {
        // Generar el construcor de la clase Car
        super();
    }
    
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}


