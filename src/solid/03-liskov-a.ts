import { Tesla, Audi, Toyota, Honda, Volvo, Car, Ford } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Car[] ) => {
        // Ahora no necesitamos modificacionos en el método al añadir un nuevo tipo de vehiculo
        cars.forEach(car => {
            // Ahora sacamos el nombre del constructor
            console.log(`${car.constructor.name} ${car.getNumberOfSeats()}`);
        })
            
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(5),
        new Ford(2),
    ];


    printCarSeats( cars );

})();