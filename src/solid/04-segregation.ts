// Estan implementando los mismos métodos
interface Bird {
    eat():void;
}
interface FlyingBird {
    fly():void;
}
interface RunningBird {
    run():void;
}
interface SwimmerBird {
    swim(): void;
}
class Tucan implements Bird, FlyingBird {
    public fly(): void { }
    public eat(): void { }
}

class Humminbird implements Bird, FlyingBird {
    public fly(): void { }
    public eat(): void { }
}
// El avestruz no vuela... depende de la implementación de Bird
class Ostrich implements Bird, RunningBird {
    public eat(): void { }
    public run(): void { }
}
// El pinguino no vuela pero nada y tendría que implementarlo en Bird...
// Tenemos que hacer la segregación por diferentes interfaces
class Penguin implements Bird, RunningBird, SwimmerBird {
    public eat(): void { }
    public run(): void { }
    public swim(): void {}
}
