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
    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }
    interface UserProps {
        email: string,
        role: string,
        lastAcces: Date,
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    class User extends Person {
        public email: string;
        public role: string;
        private lastAcces: Date;

        constructor({ email, role, lastAcces, name, gender, birthdate }: UserProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAcces = lastAcces;
        }
        checkCredentials() {
            return true;
        }
    }

    interface UserSettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        lastAcces: Date;
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    class UserSetting extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            { 
                workingDirectory, 
                lastOpenFolder, 
                email, 
                role, 
                lastAcces, 
                name,
                gender,
                birthdate 
            }: UserSettingProps
        ) {
            super({ email, role, lastAcces, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSetting = new UserSetting( {
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'email@email',
        role: 'Admin',
        lastAcces: new Date('1998-10-21'),
        name: 'prueba',
        gender: 'M',
        birthdate: new Date('1998-10-21')
    }
    );

    // console.log(userSetting);

})();