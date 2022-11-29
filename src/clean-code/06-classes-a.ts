(() => {
    
    // No aplicando el principio de responsabilidad única

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
    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAcces: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
        }
        checkCredentials() {
            return true;
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            lastAcces: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, lastAcces, name, gender, birthdate);
        }
    }

    const userSetting = new UserSetting(
        '/usr/home',
        '/home',
        'email@email',
        'Admin',
        new Date('1998-10-21'),
        'prueba',
        'M',
        new Date('1998-10-21')
    );

    console.log(userSetting);

})();