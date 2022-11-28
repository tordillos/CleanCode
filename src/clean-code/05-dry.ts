type Size = '' | 'S' | 'M' | 'L' | 'XL'
class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady():boolean {
        for (const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if (String(this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if(Number(this[key] <= 0)) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`typeof ${key} is not supported`);
            }
        }

        return true;
    }
    
    toString() {
        if(!this.isProductReady()) return;

        return (`nombre: ${this.name} (${this.price}), ${this.size}`);
    }
}

(() => {

    const bluePants = new Product('Blue large pants', 10, 'L');

    console.log(bluePants.toString());

})();