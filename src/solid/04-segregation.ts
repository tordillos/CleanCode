// Estan implementando los mismos métodos
interface Bird {
    fly():void;
    eat():void;
    run():void;
}
class Tucan implements Bird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { }
}

class Humminbird implements Bird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { }
}
// El avestruz no vuela... depende de la implementación de Bird
class Ostrich implements Bird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { }
}
// El pinguino no vuela pero nada y tendría que implementarlo en Bird...
// Tenemos que hacer la segregación por diferentes interfaces
class Penguin implements Bird {
    public fly(): void { }
    public eat(): void { }
    public run(): void { }
    public swim(): void {}
}
