(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición frente a la herencia!
    // A menos que sea necesario evitar los extends

    type Gender = 'M' | 'F';

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
    }
    class User {
        public email: string;
        public role: string;
        private lastAcces: Date;
        constructor({ email, role, lastAcces }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAcces = lastAcces;
        }
        checkCredentials() {
            return true;
        }
    }

    interface SettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }
    class Setting {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            { 
                workingDirectory, 
                lastOpenFolder, 
            }: SettingProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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
    class UserSetting {
        public person: Person;
        public user: User;
        public settings: Setting;

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
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role, lastAcces});
            this.settings = new Setting({workingDirectory, lastOpenFolder});
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

    console.log(userSetting);

})();