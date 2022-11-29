(() => {

    type Gender = 'M' | 'F';

    // class Person {
    //     public name:string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender: Gender, birthdate: Date) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }
    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date) {}
    }

    const newPerson = new Person('Fernando', 'M', new Date('1985-10-2000'));
    console.log(newPerson);
    
})();